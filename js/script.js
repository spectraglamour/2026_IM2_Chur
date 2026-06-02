const regretIcon = document.querySelector("#regretIcon");

if (regretIcon) {
  regretIcon.addEventListener("click", () => {
    const isSaved = regretIcon.dataset.saved === "true";

    if (isSaved) {
      regretIcon.src = regretIcon.dataset.white;
      regretIcon.dataset.saved = "false";
    } else {
      regretIcon.src = regretIcon.dataset.black;
      regretIcon.dataset.saved = "true";
      addAnimalToRegretList(currentAnimal);
    }
  });
}

const animalFrame = document.querySelector("#animalFrame");
const killButton = document.querySelector(".kill-button");
const speechText = document.querySelector("#speechText");
const speechNext = document.querySelector("#speechNext");

const API_URL = "https://extinct-api.herokuapp.com/api/v1/animal/";

let animals = [];
let currentAnimal = null;
let speechStep = 0;

const STORAGE_KEY = "regretList";

function getRegretList() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveRegretList(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function addAnimalToRegretList(animal) {
  if (!animal) return;

  const list = getRegretList();

  const alreadyExists = list.some(savedAnimal => {
    return savedAnimal && savedAnimal.binomialName === animal.binomialName;
  });

  if (!alreadyExists) {
    list.push(animal);
    saveRegretList(list);
  }
}

const hateSentences = [
  "You didn't have to kill it.",
  "Humans ruin everything.",
  "Another one gone. Great job.",
  "You call this progress?",
  "Maybe stop destroying everything you touch.",
  "I dont even have words for how much I hate you right now.",
  "You, yeah you, human, you are a Looooooser.",
  "You're a heartless creature",
  "You are brutal, thank you for nothing."
];

let lastHateSentence = "";

function resetRegretIcon() {
  if (!regretIcon) return;

  regretIcon.src = regretIcon.dataset.white;
  regretIcon.dataset.saved = "false";
}

function getAnimalName(animal) {
  return animal.commonName || animal.binomialName || "this poor creature";
}

function updateSpeech() {
  if (!currentAnimal || !speechText) return;

  const name = getAnimalName(currentAnimal);

  if (speechStep === 0) {
    speechText.innerText = `This is the ${name}.`;
  } else if (speechStep === 1) {
    speechText.innerText = `This species was last recorded in ${currentAnimal.lastRecord}.`;
  } else {
let randomSentence;

do {
  randomSentence =
    hateSentences[Math.floor(Math.random() * hateSentences.length)];
} while (
  hateSentences.length > 1 &&
  randomSentence === lastHateSentence
);

lastHateSentence = randomSentence;
speechText.innerText = randomSentence;
  }
}

function chooseRandomAnimal() {
  if (!animals.length) return;

  currentAnimal = animals[Math.floor(Math.random() * animals.length)];

  if (animalFrame && currentAnimal.wikiLink) {
    animalFrame.src = currentAnimal.wikiLink;
  }

  resetRegretIcon();
  speechStep = 0;
  updateSpeech();
}

async function loadAnimals() {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();

    animals = result.data || result;

    chooseRandomAnimal();
  } catch (error) {
    console.error("API error:", error);
  }
}

if (killButton) {
  killButton.addEventListener("click", () => {
    loadAnimals();
  });
}

if (speechNext) {
  speechNext.addEventListener("click", () => {
    speechStep = (speechStep + 1) % 3;
    updateSpeech();
  });
}

loadAnimals();
