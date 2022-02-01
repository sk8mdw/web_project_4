// 
export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscUp = this._handleEscUp.bind(this);
    }

    setEventListeners() {
        const closeButton = this._popupElement.querySelector('.popup__close-button');
        closeButton.addEventListener('click', () => {
          this.close();
        });
      }    

    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscUp);
        document.addEventListener('mousedown', this._mouseClick);
    }

    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscUp);
        document.removeEventListener('mousedown', this._mouseClick);
    }

    _handleEscUp = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    };

    _mouseClick = (evt) => {
        if (evt.target === this._popupElement) {
          this.close();
        }
      };    
}