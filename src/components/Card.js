class Card {
    constructor({ data, handleCardClick, handleDeleteButton, handleLikeButton, currentId }, cardSelector) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._cardID = data._id;
        this._ownerId = data.owner._id;
        this._handleCardClick = handleCardClick;
        this._handleDeleteButton = handleDeleteButton;
        this._handleLikeButton = handleLikeButton;
        this._currentId = currentId;
        this._cardSelector = cardSelector;
    }

        _setupEventListeners() {
            this._likeButton.addEventListener('click', () => this._handleLikeButton());
            this._deleteButton.addEventListener('click', () => this._handleDeleteButton(this._element));
            this._imageElement.addEventListener('click', () => this._handleCardClick({ name: this._name, link: this._link }));
    }

    isLiked() {
       return this._data.likes.some((like) => {
            if (like._id === this._currentId) {
              return true;
            }
            return false;
          });
    }

    setLikes(likes) {
        this._data.likes = likes;
        this._updateLikesView();
    }


    _updateLikesView() {
        if(this.isLiked()){
            this._likeButton.classList.add('card__like-button_active');
        } else {
            this._likeButton.classList.remove('card__like-button_active');
        }
        this._likeCounter.textContent = this._data.likes.length;

    
      }


    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.firstElementChild.cloneNode(true);
        this._deleteButton = cardElement.querySelector(
            '.delete-button',
          );
        return cardElement;
    }

    getView() {
        this._element = this._getTemplate();
        this._imageElement = this._element.querySelector(".card__image");
        this._element.querySelector(".card__title").textContent = this._name;
        this._likeButton = this._element.querySelector(".card__like-button");
        this._likeCounter = this._element.querySelector('.card__like-counter');
        this._deleteButton = this._element.querySelector(".card__delete-button");
        this._imageElement.src = this._link;
        this._imageElement.alt = `Photo of ${this._link}`;
        if (this._currentId !== this._ownerId) {
            this._deleteButton.classList.add('delete-button_hidden');
        }
        const isLiked = this._data.likes.some((like) => {
            if (like._id === this._currentId) {
                return true;
            }
            return false;
        });

        if (isLiked) {
            this._likeButton.classList.add('card__like-button_active');
        } else {
            this._likeButton.classList.remove('card__like-button_active');
        }

        this._likeCounter.textContent = this._data.likes.length;

        this._setupEventListeners();
        
        return this._element;
    }

}

export default Card;