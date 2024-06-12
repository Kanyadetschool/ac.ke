// Function to show the SweetAlert with a spinning loader and auto-close after 2 seconds
function showDelayedSweetAlert() {
  Swal.fire({
    title: 'In Memory of Mr Edwin Okumu!',
    text: 'Take a moment of silence as we honor his life. Thank you',
    confirmButtonText: 'Close',
    timer: 18000, // Auto-close after 2 seconds
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

// Check if the user has already seen the pop-up
if (!localStorage.getItem('popupShown')) {
  // Call the function after 2000 milliseconds (2 seconds)
  setTimeout(showDelayedSweetAlert, 2000);
  // Set the flag in localStorage
  localStorage.setItem('popupShown', 'true');
}