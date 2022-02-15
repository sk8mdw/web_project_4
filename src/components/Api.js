class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  getAppInfo() {
    return Promise.all([this.getCardList(), this.getUserInfo()]);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  setUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, about }),
    }).then(this._checkResponse);
  }


  addCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    }).then(this._checkResponse);
  }

  removeCard(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  addLike(cardID) {
    return fetch(`${this._baseUrl}/cards/likes/${cardID}`, {
      method: 'PUT',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  removeLike(cardID) {
    return fetch(`${this._baseUrl}/cards/likes/${cardID}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse);
  }


  setUserAvatar({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar }),
    }).then(this._checkResponse);
  }

}

export default Api;