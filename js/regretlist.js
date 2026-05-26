async function loadAnimals() {
  const url = "https://extinct-api.herokuapp.com/api/v1/animal/";
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
    return false;
  }
}
console.log(loadAnimals);

const list = document.querySelector("#list");


//fehler mit data.lastRecord
localStorage.removeItem("regretList");

//chat, js für regret list
const STORAGE_KEY = "regretList";
const url = "https://extinct-api.herokuapp.com/api/v1/animal/";

function getRegretList() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveRegretList(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function addAnimalToRegretList(animal) {
  const list = getRegretList();

  const alreadyExists = list.some(savedAnimal => {
    return savedAnimal && animal && savedAnimal.binomialName === animal.binomialName;
  });

  if (!alreadyExists) {
    list.push(animal);
    saveRegretList(list);
  }
}

async function loadAnimal() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    const addButton = document.querySelector("#add-to-regret-list");

    if (addButton) {
      addButton.addEventListener("click", () => {
        addAnimalToRegretList(data);
        window.location.href = "regretlist.html";
      });
    }
  } catch (error) {
    console.error(error);
  }
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
    const card = document.createElement("div");
    card.classList.add("regret-card");

    const title = document.createElement("h2");
    title.innerText = animal.lastRecord;

    const lastRecord = document.createElement("p");
    lastRecord.innerText = animal.binomialName;

    const location = document.createElement("p");
    location.innerText = `last located in ${animal.location}`;

    card.appendChild(title);
    card.appendChild(name);
    card.appendChild(location);

    listElement.appendChild(card);
  });
}

loadAnimal();
renderRegretList();