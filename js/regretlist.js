const STORAGE_KEY = "regretList";

function getRegretList() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function renderRegretList() {
  const listElement = document.querySelector("#list");

  if (!listElement) {
    return;
  }

  const savedAnimals = getRegretList();

  if (savedAnimals.length === 0) {
    listElement.classList.add("empty-regret-text");
    listElement.innerText = "no regrets, huh? You're everything I thought you would be..";
    return;
  }

  savedAnimals.forEach(animal => {
    const skull = document.createElement("img");
    skull.classList.add("skull-icon");
    skull.src = "svgs/totenkopf.png";
    skull.alt = "Totenkopf";  

    const card = document.createElement("div");
    card.classList.add("regret-card");

    const title = document.createElement("h2");
    title.innerText = animal.lastRecord;

    const infoBox = document.createElement("div");
    infoBox.classList.add("animal-info-box");

    const lastRecord = document.createElement("p");
    lastRecord.classList.add("binomial-name");
    lastRecord.innerText = animal.binomialName;

    const location = document.createElement("p");
    location.classList.add("location-text");

    const locationIcon = document.createElement("img");
    locationIcon.classList.add("location-icon");
    locationIcon.src = "svgs/pin.svg";
    locationIcon.alt = "Location";

    const locationLabel = document.createElement("span");
    locationLabel.classList.add("location-label");
    locationLabel.innerText = `last located in ${animal.location}`;

    location.appendChild(locationIcon);
    location.appendChild(locationLabel);

    infoBox.appendChild(lastRecord);
    infoBox.appendChild(location);  

    card.appendChild(skull);
    card.appendChild(title);
    card.appendChild(infoBox);

    listElement.appendChild(card);

    const locationLineHeight = parseFloat(getComputedStyle(location).lineHeight);
    if (location.scrollHeight > locationLineHeight * 3.3) {
      location.classList.add("location-small");
    }
  });
}

renderRegretList();
