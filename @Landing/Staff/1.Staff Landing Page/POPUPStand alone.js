// Function to show the SweetAlert with a spinning loader and auto-close after 2 seconds
function showDelayedSweetAlert() {
  Swal.fire({
    title: 'In Memory of Mr Edwin Okumu!',
    text: 'Take a moment of silence as we honor his life. Thank you',
    confirmButtonText: 'Close',
    timer: 25000, // Auto-close after 2 seconds
    timerProgressBar: true,
    allowOutsideClick: false, // Disable outside click to close
    didOpen: () => {
      // Add spinning loader
      Swal.showLoading();
    },
    willClose: () => {
      Swal.hideLoading();
    }
  });
}

// Helper function to get the current date as a string in YYYY-MM-DD format
function getCurrentDate() {
  const date = new Date();
  return date.toISOString().split('T')[0];
}

// Function to show the popup with a random chance
function showPopupWithRandomChance() {
  const randomChance = Math.random();
  const chanceThreshold = 0.5; // 50% chance to show the popup (adjust this value to control the likelihood)

  if (randomChance < chanceThreshold) {
    setTimeout(showDelayedSweetAlert, 2000);
    return true;
  }
  return false;
}

// Check and update the popup count
function checkAndShowPopup() {
  const currentDate = getCurrentDate();
  let popupData = localStorage.getItem('popupData');

  if (popupData) {
    popupData = JSON.parse(popupData);
    if (popupData.date === currentDate) {
      if (popupData.count < 1) {
        if (showPopupWithRandomChance()) {
          popupData.count += 1;
        }
      }
    } else {
      if (showPopupWithRandomChance()) {
        popupData.date = currentDate;
        popupData.count = 1;
      }
    }
  } else {
    if (showPopupWithRandomChance()) {
      popupData = {
        date: currentDate,
        count: 1
      };
    }
  }

  localStorage.setItem('popupData', JSON.stringify(popupData));
}

// Call the function to check and show the popup
checkAndShowPopup();