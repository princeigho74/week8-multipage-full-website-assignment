// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar nav');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
  });
}

// Contact Form - Google Apps Script
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('form-status');
    status.textContent = "Sending...";

    try {
      const response = await fetch("YOUR_GOOGLE_SCRIPT_URL", {
        method: "POST",
        body: new FormData(form)
      });

      if (response.ok) {
        status.textContent = "Message sent successfully!";
        form.reset();
      } else {
        status.textContent = "Failed to send. Try again.";
      }
    } catch (error) {
      status.textContent = "Error: " + error.message;
    }
  });
}
