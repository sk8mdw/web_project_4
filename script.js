let popupEl = document.querySelector(".popup");

let editFormEl = document.querySelector(".popup__form");

let editButton = document.querySelector(".profile__edit-button");

let closeButton = document.querySelector(".button_close");

let nameInput = document.querySelector("#name");
let titleInput = document.querySelector("#title");

let name = document.querySelector(".profile__name");
let title = document.querySelector(".profile__title");

function handleFormOpen() {
  popupEl.classList.add("popup_opened");
  nameInput.value = name.textContent;
  titleInput.value = title.textContent;
}

function handleFormClose() {
  popupEl.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  nameInputValue = nameInput.value;
  titleInputValue = titleInput.value;

  name.textContent = nameInputValue;
  title.textContent = titleInputValue;

  handleFormClose();
}

editButton.addEventListener("click", handleFormOpen);

closeButton.addEventListener("click", handleFormClose);

editFormEl.addEventListener("submit", handleFormSubmit);