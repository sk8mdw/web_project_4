import FormValidator from "./FormValidator.js";
import Card from "./card.js";
import { openModalWindow, closeModalWindow } from "./utils.js";

/* -------------------------------- Wrappers -------------------------------- */
const editModal = document.querySelector(".popup_type_edit");
const editForm = editModal.querySelector(".popup__form");
const addModal = document.querySelector(".popup_type_add");
const addForm = addModal.querySelector(".popup__form");
const placesList = document.querySelector('.places__list');

/* -------------------------- Buttons and DOM nodes ------------------------- */
const profileEditButton = document.querySelector(".profile__edit-button");
const editModalCloseButton = editModal.querySelector(".popup__close-button");
const name = document.querySelector(".profile__name");
const description = document.querySelector(".profile__description");
const addCardButton = document.querySelector('.profile__add-button');
const addModalCloseButton = addModal.querySelector(".popup__close-button");
const previewModal = document.querySelector('.popup_type_preview');
const previewModalCloseButton = previewModal.querySelector(".popup__close-button");
const saveButton = document.querySelector('#editSaveButton');


/* -------------------------------- Form data ------------------------------- */
const nameInput = editForm.querySelector(".popup__input_text_name");
const descriptionInput = editForm.querySelector(".popup__input_text_description");
const titleInput = addForm.querySelector('.popup__input_text_title');
const imageUrlInput = addForm.querySelector('.popup__input_text_image-url');

const cardSelector = document.querySelector("#cardTemplate");

/* -------------------------------- Functions ------------------------------- */
function prefillEditForm(modalWindow) {
  nameInput.value = name.textContent;
  descriptionInput.value = description.textContent;
}


function disableSaveButton() {
  saveButton.classList.add('popup__save-button_type_disabled');
  saveButton.disabled = true;
}
// 

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  description.textContent = descriptionInput.value;
  closeModalWindow(editModal);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const card = {
    title: titleInput.value,
    image: imageUrlInput.value,
    alt: titleInput.value,
  };

  renderCard(card);
  closeModalWindow(addModal);
  addForm.reset();
  disableSaveButton();
}

function renderCard(card) {
  const cardElement = new Card(card, cardSelector);
  addCard(cardElement, placesList)
  return cardElement;
}

function addCard(card, placesList) {
  placesList.prepend(card.getView());
}


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

editModal.addEventListener('click', (e) => {
  if (e.target === editModal) {
    closeModalWindow(editModal);
  }
});

addModal.addEventListener('click', (e) => {
  if (e.target === addModal) {
    closeModalWindow(addModal);
  }
});

previewModal.addEventListener('click', (e) => {
  if (e.target === previewModal) {
    closeModalWindow(previewModal);
  }
});

initialCards.forEach((card) => {
  renderCard(card);
});

/* ------------------------------- Validation ------------------------------- */

const editFormEl = editModal.querySelector('.popup__form');
const addFormEl = addModal.querySelector('.popup__form');

const formValidationSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_type_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const editFormValidator = new FormValidator(formValidationSettings, editFormEl);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(formValidationSettings, addFormEl);
addFormValidator.enableValidation();