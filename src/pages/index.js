import "./index.css";

/* ----------------------------- Import classes ----------------------------- */
import FormValidator from "../components/FormValidator.js";
import Card from "../components/card.js";
import Section from "../components/section.js";
import PopupWithImage from "../components/popup-with-image.js";
import PopupWithForm from "../components/popup-with-form.js";
import UserInfo from "../components/user-info.js";
import { initialCards, formValidationSettings, selectors, } from "../utils/constants.js";

import { openModalWindow, closeModalWindow } from "../scripts/utils.js";

/* --------------------- Create instances of the classes -------------------- */
const cardPreviewPopup = new PopupWithImage(selectors.previewPopup);
cardPreviewPopup.setEventListeners();


const createCard = (card) =>
new Card({
  data:card, handleCardClick: (imageData) => {
  cardPreviewPopup.open(imageData);
  console.log(imageData);
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


const modalEditForm = new PopupWithForm(
  modalEditUserInfo.selector,
  (evt) => {
    evt.preventDefault();

    const inputValue = modalEditForm.getInputValues();
    userInfo.setUserInfo({
      name: inputValue.name,
      about: inputValue.about,
    });

    modalEditForm.close();
  },
);
modalEditForm.setEventListeners();

const modalAddForm = new PopupWithForm(
  modalAddCard.selector,
  (evt) => {
    evt.preventDefault();

    const inputValue = modalAddForm.getInputValues();
    const cardElement = createCard({
      name: inputValue.title,
      link: inputValue.link,
    });
    cardSection.addItem(cardElement.getView());

    modalAddForm.close();
  },
);
modalAddForm.setEventListeners();


/* ----------------------------- Event listeners ---------------------------- */
// editForm.addEventListener('submit', handleEditFormSubmit);

// profileEditButton.addEventListener('click', () => {
//   prefillEditForm(editModal);
//   openModalWindow(editModal);
// });

// editModalCloseButton.addEventListener('click', () => closeModalWindow(editModal));

// addForm.addEventListener('submit', handleAddFormSubmit);

// addCardButton.addEventListener('click', () => openModalWindow(addModal));

// addModalCloseButton.addEventListener('click', () => closeModalWindow(addModal));

// previewModalCloseButton.addEventListener('click', () => closeModalWindow(previewModal));

// initialCards.forEach((card) => {
//   renderCard(card);
// });

/* ------------------------------- Validation ------------------------------- */

// const editFormEl = editModal.querySelector('.popup__form');
// const addFormEl = addModal.querySelector('.popup__form');


// const editFormValidator = new FormValidator(formValidationSettings, editFormEl);
// editFormValidator.enableValidation();

// const addFormValidator = new FormValidator(formValidationSettings, addFormEl);
// addFormValidator.enableValidation();



/* -------------------------------- Functions ------------------------------- */

// function prefillEditForm(modalWindow) {
//   nameInput.value = name.textContent;
//   descriptionInput.value = description.textContent;
// }

// function handleEditFormSubmit(evt) {
//   evt.preventDefault();
//   name.textContent = nameInput.value;
//   description.textContent = descriptionInput.value;
//   closeModalWindow(editModal);
//   editFormValidator.toggleButtonState();
// }

// function handleAddFormSubmit(evt) {
//   evt.preventDefault();
//   const card = {
//     title: titleInput.value,
//     image: imageUrlInput.value,
//   }
  

//   renderCard(card);
//   closeModalWindow(addModal);
//   addForm.reset();
//   addFormValidator.toggleButtonState();
// }

// function renderCard(card) {
//   const cardElement = new Card(card, cardSelector);
//   addCard(cardElement, placesList)
//   return cardElement;
// }

// function addCard(card, placesList) {
//   placesList.prepend(card.getView());
// }

// const userInfo = new UserInfo({
//   nameSelector: popupEditUserInfo.nameSelector,
//   aboutSelector: popupEditUserInfo.aboutSelector,
// });