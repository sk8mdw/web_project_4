class Card {
    constructor(data, cardSelector) {
      this._title = data.title;
      this._image = data.image;

      this._cardSelector = cardSelector;
    }

    _getTemplate() {
        return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
    }

    getView() {}

    _setupEventListeners() {}

    generateCard() {
        this._element = this._getTemplate();
        console.log(this._element);
    }
}



export default Card;