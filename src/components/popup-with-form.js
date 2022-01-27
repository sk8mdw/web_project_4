import Popup from './Popup';

export default class PopupWithForm extends Popup {
  constructor(modalSelector, handleFormSubmit) {
    super(modalSelector);
    this._form = this._modal.querySelector('.modal__form');
    this._inputList = this._modal.querySelectorAll('.modal__input');
    this._submitButton = this._modal.querySelector('.modal__button');
    this._handleFormSubmit = handleFormSubmit;
  }

  getInputValues() {
    const inputValue = {};
    this._inputList.forEach((input) => {
      inputValue[input.name] = input.value;
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