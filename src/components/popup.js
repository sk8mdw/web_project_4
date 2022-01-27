class Popup {
    constructor(popupSelector) {
        this.popupElement = document.querySelector(popupSelector);
        this.handleEscUp = this._handleEscUp.bind(this);
    }

    _handleEscUp(evt) {
        evt.preventDefault();

        if (evt.keycode === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._popupElement.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
                this.close();
            }
        });
    }

    open() {
        this._popupElement.classList.add('popup_is-opened');
        document.addEventListener('keyup', this_handleEscUp);
    }

    close() {
        this._popupElement.classList.remove('popup_is-opened');
        document.removeEventListener('keyup', this_handleEscUp);
    }
}

export default Popup;
