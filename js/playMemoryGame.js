const containerMemoryGame = document.querySelector("[container-memory-game]");
const cardStore = document.querySelectorAll("[store-the-card]");
const wonCards = document.querySelectorAll("[data-hit]");

const player1 = document.querySelector("[data-player-1]");
const hitCardsPlayer1 = document.querySelector("[data-play-1]");
const play1 = document.querySelector("[player-1]");
const nameAnimal1 = document.querySelector("[data-name-animal]");
const imageAnimal1 = document.querySelector("[data-image-animal]");
const pointStoragePlayer1 = [];

const player2 = document.querySelector("[data-player-2]");
const hitCardsPlayer2 = document.querySelector("[data-play-2]");
const play2 = document.querySelector("[player-2]");
const nameAnimal2 = document.querySelector("[data-name-animal-two]");
const imageAnimal2 = document.querySelector("[data-image-animal-two]");
const pointStoragePlayer2 = [];

const btnPlayAgain = document.querySelector("[play-again]");
const btnBackToLogin = document.querySelector("[back-to-login]");

let player;
let keepPlaying;
let changePlayersTurn = true;
let twoPlayers;

const cards = [
  "demon",
  "dolphin",
  "turtle",
  "starfish",
  "otter",
  "monster",
  "sailfish",
  "orange",
  "shark",
  "hammer",
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const showWarningScreen = () => {
  const containerWarningScreen = document.querySelector(
    ".container-warning-screen"
  );
  containerWarningScreen.style.display = "block";
};

const checkNumberOfPoints = (currentPoint, pointStorage) => {
  if (pointStorage.hasOwnProperty(currentPoint)) {
    return `${pointStorage[currentPoint]}`;
  }
};

const congratulateTheWinner = (player1Points, player2Points) => {
  let congratulateWinner = document.querySelector("[congratulate-winner]");
  const firstPlayerScore = checkNumberOfPoints(
    player1Points,
    pointStoragePlayer1
  );
  const secondPlayerScore = checkNumberOfPoints(
    player2Points,
    pointStoragePlayer2
  );
  if (firstPlayerScore > secondPlayerScore) {
    congratulateWinner.textContent = ` ${localStorage.getItem(
      "player1 animal name"
    )}`;
  } else if (secondPlayerScore > firstPlayerScore) {
    congratulateWinner.textContent = ` ${localStorage.getItem(
      "player2 animal name"
    )}`;
  } else if (firstPlayerScore === secondPlayerScore) {
    congratulateWinner.textContent = "empatou glr";
  } else if (firstPlayerScore === undefined) {
    congratulateWinner.textContent = ` ${localStorage.getItem(
      "player2 animal name"
    )}`;
  } else if (secondPlayerScore === undefined) {
    congratulateWinner.textContent = ` ${localStorage.getItem(
      "player1 animal name"
    )}`;
  }
};
const checkEndGame = () => {
  const disableCards = document.querySelectorAll(".disabled-card");
  if (disableCards.length === 20) {
    congratulateTheWinner(nameAnimal1, nameAnimal2);
    setTimeout(() => {
      showWarningScreen();
    }, 2000);
  }
};

const storeCard = (character, hitCardsPlayer) => {
  let setOfCards = hitCardsPlayer.querySelectorAll("[store-the-card]");
  let wonCard = hitCardsPlayer.querySelectorAll("[data-hit]");
  let allContainsDataCharacter = true;
  setOfCards.forEach((card) => {
    if (!card.hasAttribute("data-character")) {
      allContainsDataCharacter = false;
    }
  });
  if (allContainsDataCharacter === true) {
    const divCard = createElement("div", "card hit-scale");
    divCard.setAttribute("store-the-card", "");
    divCard.setAttribute("data-character", character);

    const divCardsWon = createElement("div", "face hit");
    divCardsWon.setAttribute("data-hit", "");
    divCardsWon.setAttribute("data-background", character);
    divCardsWon.style.backgroundImage = `url(../images/${character}.png)`;
    divCard.appendChild(divCardsWon);

    hitCardsPlayer.appendChild(divCard);
  } else if (setOfCards.length > 0) {
    const cardtoSet = [...setOfCards].find(
      (characterlessCard) => !characterlessCard.getAttribute("data-character")
    );
    cardtoSet.setAttribute("data-character", character);
    let assignBackgroundtoImage = [...wonCard].find(
      (bottomlessCard) => !bottomlessCard.getAttribute("data-background")
    );
    assignBackgroundtoImage.setAttribute("data-background", character);
    assignBackgroundtoImage.style.backgroundImage = `url(../images/${character}.png`;
  }
};

const showPoint = (currentPoint, pointStorage) => {
  if (pointStorage.hasOwnProperty(currentPoint)) {
    pointStorage[currentPoint]++;
  } else {
    pointStorage[currentPoint] = 1;
  }
  currentPoint.innerHTML = `${pointStorage[currentPoint]} point`;
};

const checkIftisequal = (hitCardsPlayer, score, pointStorage) => {
  const firstCharacter = firstCard.getAttribute("data-character");
  const secondCharacter = secondCard.getAttribute("data-character");

  if (firstCharacter === secondCharacter) {
    keepPlaying = true;

    firstCard.firstChild.classList.add("disabled-card");
    secondCard.firstChild.classList.add("disabled-card");
    firstCard = "";
    secondCard = "";
    showPoint(score, pointStorage);
    storeCard(firstCharacter, hitCardsPlayer);
    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("reveal-card");
      secondCard.classList.remove("reveal-card");
      firstCard = "";
      secondCard = "";
    }, 900);
  }
};
let firstCard = "";
let secondCard = "";

