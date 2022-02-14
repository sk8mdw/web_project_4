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
      
      addModal: document.querySelector(".popup_type_add"),
  };

  export const popupEditUser = {
    editModal: ".popup_type_edit",
    nameSelector: ".profile__name",
    descriptionSelector: ".profile__description",
    editButton: document.querySelector(".profile__edit-button"),
    closeButton: document.querySelector(".popup__close-button"),
  }

  export const popupEditAvatar = {
    selector: '.modal_type_avatar',
    avatarSelector: '.profile__avatar',
    button: document.querySelector('.profile__avatar'),
    form: document.querySelector('.modal_type_avatar .modal__form'),
    avatarInput: document.querySelector('#avatar-input'),
  };  

  export const popupAddCard = {
    addModal: ".popup_type_add",
    addButton: document.querySelector('.profile__add-button'),
    closeButton: document.querySelector(".popup__close-button"),
  }


 