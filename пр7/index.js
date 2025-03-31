document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const lightThemeButton = document.getElementById("lightTheme");
    const darkThemeButton = document.getElementById("darkTheme");
    const customThemeButton = document.getElementById("customTheme");
    const customColorsDiv = document.getElementById("customColors");
    const bgColorInput = document.getElementById("bgColor");
    const textColorInput = document.getElementById("textColor");
    const saveColorsButton = document.getElementById("saveColors");

    const savedTheme = localStorage.getItem("theme");
    const savedColors = JSON.parse(localStorage.getItem("customColors"));

    if (savedTheme) {
        body.className = savedTheme;
        if (savedTheme === "custom-theme" && savedColors) {
            body.style.backgroundColor = savedColors.bgColor;
            body.style.color = savedColors.textColor;
        }
    }

    lightThemeButton.addEventListener("click", () => {
        body.className = "light-theme";
        body.style.backgroundColor = "";
        body.style.color = "";
        localStorage.setItem("theme", "light-theme");
});

darkThemeButton.addEventListener("click", () => {
    body.className = "dark-theme";
    body.style.backgroundColor = "";
    body.style.color = "";
    localStorage.setItem("theme", "dark-theme");
});

customThemeButton.addEventListener("click", () => {
    body.className = "custom-theme";
    body.style.backgroundColor = "rgb(144, 135, 232)";
    body.style.color = "";
    customColorsDiv.style.display = "block";
});

saveColorsButton.addEventListener("click", () => {
    const bgColor = bgColorInput.value;
    const textColor = textColorInput.value;

    body.style.backgroundColor = bgColor;
    body.style.color = textColor;

    localStorage.setItem("theme", "custom-theme");
    localStorage.setItem("customColors", JSON.stringify({ bgColor, textColor }));

    customColorsDiv.style.display = "none";
    });
});
