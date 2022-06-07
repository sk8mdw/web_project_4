class Card {
    constructor({data, handleCardClick, handleDeleteButton, handleLikeButton, currentId}, cardSelector) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._cardID = data._id;
        this._ownerId = data.owner._id;
        this._handleCardClick = handleCardClick;
        this.handleLikeButton = handleLikeButton;
        this._handleDeleteButton = handleDeleteButton;
        this._currentId = currentId;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.cloneNode(true);
        this._deleteButton = cardElement.querySelector(
            'card__delete-button',
          );
        return cardElement;
    }

    getView() {
        this._element = this._getTemplate();
        this._imageElement = this._element.querySelector(".card__image");
        this._element.querySelector(".card__title").textContent = this._name;
        this._likeButton = this._element.querySelector(".card__like-button");
        this._deleteButton = this._element.querySelector(".card__delete-button");
        this._imageElement.src = this._link;
        this._imageElement.alt = `Photo of ${this._link}`;
        if (this._currentId !== this._ownerId) {
            this._deleteButton.classList.remove('card__delete-button');
        }   
        this._setupEventListeners();
        
        console.log(this._ownerId);
        console.log(this._currentId);
        
        return this._element;
    }

    _setupEventListeners() {
        this._likeButton.addEventListener('click', () => this._handleLikeButton());
        this._deleteButton.addEventListener('click', () => this._handleDeleteButton());
        this._imageElement.addEventListener('click', () => this._handleCardClick({ name: this._name, link: this._link }));
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