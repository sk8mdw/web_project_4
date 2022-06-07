export default class UserInfo {
    constructor({ nameSelector, descriptionSelector, avatarSelector, userId }) {
        this._name = document.querySelector(nameSelector);
        this._description = document.querySelector(descriptionSelector);
        this._avatar = document.querySelector(avatarSelector);
        this._userId = userId;
    }

    getUserInfo = () => {
        return {
            name: this._name.textContent,
            description: this._description.textContent,
            avatar: this._avatar.src,
            // _id: this._id,
        };
    }

    getUserId () {
        return {
            _id: this._id,
      };
    }

    setUserInfo = ({ name, description })  => {
        this._name.textContent = name;
        this._description.textContent = description;
        // this._avatar.src = avatar;
    }

    setAvatar({ userAvatar }) {
        if (userAvatar) {
        this._avatar.src = userAvatar;
    }
}
}