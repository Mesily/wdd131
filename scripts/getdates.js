let year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

let lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modification:" + lastModified;