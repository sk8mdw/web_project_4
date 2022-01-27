import Popup from "./popup.js";

class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._popupForm = this._popupElement.querySelector(".popup__form");
        this._handleFormSubmit = handleFormSubmit;
        this._inputList = this.popupElement.querySelector("popup__input");
        this
    }

    _getInputValues() {
      const InputValue = {};
      this._inputList.forEach((input) => {
          this._getInputValues[input.name] = input.value;
      });
      return this._getInputValues;
    }

    setEventListeners() {
        this._form.addEventListener('submit', this._handleFormSubmit);
        super.setEventListeners;
    }

    close() {
        this._popupForm.reset();
        super.close();
    }
}

export default PopupWithForm;