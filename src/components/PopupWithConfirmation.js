import Popup from './Popup';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._modal.addEventListener('submit', () => {
      this._handleFormSubmit(this._cardID, this._element);
    });
  }

  open(cardID, element) {
    this._cardID = cardID;
    this._element = element;
    super.open();
  }
}