function toggleDarkMode() {
  const body = document.body;
  const darkModeButton = document.getElementById("toggleDarkMode");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    darkModeButton.textContent = "☀️";
    darkModeButton.classList.replace("btn-outline-dark", "btn-outline-light");
    document.querySelector(".navbar").classList.add("navbar-dark-mode");
  } else {
    darkModeButton.textContent = "🌙";
    darkModeButton.classList.replace("btn-outline-light", "btn-outline-dark");
    document.querySelector(".navbar").classList.remove("navbar-dark-mode");
  }
}
