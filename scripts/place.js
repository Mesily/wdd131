const temperature = 10;
const windSpeed = 5;



function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

document.addEventListener("DOMContentLoaded", function () {

    if (temperature <= 10 && windSpeed > 4.8) {

        const windChill = calculateWindChill(temperature, windSpeed);

        const roundedWindChill = Math.round(windChill * 10) / 10;

        document.querySelector("#windchill").textContent = roundedWindChill + " °C";

    } else {

        document.querySelector("#windchill").textContent = "N/A";

    }

    document.querySelector("#currentyear").textContent = new Date().getFullYear();

    document.querySelector("#lastmodified").textContent = document.lastModified;

});
