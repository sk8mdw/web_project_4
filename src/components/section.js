export default class Section {
    constructor({ renderer }, containerSelector) {
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
      // this._container = '.cardTemplate';

      console.log(containerSelector);
      
    }

    addItem(element) {
      this._container.append(element);
      }

    renderItems(items) {
      items.forEach((item) => {
          this._renderer(item);

      });
    }
}