function openModalWindow(modalWindow) {
    modalWindow.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
  }
  
  function closeModalWindow(modalWindow) {
    modalWindow.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
  }
  
  function closeByEscape(evt) {
    if (evt.key === "Escape") {
      closeModalWindow(document.querySelector('.popup_opened'));
    }
  }

  export { openModalWindow, closeModalWindow, closeByEscape};