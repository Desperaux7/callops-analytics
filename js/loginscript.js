const toggleButton = document.getElementById("themeToggle");

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.removeItem("theme");
    }
}

toggleButton.addEventListener("click", toggleTheme);
