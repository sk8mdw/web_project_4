import { openModalWindow } from "../scripts/utils.js";

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
        this._imageElement.alt = `Photo of ${this._title}`;

        this._setupEventListeners();
        
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
        this._element = null;
    }

    _handlePreviewPicture() {
        previewModalImg.src = this._image;
        previewModalTitle.textContent = this._title;
        previewModalImg.alt = `Photo of ${this._title}`;
        openModalWindow(previewModal);
    }
}



export default Card;