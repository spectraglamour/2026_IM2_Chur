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

const killButton = document.querySelector(".kill-button");

if (killButton) {
  killButton.addEventListener("click", () => {
    console.log("kill again");
  });
}