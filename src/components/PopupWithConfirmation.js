import Popup from './Popup';

export default class PopupWithConfirmation extends Popup {
  constructor({popupSelector }) {
    super(popupSelector);
    this._handleDeleteCard = this._handleDeleteCard;
  }

  open(deleteCard) {
    super.open();
    this.deleteCard = deleteCard;
  }

  setEventListeners() {
    super.setEventListeners();

    const deleteConfirmButton = this._popupElement.querySelector("#confirm_delete_button");

    deleteConfirmButton.addEventListener("click", () => {
      this.deleteCard();
    });
  }

  // open(cardID, element) {
  //   this._cardID = cardID;
  //   this._element = element;
  //   super.open();
  // }
}