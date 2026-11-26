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


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-75244-main.jpg"
  }
];


function displayTemples(templeList) {
    const templeContainer = document.querySelector(".temple-grid");

   
    templeContainer.innerHTML = "";
    
    templeContainer.classList.remove("two-temples");
    templeContainer.classList.remove("one-temple");

    if (templeList.length === 2) {
        templeContainer.classList.add("two-temples");
    } else if (templeList.length === 1) {
        templeContainer.classList.add("one-temple");
    }


    for (let i = 0; i < templeList.length; i++) {
        let temple = templeList[i];

        let card = document.createElement("figure");

        let image = document.createElement("img");
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.templeName + " Temple");
        image.setAttribute("loading", "lazy");

        let caption = document.createElement("figcaption");

        let name = document.createElement("h2");
        name.textContent = temple.templeName;

        let location = document.createElement("p");
        location.textContent = "Location: " + temple.location;

        let dedicated = document.createElement("p");
        dedicated.textContent = "Dedicated: " + temple.dedicated;

        let area = document.createElement("p");
        area.textContent = "Area: " + temple.area + " square feet";

        caption.appendChild(name);
        caption.appendChild(location);
        caption.appendChild(dedicated);
        caption.appendChild(area);

        card.appendChild(image);
        card.appendChild(caption);

    
        templeContainer.appendChild(card);
    }
}

displayTemples(temples);


function displayOldTemples() {
    const oldTemples = temples.filter(function(temple) {
        return new Date(temple.dedicated).getFullYear() < 1900;
    });

    displayTemples(oldTemples);
}

function displayNewTemples() {
    const newTemples = temples.filter(function(temple) {
        return new Date(temple.dedicated).getFullYear() > 2000;
    });

    displayTemples(newTemples);
}

function displayLargeTemples() {
    const largeTemples = temples.filter(function(temple) {
        return temple.area > 90000;
    });

    displayTemples(largeTemples);
}

function displaySmallTemples() {
    const smallTemples = temples.filter(function(temple) {
        return temple.area < 10000;
    });

    displayTemples(smallTemples);
}

const pageTitle = document.querySelector("main h1");

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

function setActiveLink(activeLink) {
    const navLinks = document.querySelectorAll(".navigation a");

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove("active");
    }

    activeLink.classList.add("active");
}

homeLink.addEventListener("click", function() {
    setActiveLink(homeLink);
    pageTitle.textContent = "Home";
    displayTemples(temples);
});

oldLink.addEventListener("click", function() {
    setActiveLink(oldLink);
    pageTitle.textContent = "Old Temples";
    displayOldTemples();
});

newLink.addEventListener("click", function() {
    setActiveLink(newLink);
    pageTitle.textContent = "New Temples";
    displayNewTemples();
});

largeLink.addEventListener("click", function() {
    setActiveLink(largeLink);
    pageTitle.textContent = "Large Temples";
    displayLargeTemples();
});

smallLink.addEventListener("click", function() {
    setActiveLink(smallLink);
    pageTitle.textContent = "Small Temples";
    displaySmallTemples();
});