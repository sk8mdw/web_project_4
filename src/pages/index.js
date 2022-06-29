import "./index.css";

/* -------------------------------------------------------------------------- */
/*                               Import classes                               */
/* -------------------------------------------------------------------------- */
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import { formValidationSettings, selectors, popupEditUser, popupEditAvatar, popupAddCard, popupDeleteCard } from "../utils/constants.js";
import Api from "../components/Api.js";
import { renderLoading } from "../utils/utils.js";


/* -------------------------------------------------------------------------- */
/*                       Create instances of the classes                      */
/* -------------------------------------------------------------------------- */
const userInfo = new UserInfo({
  nameSelector: popupEditUser.nameSelector,
  descriptionSelector: popupEditUser.descriptionSelector,
  avatarSelector: popupEditAvatar.avatarSelector,
});

const cardPreviewPopup = new PopupWithImage(selectors.previewPopup);
cardPreviewPopup.setEventListeners();

const api = new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/group-12',
  headers: {
    authorization: 'acca9dd3-a6a4-4626-88e2-60619602bdf9',
    'Content-Type': 'application/json',
  },
});


/* -------------------------------------------------------------------------- */
/*              Working on promise all to get cards and user info             */
/* -------------------------------------------------------------------------- */

Promise.all([api.getUserInfo(), api.getInitialCards() ])
  .then(([userData, cards]) => {
    // const { name, description } = userInfo;
    userId = userData._id;
    userInfo.setUserInfo(userData);
    console.log('userdata', userData);
    // api.setUserInfo({
    //   name: userData.name,
    //   about: userData.about,
    // });
    cardList.renderItems(cards.reverse());
    /* -------------------------------------------------------------------------- */
    /*                    console log cards to check owner data                   */
    /* -------------------------------------------------------------------------- */
    // console.log(userData);
  })
  .catch((err) => console.warn('${err}'));

/* -------------------------------------------------------------------------- */
/*                               another attempt                              */
/* -------------------------------------------------------------------------- */


let userId = null;

const createCard = (data) => {
  const card = new Card(
    {
      currentId: userId,
      data,
      handleCardClick: () => {
        cardPreviewPopup.open(data)
      },
      handleDeleteButton: (cardElement) => {
        removeCardPopup.open(() => {
          api
          .removeCard(data._id)
          .then(() => {
            cardElement.remove();
            removeCardPopup.close();
          })
          .catch((err) => {
            console.log(`There was an issue deleting this card: ${err}`);
          });
      });
    },

    handleLikeButton: () => {
      if(card.isLiked()) {
        api
        .removeLike(data._id)
        .then((res) => {
          card.setLikes(res.likes);
        })
        .catch((err) => {
            console.log(err);
        });
      } else {
        api
        .addLike(data._id)
        .then((res) => {
          console.log('res', res);
          card.setLikes(res.likes);
        })
        .catch((err) => {
            console.log(err);
        });
      }

    }
    },
    selectors.cardTemplate
    );
    // console.log(card);
    return card;
  }
  

const cardList = new Section({
  renderer: (item) => {
    const newCard = createCard(item);
    const cardElement = newCard.getView();
    cardList.addItem(cardElement);
  },
},
selectors.cardSection
);


const editForm = new PopupWithForm({
  popupSelector: popupEditUser.editModal,
  handleFormSubmit: (data) => {
    renderLoading(popupEditUser.editModal, true);
    api
      .setUserInfo({
        name: data.name,
        about: data.description,
      })
      .then((info) => {
        userInfo.setUserInfo(info);
        console.log('info', info);
        editForm.close();
      })
      .catch((err) =>
        console.warn(`Unable to update profile information: ${err}`)
      )
      .finally(() => {
        renderLoading(popupEditUser.editModal);
      });
  },
});

const avatarEdit = new PopupWithForm({
  popupSelector: popupEditAvatar.selector,
  handleFormSubmit: (data) => {
    renderLoading(popupEditAvatar.selector, true);
    api
      .setUserAvatar({ 
        avatar: data.avatar })
      .then((info) => {
        userInfo.setAvatar(info);
        console.log('info', info.avatar);
        avatarEdit.close();
      })
      .catch((err) => console.warn(`Unable change the user avatar: ${err}`))
      .finally(() => {
        renderLoading(popupEditAvatar.selector);
      });
  },
});


const addForm = new PopupWithForm({
  popupSelector: popupAddCard.addModal,
  handleFormSubmit: (data) => {
    renderLoading(popupAddCard.addModal, true);
    api
      .addCard(data)
      .then((data) => {
        const newCard = (createCard(data));
        cardList.addItem(newCard.getView());
        addForm.close();
      })
      .catch((err) => console.warn(`Unable to add a card: ${err}`))
      .finally(() => {
        renderLoading(popupAddCard.addModal);
      });
  },
});

const removeCardPopup = new PopupWithConfirmation({
  popupSelector: popupDeleteCard.deleteCardSelector,
  handleDeleteCard: () => {},
})

 
/* -------------------------------------------------------------------------- */
/*                       Prefill function and constants                       */
/* -------------------------------------------------------------------------- */
// function prefillEditForm(modalWindow) {
//   const { name, description } = userInfo.getUserInfo();
//   nameInput.value = name;
//   descriptionInput.value = description;
// }

const nameInput = document.querySelector("#owner-name");
const descriptionInput = document.querySelector("#owner-description");


/* -------------------------------------------------------------------------- */
/*                               Event listeners                              */
/* -------------------------------------------------------------------------- */
editForm.setEventListeners();
avatarEdit.setEventListeners();
addForm.setEventListeners();
removeCardPopup.setEventListeners();

popupEditUser.editButton.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();
  nameInput.value = currentUserInfo.name;
  descriptionInput.value = currentUserInfo.description;
  editForm.open(currentUserInfo);
});

popupEditAvatar.button.addEventListener("click", (evt) => {
  evt.preventDefault();
  avatarEdit.open();
});

popupAddCard.addButton.addEventListener("click", () => {
  addForm.open();
});

/* -------------------------------------------------------------------------- */
/*                                 Validation                                 */
/* -------------------------------------------------------------------------- */

const editFormEl = document.querySelector('.popup_type_edit');
const avatarEditEl = document.querySelector('.popup_type_avatar');
const addFormEl = document.querySelector('.popup_type_add');

const editFormValidator = new FormValidator(formValidationSettings, editFormEl);
editFormValidator.enableValidation();

const avatarEditValidator = new FormValidator(formValidationSettings, avatarEditEl);
avatarEditValidator.enableValidation();

const addFormValidator = new FormValidator(formValidationSettings, addFormEl);
addFormValidator.enableValidation();
