import Popup from './Popup';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._form = this._popupElement.querySelector('.popup__form');
    this._inputList = this._popupElement.querySelectorAll('.popup__input');
    this._submitButton = this._popupElement.querySelector('.popup__save-button');
    this._handleFormSubmit = handleFormSubmit;
  }

  getInputValues() {
    const inputValue = {};
    this._inputList.forEach((input) => {
      inputValue[input.name] = input.value;
      console.log(inputValue.image);
    });
    return inputValue;
  }

  setEventListeners = () => {
    this._form.addEventListener('submit', this._handleFormSubmit);
    super.setEventListeners();
  };

  close() {
    super.close();
    this._form.reset();
  }
}