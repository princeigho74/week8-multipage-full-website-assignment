// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("hidden");
});

// Contact Form Validation
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting SmartXpress Innovation LTD!");
    form.reset();
  });
}
