class UserInfo {
    constructor({ NameSelector, titleSelector }) {
        this._nameElement = document.querySelector(NameSelector);
        this._titleElement = document.querySelector(titleSelector)
    }

    getUserInfo = () => {
        return {
            nameElement: this._nameElement.textContent,
            titleElement:this._titleElement.textContent,
        };
    }

    setUserInfo = ({ nameElement, titleElement})  => {
        this._nameElement.textContent = nameElement;
        this._titleElement.textContent = titleElement;
    }
}

export default UserInfo;