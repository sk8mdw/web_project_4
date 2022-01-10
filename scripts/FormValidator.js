class FormValidator {
    constructor(config, formElement) {
      this._inputSelector = config.inputSelector;
      this._submitButtonSelector = config.submitButtonSelector;
      this._inactiveButtonClass = config._inactiveButtonClass;
      this._inputErrorClass = config._inputErrorClass;
      this._errorClass = config._errorClass;
      this._formElement = formElement;
    }

    _showInputError(inputEl) {
        const errorEl = this._formEl.querySelector(`#${inputEl.id}-error`);
        inputEl.classList.add(this._inputErrorClass);
		errorEl.textContent = inputEl.validationMessage;
		errorEl.classList.add(this._.errorClass);
    }

    _hideInputError(inputEl) {
        const errorEl = this._formEl.querySelector(`#${inputEl.id}-error`);
        inputEl.classList.remove(this._inputErrorClass);
		errorEl.textContent = '';
		errorEl.classList.remove(this._errorClass);

    }

    _checkInputValidity(inputEl) {

    }

    _toggleButtonState(inputList, buttonEl) {

    }

    _isValid(inputEl) {

    }

    _hasInvalidInput(inputList) {

    }

    _setupEventListeners() {
        // const setupEventListeners = (formEl, {inputSelector, submitButtonSelector, ... otherSettings}) => {
        //     const inputList = [... formEl.querySelectorAll(inputSelector)];
        //      const buttonEl = formEl.querySelector(submitButtonSelector);
        
        //     inputList.forEach((inputEl) => {
        //         inputEl.addEventListener("input", (e) => {
        
        //             checkInputValidity(formEl, inputEl, otherSettings);
        //             toggleButtonState(inputList, buttonEl, otherSettings);
        //         });
        //     });
        // };
    }

    enableValidation() {
        this._formElement.addEventListener("submit", (evt) => {
			evt.preventDefault();
		});

		this._setupEventListeners();
    }
}

export default FormValidator;