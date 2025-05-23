document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    document.getElementById("formResponse").textContent = "Please fill out all fields.";
    return;
  }

  document.getElementById("formResponse").textContent = `Thank you, ${name}! We'll get back to you shortly.`;
  this.reset();
});
