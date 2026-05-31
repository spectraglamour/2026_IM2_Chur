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

const hateSentences = [
  "You didn't have to kill it.",
  "Humans ruin everything.",
  "Another one gone. Great job.",
  "You call this progress?",
  "Maybe stop destroying everything you touch."
];

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
    const randomSentence = hateSentences[Math.floor(Math.random() * hateSentences.length)];
    speechText.innerText = randomSentence;
  }
}

function chooseRandomAnimal() {
  if (!animals.length) return;

  currentAnimal = animals[Math.floor(Math.random() * animals.length)];

  if (animalFrame && currentAnimal.wikiLink) {
    animalFrame.src = currentAnimal.wikiLink;
  }

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