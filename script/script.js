const buttonDarkMode = document.getElementById("darkmode");

buttonDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("background-dark");
    buttonDarkMode.classList.toggle("checkbox-border");
})
