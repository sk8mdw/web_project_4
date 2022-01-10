import FormValidator from "./FormValidator.js";

console.log(FormValidator);

/* -------------------------------- Wrappers -------------------------------- */
const editModal = document.querySelector(".popup_type_edit");
const editForm = editModal.querySelector(".popup__form");
const addModal = document.querySelector(".popup_type_add");
const addForm = addModal.querySelector(".popup__form");
const previewModal = document.querySelector('.popup_type_preview');
const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector("#cardTemplate").content.querySelector('.card');

/* -------------------------- Buttons and DOM nodes ------------------------- */
const profileEditButton = document.querySelector(".profile__edit-button");
const editModalCloseButton = editModal.querySelector(".popup__close-button");
const name = document.querySelector(".profile__name");
const description = document.querySelector(".profile__description");
const addCardButton = document.querySelector('.profile__add-button');
const addModalCloseButton = addModal.querySelector(".popup__close-button");
const previewModalCloseButton = previewModal.querySelector(".popup__close-button");
const previewModalImg = previewModal.querySelector('.popup__image');
const previewModalTitle = previewModal.querySelector('.popup__caption');
const saveButton = document.querySelector('#editSaveButton');


/* -------------------------------- Form data ------------------------------- */
const nameInput = editForm.querySelector(".popup__input_text_name");
const descriptionInput = editForm.querySelector(".popup__input_text_description");
const titleInput = addForm.querySelector('.popup__input_text_title');
const imageUrlInput = addForm.querySelector('.popup__input_text_image-url');

/* -------------------------------- Functions ------------------------------- */
function prefillEditForm(modalWindow) {
  nameInput.value = name.textContent;
  descriptionInput.value = description.textContent;
}

// adding open and close modalWindow functions, escape key function
function openModalWindow(modalWindow) {
  modalWindow.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closeModalWindow(modalWindow) {
  modalWindow.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    closeModalWindow(document.querySelector('.popup_opened'));
  }
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

function showPreview(card) {
  previewModalImg.src = card.image;
  previewModalTitle.textContent = card.title;
  previewModalImg.alt = card.title;
  openModalWindow(previewModal);
}

function generateCard(card) {
  const cardEl = cardTemplate.cloneNode(true);
  const cardImage = cardEl.querySelector('.card__image');
  cardEl.querySelector('.card__title').textContent = card.title;
  cardImage.src = card.image;
  cardImage.alt = card.title;

  cardEl.querySelector('.card__delete-button').addEventListener('click', () => { cardEl.remove() });

  const likeButton = cardEl.querySelector('.card__like-button');
  likeButton.addEventListener('click', () => { likeButton.classList.toggle("liked") });

  cardImage.addEventListener('click', () => showPreview(card));

  return cardEl;
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const card = {
    title: titleInput.value,
    image: imageUrlInput.value,
    alt: titleInput.value,
  };

  const cardEl = generateCard(card);
  placesList.prepend(cardEl);
  disableSaveButton();
  closeModalWindow(addModal);
  addForm.reset();
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

/* --------------------------------- Actions -------------------------------- */
initialCards.forEach((card) => {
  const cardEl = generateCard(card);
  placesList.append(cardEl);
});

/* ------------------------------- Validation ------------------------------- */

const editFormEl = editModal.querySelector('.popup__form');
const addFormEl = addModal.querySelector('.popup__form');

const formValidationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_type_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const editFormValidator = new FormValidator(formValidationConfig, editFormEl);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(formValidationConfig, addFormEl);
addFormValidator.enableValidation();