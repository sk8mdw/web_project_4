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
    
    this._popupElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this.deleteCard();
    });
  }

  // open(cardID, element) {
  //   this._cardID = cardID;
  //   this._element = element;
  //   super.open();
  // }
}