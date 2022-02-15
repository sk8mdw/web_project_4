class Card {
    constructor(api, data, cardSelector, handleCardClick, currentUserId, deleteSubmitHandler) {
        this._api = api;
        this._data - data;
        this._title = data.title;
        this._image = data.image;
        this._cardId = data._id;
        this._userId = data.userId;
        this._ownerId = data.owner._id;
        this._currentUserId = currentUserId;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._deleteSubmitHandler = deleteSubmitHandler;
    }

    _getTemplate() {
        const cardElement = this._cardSelector.content.querySelector(".card").cloneNode(true);
        this._deleteButton = cardElement.querySelector(
            '.card__btn-delete',
          );
        return cardElement;
    }

    getView() {
        this._element = this._getTemplate();
        this._imageElement = this._element.querySelector(".card__image");
        this._element.querySelector(".card__title").textContent = this._title;
        this._likeButton = this._element.querySelector(".card__like-button");
        this._deleteButton = this._element.querySelector(".card__delete-button");
        this._imageElement.src = this._image;
        this._imageElement.alt = `Photo of ${this._title}`;

        this._setupEventListeners();

        return this._element;
    }

    _setupEventListeners() {
        this._likeButton.addEventListener('click', () => this._handleLikeButton());
        this._deleteButton.addEventListener('click', () => this._handleDeleteButton());
        this._imageElement.addEventListener('click', () => this._handleCardClick({ title: this._title, image: this._image }));
    }

    _handleLikeButton() {
        const isLiked = this._data.likes.some((like) => {
            if (like._id === this._currentUserId) {
                return true;
            }
            return false;
        });

        if (isLiked) {
            this._removeLike();
        } else {
            this._addLike();
        }
    }

    _updateLikeCounter() {
        this._liked = this._element.querySelector(".like-button__counter");
        this._liked.textContent = this._liked.length;
    }

    _handleDeleteButton() {
        this._deleteSubmitHandler(this._cardId, this._element);
    }

    _addLike() {
        this._api
            .addLike(this._cardId)
            .then((res) => {
                this._likeButton.classList.add('card__btn-like_active');
                this._likeCounter.textContent = res.likes.length;
                this._data = res;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    _removeLike() {
        this._api
            .removeLike(this._cardId)
            .then((res) => {
                this._likeButton.classList.remove('card__btn-like_active');
                this._likeCounter.textContent = res.likes.length;
                this._data = res;
            })
            .catch((err) => {
                console.log(err);
            });
    }

}

export default Card;