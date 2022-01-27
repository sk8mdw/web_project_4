import Popup from "./popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this._previewImage = this.popup.querySelector(".card__image");
      this._previewImageTitle = this.popup.querySelector(".card__title");
    }

    open(data) {
      this._previewImage.src = data.link;
      this._previewImage.alt = "Photo of ${data.name}";
      this._previewImageTitle.textContent = data.name;

      super.open();
    }
}

export default PopupWithImage;