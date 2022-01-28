/* ------------------------------ Card array ------------------------------ */
export const initialCards = [
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


/* -------------------------------- Form data ------------------------------- */
const nameInput = editForm.querySelector(".popup__input_text_name");
const descriptionInput = editForm.querySelector(".popup__input_text_description");
const titleInput = addForm.querySelector('.popup__input_text_title');
const imageUrlInput = addForm.querySelector('.popup__input_text_image-url');

// const cardSelector = document.querySelector("#cardTemplate");

export const formValidationSettings = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save-button",
    inactiveButtonClass: "popup__save-button_type_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  };

  export const selectors = {
      cardSection: '.places__list',
      cardTemplate: '#cardTemplate',
      previewPopup: '.popup_type_preview',
  };

  export const popupEditUser = {

  }

  export const popupAddCard = {

  }