const changeTheColor = (player, currentText, imageOfTheAnimal, varColor) => {
  player.style.color = `var(--${varColor})`;
  currentText.style.color = `var(--${varColor})`;
  imageOfTheAnimal.style.borderColor = `var(--${varColor})`;
};

const changeTheColorOfThePlayersTurn = () => {
  if (changePlayersTurn === true) {
    changeTheColor(play2, nameAnimal2, imageAnimal2, "brown");
    changeTheColor(play1, nameAnimal1, imageAnimal1, "orange");
  } else if (changePlayersTurn === false) {
    changeTheColor(play1, nameAnimal1, imageAnimal1, "brown");
    changeTheColor(play2, nameAnimal2, imageAnimal2, "orange");
  }
};

const revealCard = ({ target }) => {
  if (target.parentNode.className.includes("reveal-card")) return;

  if (firstCard === "") {
    target.parentNode.classList.add("reveal-card");
    firstCard = target.parentNode;

    if (twoPlayers) {
      changeTheColorOfThePlayersTurn();
    }
  } else if (secondCard === "") {
    target.parentNode.classList.add("reveal-card");
    secondCard = target.parentNode;
    if (!twoPlayers) {
      checkIftisequal(hitCardsPlayer1, nameAnimal1, pointStoragePlayer1);
    } else {
      if (changePlayersTurn === true) {
        checkIftisequal(hitCardsPlayer1, nameAnimal1, pointStoragePlayer1);
        if (keepPlaying === true) {
          changePlayersTurn = true;
          keepPlaying = "";
        } else {
          changePlayersTurn = false;
        }
      } else if (changePlayersTurn === false) {
        checkIftisequal(hitCardsPlayer2, nameAnimal2, pointStoragePlayer2);
        if (keepPlaying === true) {
          changePlayersTurn = false;
          keepPlaying = "";
        } else {
          changePlayersTurn = true;
        }
      }
    }
  }
};

const createCard = (character) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url(../images/${character}.png`;
  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);

  card.setAttribute("data-character", character);

  return card;
};
const storeCardsInContainer = (divContainer, card) => {
  divContainer.appendChild(card);
};

const loadGame = () => {
  const duplicateCharacters = [...cards, ...cards];

  const shuflledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuflledArray.forEach((character) => {
    const card = createCard(character);

    containerMemoryGame.appendChild(card);
  });
};

const uploadPlayersInformations = (
  nameOfAnimal,
  imageAnimal,
  nameItem,
  imageItem
) => {
  nameOfAnimal.innerHTML = localStorage.getItem(`${nameItem}`);
  imageAnimal.src = localStorage.getItem(`${imageItem}`);
};

window.onload = () => {
  if (window.location.href.includes("game-1-play.html")) {
    uploadPlayersInformations(
      nameAnimal1,
      imageAnimal1,
      "player1 animal name",
      "player1 animal image"
    );
    twoPlayers = false;
    loadGame();
  } else if (window.location.href.includes("game-2-play.html")) {
    uploadPlayersInformations(
      nameAnimal1,
      imageAnimal1,
      "player1 animal name",
      "player1 animal image"
    );
    uploadPlayersInformations(
      nameAnimal2,
      imageAnimal2,
      "player2 animal name",
      "player2 animal image"
    );
    twoPlayers = true;
    loadGame();
  }
};

btnPlayAgain.addEventListener("click", () => {
  location.reload();
});

btnBackToLogin.addEventListener("click", () => {
  window.location.href = "../html/login-screen.html";
});
