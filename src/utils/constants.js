export const formValidationSettings = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save-button",
    inactiveButtonClass: "popup__save-button_type_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  };

  export const selectors = {
      cardSection: '#placesList',
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
    selector: '.popup_type_avatar',
    avatarSelector: '.profile__image',
    button: document.querySelector('.avatar__edit-button'),
    form: document.querySelector('.popup_type_avatar'),
    avatarInput: document.querySelector('#avatar-input'),
  };  

  export const popupAddCard = {
    addModal: ".popup_type_add",
    addButton: document.querySelector('.profile__add-button'),
    closeButton: document.querySelector('.popup__close-button'),
  }
  
  export const popupDeleteCard = {
  deleteCardSelector: ".popup_type_delete",
  deleteCardButton: ".delete-button",
 }
 