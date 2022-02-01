import "./index.css";

/* ----------------------------- Import classes ----------------------------- */
import FormValidator from "../components/FormValidator.js";
import Card from "../components/card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards, formValidationSettings, selectors, popupEditUser, popupAddCard } from "../utils/constants.js";


/* --------------------- Create instances of the classes -------------------- */
const userInfo = new UserInfo({
  nameSelector: popupEditUser.nameSelector,
  descriptionSelector: popupEditUser.descriptionSelector,
});

const cardPreviewPopup = new PopupWithImage(selectors.previewPopup);
cardPreviewPopup.setEventListeners();


const createCard = (card) =>
new Card({
  data:card, handleCardClick: (imageData) => {
  cardPreviewPopup.open(imageData);
  },
},
selectors.cardTemplate,
);

const cardSection = new Section({
 renderer: (item) => {
   const cardElement = createCard(item);
   cardSection.addItem(cardElement.getView());
 },
},
 selectors.cardSection,
);
cardSection.renderItems(initialCards);


const editForm = new PopupWithForm(
  popupEditUser.editModal,
  (evt) => {
    evt.preventDefault();

    const inputValue = editForm.getInputValues();
    userInfo.setUserInfo({
      name: inputValue.name,
      description: inputValue.description,
    });

    editForm.close();
    editFormValidator.resetValidation();
  },
);
editForm.setEventListeners();

const addForm = new PopupWithForm(
  popupAddCard.addModal,
  (evt) => {
    evt.preventDefault();

    const inputValue = addForm.getInputValues();

    const cardElement = createCard({
      title: inputValue.title,
      image: inputValue.imageurl,
    });
    cardSection.addItem(cardElement.getView());

    addForm.close();
    addFormValidator.resetValidation();
  },
);
addForm.setEventListeners();

/* --------------------- Prefill function and constants --------------------- */
function prefillEditForm(modalWindow) {
  const { name, description } = userInfo.getUserInfo();
  nameInput.value = name;
  descriptionInput.value = description;
}

// const profileName = document.querySelector(".profile__name");
// const profileAbout = document.querySelector(".profile__description");

const nameInput = document.querySelector("#owner-name");
const descriptionInput = document.querySelector("#owner-description");


/* ----------------------------- Event listeners ---------------------------- */
popupEditUser.editButton.addEventListener("click", () => {
  prefillEditForm(editForm);
  editForm.open();
});

// editProfileCloseButton.addEventListener("click", () => editPopup.close());

popupAddCard.addButton.addEventListener("click", () => {
  addForm.open();
});

/* ------------------------------- Validation ------------------------------- */

const editFormEl = document.querySelector('.popup_type_edit');
const addFormEl = document.querySelector('.popup_type_add');

const editFormValidator = new FormValidator(formValidationSettings, editFormEl);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(formValidationSettings, addFormEl);
addFormValidator.enableValidation();