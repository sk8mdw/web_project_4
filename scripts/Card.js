import { openModalWindow } from "./utils.js";

const previewModal = document.querySelector('.popup_type_preview');
const previewModalImg = previewModal.querySelector('.popup__image');
const previewModalTitle = previewModal.querySelector('.popup__caption');


class Card {
    constructor(data, cardSelector) {
        this._title = data.title;
        this._image = data.image;

        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = this._cardSelector.content.querySelector(".card").cloneNode(true);
        return cardElement;
    }

    getView() {
        this._element = this._getTemplate();
        this._imageElement = this._element.querySelector(".card__image");
        this._element.querySelector(".card__title").textContent = this._title;
        this._likeButton = this._element.querySelector(".card__like-button");
        this._deleteButton = this._element.querySelector(".card__delete-button");
        this._imageElement = this._element.querySelector(".card__image");
        this._imageElement.src = this._image;

        /* -------------------------------------------------------------------------- */
        /*         I am still working on getting the alt attribute to populate        */
        /* -------------------------------------------------------------------------- */
        this._imageElement.alt - this._title;

        this._setupEventListeners();
        // console.log(this._imageElement.alt);

        return this._element;
    }

    _setupEventListeners() {
        this._element.querySelector(".card__like-button").addEventListener('click', () => this._handleLikeButton());
        this._element.querySelector(".card__delete-button").addEventListener('click', () => this._handleDeleteButton());
        this._imageElement.addEventListener('click', () => this._handlePreviewPicture());
    }

    _handleLikeButton() {
        this._element.querySelector(".card__like-button").classList.toggle("liked");
    }

    _handleDeleteButton() {
        this._element.remove();
    }

    _handlePreviewPicture() {
        previewModalImg.src = this._image;
        previewModalTitle.textContent = this._title;
        previewModalImg.alt = this._title;
        openModalWindow(previewModal);
    }
}



export default Card;