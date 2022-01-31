import "./index.css";

/* ----------------------------- Import classes ----------------------------- */
import FormValidator from "../components/FormValidator.js";
import Card from "../components/card.js";
import Section from "../components/section.js";
import PopupWithImage from "../components/popupwithimage.js";
import PopupWithForm from "../components/popupwithform.js";
import UserInfo from "../components/user-info.js";
import { initialCards, formValidationSettings, selectors, popupEditUser, popupAddCard } from "../utils/constants.js";


/* --------------------- Create instances of the classes -------------------- */
const userInfo = new UserInfo({
  nameSelector: popupEditUser.nameSelector,
  descriptionSelector: popupEditUser.descriptionSelector,
});

const cardPreviewPopup = new PopupWithImage(selectors.previewPopup);
cardPreviewPopup.setEventListeners();


const createCard = (card) =>
new Card({
  data:card, handleCardClick: (imageData) => {
  cardPreviewPopup.open(imageData);
  },
},
selectors.cardTemplate,
);

const cardSection = new Section({
 renderer: (item) => {
   const cardElement = createCard(item);
   cardSection.addItem(cardElement.getView());
 },
},
 selectors.cardSection,
);
cardSection.renderItems(initialCards);


const editForm = new PopupWithForm(
  popupEditUser.editModal,
  (evt) => {
    evt.preventDefault();

    const inputValue = editForm.getInputValues();
    userInfo.setUserInfo({
      name: inputValue.name,
      description: inputValue.description,
    });

    editForm.close();
  },
);
editForm.setEventListeners();

const addForm = new PopupWithForm(
  popupAddCard.addModal,
  (evt) => {
    evt.preventDefault();

    const inputValue = addForm.getInputValues();
    const cardElement = createCard({
      name: inputValue.title,
      link: inputValue.image,
    });
    cardSection.addItem(cardElement.getView());

    addForm.close();
  },
);
addForm.setEventListeners();

/* --------------------- Prefill function and constants --------------------- */
function prefillEditForm(modalWindow) {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileAbout.textContent;
}
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__description");

const nameInput = document.querySelector("#owner-name");
const descriptionInput = document.querySelector("#owner-description");


/* ----------------------------- Event listeners ---------------------------- */
popupEditUser.editButton.addEventListener("click", () => {
  prefillEditForm(editForm);
  editForm.open();
});

// editProfileCloseButton.addEventListener("click", () => editPopup.close());

popupAddCard.addButton.addEventListener("click", () => {
  // addFormValidator.resetForm();
  addForm.open();
});

/* ------------------------------- Validation ------------------------------- */

const editFormEl = document.querySelector('.popup_type_edit');
const addFormEl = document.querySelector('.popup_type_add');

const editFormValidator = new FormValidator(formValidationSettings, editFormEl);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(formValidationSettings, addFormEl);
addFormValidator.enableValidation();




// addModalCloseButton.addEventListener("click", () => addPopup.close());

// editForm.addEventListener('submit', handleEditFormSubmit);

// profileEditButton.addEventListener('click', () => {
//   prefillEditForm(editModal);
//   openModalWindow(editModal);
// });

// editModalCloseButton.addEventListener('click', () => closeModalWindow(editModal));

// addForm.addEventListener('submit', handleAddFormSubmit);

// addCardButton.addEventListener('click', () => openModalWindow(addModal));

// addModalCloseButton.addEventListener('click', () => closeModalWindow(addModal));

// previewModalCloseButton.addEventListener('click', () => closeModalWindow(previewModal));

// initialCards.forEach((card) => {
//   renderCard(card);
// });




/* -------------------------------- Functions ------------------------------- */


// function handleEditFormSubmit(evt) {
//   evt.preventDefault();
//   name.textContent = nameInput.value;
//   description.textContent = descriptionInput.value;
//   closeModalWindow(editModal);
//   editFormValidator.toggleButtonState();
// }

// function handleAddFormSubmit(evt) {
//   evt.preventDefault();
//   const card = {
//     title: titleInput.value,
//     image: imageUrlInput.value,
//   }
  

//   renderCard(card);
//   closeModalWindow(addModal);
//   addForm.reset();
//   addFormValidator.toggleButtonState();
// }

// function renderCard(card) {
//   const cardElement = new Card(card, cardSelector);
//   addCard(cardElement, placesList)
//   return cardElement;
// }

// function addCard(card, placesList) {
//   placesList.prepend(card.getView());
// }

// const userInfo = new UserInfo({
//   nameSelector: popupEditUserInfo.nameSelector,
//   aboutSelector: popupEditUserInfo.aboutSelector,
// });