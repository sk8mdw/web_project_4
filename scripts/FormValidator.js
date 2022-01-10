class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._inputList = [... formElement.querySelectorAll(settings.inputSelector)];
        this._buttonEl = formElement.querySelector(settings.submitButtonSelector);
        this._formElement = formElement;
    }

    _showInputError(inputEl) {
        const errorEl = this._formElement.querySelector(`#${inputEl.id}-error`);
        inputEl.classList.add(this._settings.inputErrorClass);
        errorEl.textContent = inputEl.validationMessage;
        errorEl.classList.add(this._settings.errorClass);
    }

    _hideInputError(inputEl) {
        const errorEl = this._formElement.querySelector(`#${inputEl.id}-error`);
        inputEl.classList.remove(this._inputErrorClass);
        errorEl.textContent = '';
        errorEl.classList.remove(this._settings.errorClass);
    }

    _checkInputValidity(inputEl) {
        if (!inputEl.validity.valid) {
            inputEl.classList.add(settings.inputErrorClass);
            errorEl.textContent = inputEl.validationMessage;
            errorEl.classList.add(settings.errorClass);
        } else {
            inputEl.classList.remove(settings.inputErrorClass);
            errorEl.textContent = '';
            errorEl.classList.remove(settings.errorClass);
        }
    }

    _toggleButtonState() {
         const allValid = this._inputList.every((inputEl) => inputEl.validity.valid);
        if (allValid) {
            this._buttonEl.classList.remove(this._inactiveButtonClass);
            this._buttonEl.disabled = false;
        } else {
            this._buttonEl.classList.add(this._inactiveButtonClass);
            this._buttonEl.disabled = true;
        }
    }

    _hasInvalidInput(inputList) {

    }

    _setupEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputEl) => {
            inputEl.addEventListener("input", (e) => {

                checkInputValidity(formElement, inputEl, otherSettings);
                toggleButtonState(inputList, buttonEl, otherSettings);
            });
        });
}

enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
    });

    this._setupEventListeners();
}
}

export default FormValidator;