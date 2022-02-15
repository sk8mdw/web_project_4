import Popup from './Popup';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._form = this._popupElement.querySelector('.popup__form');
    this._inputList = this._popupElement.querySelectorAll('.popup__input');
    this._submitButton = this._popupElement.querySelector('.popup__save-button');
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const inputValue = {};
    this._inputList.forEach((input) => {
      inputValue[input.name] = input.value;
    });
    return inputValue;
  }
  
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
  })
 }

  close() {
    super.close();
    this._form.reset();
  }
}