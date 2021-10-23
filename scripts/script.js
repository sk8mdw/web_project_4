let popupEl = document.querySelector(".popup");
let editFormEl = document.querySelector(".popup__form");
let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close-button");
let nameInput = document.querySelector(".popup__input_text_name");
let titleInput = document.querySelector(".popup__input_text_title");
let name = document.querySelector(".profile__name");
let title = document.querySelector(".profile__title");

function formOpen() {
  popupEl.classList.add("popup_opened");
  nameInput.value = name.textContent;
  titleInput.value = title.textContent;
}

function formClose() {
  popupEl.classList.remove("popup_opened");
}

function formSubmit(evt) {
  evt.preventDefault();

  name.textContent = nameInput.value;
  title.textContent = titleInput.value;

  formClose();
}

editButton.addEventListener("click", formOpen);

closeButton.addEventListener("click", formClose);

editFormEl.addEventListener("submit", formSubmit);