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
import { formValidationSettings, selectors, popupEditUser, popupEditAvatar, popupAddCard, initialCards } from "../utils/constants.js";
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
/*                  Working on user profile and avatar edits                  */
/* -------------------------------------------------------------------------- */
const editForm = new PopupWithForm({
  popupSelector: ".popup_type_edit",
  handleFormSubmit: (data) => {
    renderLoading(".popup_type_edit", true);
    api
      .getUserInfo({
        name: data.profileName,
        about: data.profileDescription,
      })
      .then((data) => {
        userInfo.setUserInfo({
          name: data.name,
          description: data.about,
        });
        editForm.close();
      })
      .catch((err) =>
        console.warn(`Unable to update profile information: ${err}`)
      )
      .finally(() => {
        renderLoading(".popup_type_edit");
      });
  },
});


const addForm = new PopupWithForm({
  popupSelector: ".popup_type_add",
  handleFormSubmit: (data) => {
    renderLoading(".popup_type_add", true);
    api
      .addCard(data)
      .then((cardData) => {
        cardSection.addItem(createCard(cardData));
        addForm.close();
        console.log(cardData);
      })
      .catch((err) => console.error(`Unable to add a card: ${err}`))
      .finally(() => {
        renderLoading(".popup_type_add");
      });
  },
});


// addCardButton.addEventListener("click", () => {
//   addCardPopup.openModal();
//   addCardValidator.toggleButtonState();
// });


// const popupEditAvatarForm = new PopupWithForm(
//   popupEditAvatar.selector,
//   { defaultText: 'Save', updatingText: 'Saving...' },
//   (formInput) =>
//     api
//       .setUserAvatar({ avatar: formInput.link })
//       .then((data) => {
//         userInfo.setUserInfo({
//           name: data.name,
//           about: data.about,
//           avatar: data.avatar,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       }),
// );
// popupEditAvatarForm.setEventListeners();

// 




/* -------------------------------------------------------------------------- */
/*                   Disabled to troubleshoot user edit form                  */
/* -------------------------------------------------------------------------- */
// const createCard = (card) =>
// new Card({
// data:card, handleCardClick: (imageData) => {
// cardPreviewPopup.open(imageData);
// },
// },
// selectors.cardTemplate,
// );

// const cardSection = new Section({
//  renderer: (item) => {
//  const cardElement = createCard(item);
//  cardSection.addItem(cardElement.getView());
//  },
// },
//  selectors.cardSection,
// );
// cardSection.renderItems(initialCards);
/* -------------------------------------------------------------------------- */
/*                   Disabled to troubleshoot user edit form                  */
/* -------------------------------------------------------------------------- */





/* -------------------------------------------------------------------------- */
/*                       Prefill function and constants                       */
/* -------------------------------------------------------------------------- */
function prefillEditForm(modalWindow) {
  const { name, description } = userInfo.getUserInfo();
  nameInput.value = name;
  descriptionInput.value = description;
}

const nameInput = document.querySelector("#owner-name");
const descriptionInput = document.querySelector("#owner-description");


/* -------------------------------------------------------------------------- */
/*                               Event listeners                              */
/* -------------------------------------------------------------------------- */
editForm.setEventListeners();
addForm.setEventListeners();

popupEditUser.editButton.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();
  nameInput.value = currentUserInfo.name;
  descriptionInput.value = currentUserInfo.description;
  editForm.open(currentUserInfo);
});


popupAddCard.addButton.addEventListener("click", () => {
  addForm.open();
});

/* -------------------------------------------------------------------------- */
/*                                 Validation                                 */
/* -------------------------------------------------------------------------- */

const editFormEl = document.querySelector('.popup_type_edit');
const addFormEl = document.querySelector('.popup_type_add');

const editFormValidator = new FormValidator(formValidationSettings, editFormEl);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(formValidationSettings, addFormEl);
addFormValidator.enableValidation();
