
 document.addEventListener("DOMContentLoaded", function() {
  const loaderContainer = document.querySelector('.loading');
  const body = document.body;

  setTimeout(function() {
    loaderContainer.style.display = 'none';
    body.classList.remove('loading'); // Remove the loading class to remove blur

    // Show SweetAlert confirmation popup with a timer
    Swal.fire({
      title: 'Welcome to Grade 3',
      text: 'Students Biodata',
      icon: 'info',
      showCancelButton: false,
      showConfirmButton:false,
      timer: 3000, // Auto-close the popup after 5 seconds
      timerProgressBar: true // Show a progress bar for the timer
    })
  }, 1000); // 2 seconds
});




      