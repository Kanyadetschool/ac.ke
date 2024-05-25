document.addEventListener("DOMContentLoaded", function() {
    const loaderContainer = document.querySelector('.loading');
    const body = document.body;
  
    setTimeout(function() {
      loaderContainer.style.display = 'none';
      body.classList.remove('loading'); // Remove the loading class to remove blur
    }, 5000); // 2 seconds
  });
  