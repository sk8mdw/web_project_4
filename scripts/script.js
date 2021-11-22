/* ------------------------------ Card array ------------------------------ */
const initialCards = [
  {
    title: "Yosemite Valley",
    image: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    title: "Lake Louise",
    image: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    title: "Bald Mountains",
    image: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    title: "Latemar",
    image: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    title: "Vanoise National Park",
    image: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    title: "Lago di Braies",
    image: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

/* -------------------------------- Wrappers -------------------------------- */
let popupEl = document.querySelector(".popup");
let editFormEl = document.querySelector(".popup__form");
const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector("#cardTemplate").content.querySelector('.card');

/* -------------------------- Buttons and DOM nodes ------------------------- */
let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close-button");
let name = document.querySelector(".profile__name");
let title = document.querySelector(".profile__title");

/* -------------------------------- Form data ------------------------------- */
let nameInput = document.querySelector(".popup__input_text_name");
let titleInput = document.querySelector(".popup__input_text_title");


/* -------------------------------- Functions ------------------------------- */
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

/* ----------------------------- Event listeners ---------------------------- */
editButton.addEventListener("click", formOpen);
closeButton.addEventListener("click", formClose);
editFormEl.addEventListener("submit", formSubmit);


initialCards.forEach((card) => {

  const cardEl = cardTemplate.cloneNode(true);
  cardEl.querySelector('.card__title').textContent = card.title;
  cardEl.querySelector('.card__image').src = card.image;
  console.log(card.image);
  placesList.append(cardEl);
});
