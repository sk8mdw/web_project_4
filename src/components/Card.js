import { openModalWindow } from "../scripts/utils.js";

// const previewModal = document.querySelector('.popup_type_preview');
// const previewModalImg = previewModal.querySelector('.popup__image');
// const previewModalTitle = previewModal.querySelector('.popup__caption');


class Card {
    constructor({ data, handleCardClick }, cardSelector) {
        this._title = data.title;
        this._image = data.image;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
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
        this._likeButton.addEventListener('click', () => this._handleLikeButton());
        this._deleteButton.addEventListener('click', () => this._handleDeleteButton());
        this._imageElement.addEventListener('click', () => this._handleCardClick({ title: this._title, image: this._image}));
    }

    _handleLikeButton() {
        this._likeButton.classList.toggle("liked");
    }

    _handleDeleteButton() {
        this._element.remove();
        this._element = null;
    }

    // _handlePreviewPicture() {
    //     previewModalImg.src = this._image;
    //     previewModalTitle.textContent = this._title;
    //     previewModalImg.alt = `Photo of ${this._title}`;
    //     openModalWindow(previewModal);
    // }
}

export default Card;