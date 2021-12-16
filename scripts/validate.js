const isValid = (inputEl) => inputEl.validity.valid;

const checkInputValidity = (formEl, inputEl, settings) => {
	const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
    
	if (!isValid(inputEl)) {
        inputEl.classList.add(settings.inputErrorClass);
		errorEl.textContent = inputEl.validationMessage;
		errorEl.classList.add(settings.errorClass);
	} else {
		inputEl.classList.remove(settings.inputErrorClass);
		errorEl.textContent = '';
		errorEl.classList.remove(settings.errorClass);
	}
};

toggleButtonState = (inputList, buttonEl, {inactiveButtonClass}) => {
 
	const allValid = inputList.every(inputEl => isValid(inputEl));
	if (allValid) {
		buttonEl.classList.remove(inactiveButtonClass);
		buttonEl.disabled = false;
	} else {
		buttonEl.classList.add(inactiveButtonClass);
		buttonEl.disabled = true;
	}
};

const setupEventListeners = (formEl, {inputSelector, submitButtonSelector, ... otherSettings}) => {
	const inputList = [... formEl.querySelectorAll(inputSelector)];
 	const buttonEl = formEl.querySelector(submitButtonSelector);

	inputList.forEach((inputEl) => {
		inputEl.addEventListener("input", (e) => {

			checkInputValidity(formEl, inputEl, otherSettings);
			toggleButtonState(inputList, buttonEl, otherSettings);
		});
	});
};

const resetForm = () => {
    //do stuff to reset the form
    console.log("reset form here");
};

const enableValidation = ({formSelector, ... otherSettings}) => {
	const formList = [... document.querySelectorAll(formSelector)];
	formList.forEach((formEl) => {
		formEl.addEventListener("submit", (evt) => {
			evt.preventDefault();
		});
		setupEventListeners(formEl, otherSettings);
	})
};

enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save-button",
    inactiveButtonClass: "popup__save-button_type_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  });
  
