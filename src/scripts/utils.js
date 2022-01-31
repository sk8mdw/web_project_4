function openModalWindow(modalWindow) {
  modalWindow.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
  document.addEventListener('click', handleRemoteClick);
}

function closeModalWindow(modalWindow) {
  modalWindow.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
  document.removeEventListener('click', handleRemoteClick);
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    closeModalWindow(document.querySelector('.popup_opened'));
  }
}

function handleRemoteClick(e) {
  if (e.target.classList.contains('popup_opened')) {
    closeModalWindow(e.target);
  }
}


export { openModalWindow, closeModalWindow, closeByEscape };