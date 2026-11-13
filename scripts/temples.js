const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;

document.querySelector("#lastModified").textContent =
    "Last Modified: " + document.lastModified;


const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {


    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    if (isOpen) {
        hamButton.setAttribute("aria-expanded", "true");
        hamButton.setAttribute("aria-label", "Close navigation menu");
    } else {
        hamButton.setAttribute("aria-expanded", "false");
        hamButton.setAttribute("aria-label", "Open navigation menu");
    }

});
