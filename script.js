let popupEl = document.querySelector(".popup");
let editFormEl = document.querySelector(".popup__form");
let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".button_close");
let nameInput = document.querySelector(".popup__input_name");
let titleInput = document.querySelector(".popup__input_title");
let name = document.querySelector(".profile__name");
let title = document.querySelector(".profile__title");

function formOpen() {
  popupEl.classList.add("popup_opened");
  nameInput.value = "";
  titleInput.value = "";
}

function formClose() {
  popupEl.classList.remove("popup_opened");
}

function formSubmit(evt) {
  evt.preventDefault();
  nameInputValue = nameInput.value;
  titleInputValue = titleInput.value;

  name.textContent = nameInputValue;
  title.textContent = titleInputValue;

  formClose();
}

editButton.addEventListener("click", formOpen);

closeButton.addEventListener("click", formClose);

editFormEl.addEventListener("submit", formSubmit);