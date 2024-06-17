
document.addEventListener('DOMContentLoaded', () => {
  // Check if the app is running in standalone mode (installed as a PWA)
  if (isAppInstalled()) {
    document.getElementById('installButtonContainer').style.display = 'none';
  }
});

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Show the install button if the app is not already installed
  if (!isAppInstalled()) {
    document.getElementById('installButtonContainer').style.display = 'block';
  }
});

document.getElementById('installButton').addEventListener('click', () => {
  if (deferredPrompt) {
    // Show the install prompt when the button is clicked
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
        // Hide the install button and show thank you message
        document.getElementById('installButtonContainer').style.display = 'none';
        document.getElementById('thankYouMessage').style.display = 'block';
        document.getElementById('shareButton').style.display = 'block'; // Show share button after installation
      } else {
        console.log('User dismissed the install prompt');
      }
      // Reset the deferredPrompt variable
      deferredPrompt = null;
    });
  } else {
    console.error('Installation prompt is not available.');
  }
});

document.getElementById('shareButton').addEventListener('click', () => {
  // Example: Share functionality
  if (navigator.share) {
    navigator.share({
      title: 'Kanyadet School Official App ',
      text: 'Improving Online School Services.🧑‍⚕️!',
      url: window.location.href
    }).then(() => {
      console.log('Shared successfully.');
    }).catch((error) => {
      console.error('Error sharing:', error);
    });
  } else {
    console.error('Sharing not supported.');
  }
});

// Always show the share button if the app is installed
if (isAppInstalled()) {
  document.getElementById('shareButton').style.display = 'block';
}

function isAppInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
}
   