const popupEl = document.querySelector(".popup");
const editFormEl = document.querySelector(".popup__form");

const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".button_close");

const nameInput = document.querySelector("#name");
const titleInput = document.querySelector("#title");

const name = document.querySelector(".profile__name");
const title = document.querySelector(".profile__title");

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