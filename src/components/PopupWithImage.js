import Popup from './Popup';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._previewImage = this._popupElement.querySelector(
      '.popup__image',
    );
    this._previewImageTitle = this._popupElement.querySelector(
      '.popup__caption',
    );
  }

  open(data) {
    this._previewImage.src = data.image;
    this._previewImage.alt = `Photo of ${data.title}`;
    this._previewImageTitle.textContent = data.title;
    super.open();
  }
}