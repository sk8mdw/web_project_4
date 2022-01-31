import "../pages/index.css"
import FormValidator from "../components/FormValidator.js";
import Card from "../components/card.js";
import Section from "../components/section.js";
import PopupWithImage from "../components/popup-with-image.js";
import PopupWithForm from "../components/popup-with-form.js";
import UserInfo from "../components/user-info.js";
import { initialCards, formValidationSettings, selectors } from "../utils/constants.js";

import { openModalWindow, closeModalWindow } from "../scripts/utils.js";

/* -------------------------------- Functions ------------------------------- */
function prefillEditForm(modalWindow) {
  nameInput.value = name.textContent;
  descriptionInput.value = description.textContent;
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  description.textContent = descriptionInput.value;
  closeModalWindow(editModal);
  editFormValidator.toggleButtonState();
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const card = {
    title: titleInput.value,
    image: imageUrlInput.value,
  };

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

const userInfo = new UserInfo({
  nameSelector: popupEditUserInfo.nameSelector,
  aboutSelector: popupEditUserInfo.aboutSelector,
});

// const createCard = (data) =>
//   new Card( {
//     data: card,
//     handleCardClick: (imgData) => {
      
//     }
//   })

const CardSection = new Section({
 renderer: (item) => {
   const cardElement = new Card(item, selectors.cardTemplate);
   CardSection.addItem(cardElement.getView());
 },
},
 selectors.cardSection,
);

CardSection.renderItems(initialCards);


/* ----------------------------- Event listeners ---------------------------- */
editForm.addEventListener('submit', handleEditFormSubmit);

profileEditButton.addEventListener('click', () => {
  prefillEditForm(editModal);
  openModalWindow(editModal);
});

editModalCloseButton.addEventListener('click', () => closeModalWindow(editModal));

addForm.addEventListener('submit', handleAddFormSubmit);

addCardButton.addEventListener('click', () => openModalWindow(addModal));

addModalCloseButton.addEventListener('click', () => closeModalWindow(addModal));

previewModalCloseButton.addEventListener('click', () => closeModalWindow(previewModal));

// initialCards.forEach((card) => {
//   renderCard(card);
// });

/* ------------------------------- Validation ------------------------------- */

const editFormEl = editModal.querySelector('.popup__form');
const addFormEl = addModal.querySelector('.popup__form');


const editFormValidator = new FormValidator(formValidationSettings, editFormEl);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(formValidationSettings, addFormEl);
addFormValidator.enableValidation();
}
