export const renderLoading = (popupSelector, isLoading = false) => {
    const activeButton = document
      .querySelector(popupSelector)
      .querySelector(".popus__save-button");
    if (isLoading) {
      activeButton.textContent = "Saving...";
    } else {
      activeButton.textContent = "Save";
    }
  };