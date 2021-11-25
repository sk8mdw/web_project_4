/* -------------------------------- Wrappers -------------------------------- */
const editModal = document.querySelector(".popup_type_edit");
const editForm = editModal.querySelector(".popup__form");
const addModal = document.querySelector(".popup_type_add");
const addForm = addModal.querySelector(".popup__form");
const previewModal = document.querySelector('.popup_type_preview');
const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector("#cardTemplate").content.querySelector('.card');

/* -------------------------- Buttons and DOM nodes ------------------------- */
const profileEditBtn = document.querySelector(".profile__edit-button");
const editModalCloseBtn = editModal.querySelector(".popup__close-button");
const name = document.querySelector(".profile__name");
const description = document.querySelector(".profile__description");
const addCardButton = document.querySelector('.profile__add-button');
const addModalCloseBtn = addModal.querySelector(".popup__close-button");
const previewModalCloseBtn = previewModal.querySelector(".popup__close-button");
const previewModalImg = previewModal.querySelector('.popup__image');
const previewModalTitle = previewModal.querySelector('.popup__caption');


/* -------------------------------- Form data ------------------------------- */
const nameInput = editForm.querySelector(".popup__input_text_name");
const descriptionInput = editForm.querySelector(".popup__input_text_description");
const titleInput = addForm.querySelector('.popup__input_text_title');
const imageUrlInput = addForm.querySelector('.popup__input_text_image-url');

/* -------------------------------- Functions ------------------------------- */
function prefillEditForm(modalWindow) {
  if (!modalWindow.classList.contains('popup_opened')) {
    nameInput.value = name.textContent;
    descriptionInput.value = description.textContent;
  }
}

function toggleModalWindow(modalWindow) {
  modalWindow.classList.toggle('popup_opened');
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  description.textContent = descriptionInput.value;
  toggleModalWindow(editModal);
}

function showPreview(card)  {
  previewModalImg.src = card.image;
  previewModalTitle.textContent = card.title;
  previewModalImg.alt = card.title;
  toggleModalWindow(previewModal);
}

function generateCard(card) {
  const cardEl = cardTemplate.cloneNode(true);
  cardEl.querySelector('.card__title').textContent = card.title;
  cardEl.querySelector('.card__image').src = card.image;
  cardEl.querySelector('.card__image').alt = card.title;

  cardEl.querySelector('.card__delete-button').addEventListener('click', () => {cardEl.remove()});
  
  const likeButton = cardEl.querySelector('.card__like-button');
  likeButton.addEventListener('click', () => {likeButton.classList.toggle("liked")});
  
  cardEl.querySelector('.card__image').addEventListener('click', () => showPreview(card));

  return cardEl;
}

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  const card = {
    title: titleInput.value,
    image: imageUrlInput.value,
    alt: titleInput.value,
  };

  const cardEl = generateCard(card);
  placesList.prepend(cardEl);
  toggleModalWindow(addModal);
}

/* ----------------------------- Event listeners ---------------------------- */
editForm.addEventListener('submit', editFormSubmitHandler);
profileEditBtn.addEventListener('click', () => {
  prefillEditForm(editModal);
  toggleModalWindow(editModal);
});

editModalCloseBtn.addEventListener('click', () => toggleModalWindow(editModal));
addForm.addEventListener('submit', addFormSubmitHandler);
addCardButton.addEventListener('click', () => toggleModalWindow(addModal));
addModalCloseBtn.addEventListener('click', () => toggleModalWindow(addModal));
previewModalCloseBtn.addEventListener('click', () => toggleModalWindow(previewModal));

/* --------------------------------- Actions -------------------------------- */
initialCards.forEach((card) => {
  cardEl = generateCard(card);
  placesList.append(cardEl);
});
