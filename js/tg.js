const memoryGame = document.querySelector(".memory-game-two");
const cardStore = document.querySelectorAll('[data-store]');
const hit = document.querySelectorAll('[data-hit]');

const player1 = document.querySelector('[data-player-1]');
const hitCardsPlayer1 = document.querySelector('.hit-cards-two[data-player-1]');
const play1 = document.querySelector('[player-1]');
const nameAnimal = document.querySelector('[data-name-animal]');
const imageAnimal = document.querySelector('[data-image-animal]');

const player2 = document.querySelector('[data-player-2]');
const hitCardsPlayer2 = document.querySelector('.hit-cards-two[data-player-2]');
const play2 = document.querySelector('[player-2]');
const nameAnimalTwo = document.querySelector('[data-name-animal-two]');
const imageAnimalTwo = document.querySelector('[data-image-animal-two]');

const pointsStore1 = [];
const pointsStore2 = [];

const btnPlayAgain = document.querySelector('[play-again]');
const btnBackToLogin = document.querySelector('[back-to-login]');



let player;
let rafael;
let cardCounter = 0;
let teste = true;

const cards = [
    "demon",
    "dolphin",
    "turtle",
    'starfish',
    "otter",
    "monster",
    'sailfish',
    'orange',
    "shark",
    "hammer"
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const showWarningScreen = () => {
    const containerWarningScreen = document.querySelector('.container-warning-screen');
    containerWarningScreen.style.display = 'block';

}

const checkPoint = (name, pointStore) => {
    if(pointStore.hasOwnProperty(name)) {
       return `${pointStore[name]}`;
}
}


const congratulateTheWinner = (pointsPlayer1, pointsPlayer2) => {
    let congratulateWinner = document.querySelector('[congratulate-winner]');
    const animalPlayer1 = checkPoint(pointsPlayer1, pointsStore1);
    const animalPlayer2 = checkPoint(pointsPlayer2, pointsStore2);
    
    if(animalPlayer1 > animalPlayer2) {
        congratulateWinner.textContent = ` ${localStorage.getItem('Nome of the animal p1')}`;
        
    } else if (animalPlayer2 > animalPlayer1) {
        congratulateWinner.textContent = ` ${localStorage.getItem('Nome of the animal p2')}`;
    } else if (animalPlayer1 === animalPlayer2) {
        congratulateWinner.textContent = "empatou glr";
    }
}
const checkEndGame  = () => {
    const disableCards = document.querySelectorAll('.disabled-card');
    if (disableCards.length === 20){
        congratulateTheWinner();
        setTimeout(() => {
            showWarningScreen();
        }, 2000);
    }
}

const storeCard = (character, hitCardsPlayer) => {
    let cardStore = hitCardsPlayer.querySelectorAll('[data-store]');
    let hit = hitCardsPlayer.querySelectorAll('[data-hit]');
    let allContainsDataCharacter = true;
    cardStore.forEach((card) => {
        if (!card.hasAttribute('data-character')){
            allContainsDataCharacter = false;
        }
    });
    if(allContainsDataCharacter === true){

    const divCard = createElement('div', 'card hit-scale');
    divCard.setAttribute('data-store', '');
    divCard.setAttribute('data-character',character)
    
    const divHit = createElement('div', 'face hit');
    divHit.setAttribute('data-hit', '');
    divHit.setAttribute('data-background', character)
    // divHit.backgroundImage = 'none';
    divHit.style.backgroundImage = `url(../images/${character}.png)`;
    divCard.appendChild(divHit);
    
    hitCardsPlayer.appendChild(divCard);
    
    
    
    } else if (cardStore.length > 0) {
    
    const cardtoSet = [...cardStore].find(card => !card.getAttribute('data-character'));
    cardtoSet.setAttribute('data-character', character);
    let hitSet = [...hit].find(hit => !hit.getAttribute('data-background'));
    hitSet.setAttribute('data-background', character)
    hitSet.style.backgroundImage = `url(../images/${character}.png`
    
    } 
    
    } 
 
const showPoint = (name, pointStore) => {
    if(pointStore.hasOwnProperty(name)) {
        pointStore[name]++;
    
    } else {
        pointStore[name] = 1;
    }
    name.innerHTML = `${pointStore[name]} point`;
}
    
const checkIftisequal = (hitCardsPlayer, name, pointStore) => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter === secondCharacter) {
     rafael = true;
    
    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');
    firstCard = '';
    secondCard = '';
    showPoint(name, pointStore);
    storeCard(firstCharacter, hitCardsPlayer);
    checkEndGame();
    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
            firstCard = '';
            secondCard = '';        
        }, 900);
    }
}

let firstCard = '';
let secondCard = '';
const brownColor = (player, namee, image) => {
    player.style.color = 'var(--brown)';
    namee.style.color = 'var(--brown)';
    image.style.borderColor = 'var(--brown)'
    //criar uma função que mude a cor com base em parametros, player name, image e color
    

}

//cor laranja seria o nome mais adequado para função;
const changeTheColor = (player, name, image) => {
    player.style.color = 'var(--orange)';
    name.style.color = 'var(--orange)';
    image.style.borderColor = 'var(--orange)';
}

const revealCard = ({target}) => {
   
    if(target.parentNode.className.includes('reveal-card')) return;
    if(firstCard === '') {
    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;
    if(teste === true){
        brownColor(play2, nameAnimalTwo, imageAnimalTwo);
        changeTheColor(play1, nameAnimal, imageAnimal);
    } else if( teste === false){
        brownColor(play1, nameAnimal, imageAnimal)
        changeTheColor(play2, nameAnimalTwo, imageAnimalTwo)
    }
    
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;
        if(teste === true) {
            checkIftisequal(hitCardsPlayer1, nameAnimal, pointsStore1);
            if(rafael === true){
                teste = true;
                rafael = '';
            } else {
                teste = false;
            }
            
        } else if (teste === false) {
            checkIftisequal(hitCardsPlayer2, nameAnimalTwo, pointsStore2);
            if(rafael === true){
                teste = false;
                rafael = '';
            } else {
                teste = true;
            }
            
        }
        
    }
    
}

const createCard = (character) => {
    
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');
    
    front.style.backgroundImage = `url(../images/${character}.png`
    card.appendChild(front);
    card.appendChild(back);
    
    card.addEventListener('click', revealCard);

    card.setAttribute('data-character', character);
    
    return card;    
}

const loadGame = () => {
    const duplicateCharacters = [...cards, ...cards];
    
    const shuflledArray = duplicateCharacters.sort(() => Math.random() - 0.5);
    
    shuflledArray.forEach((character) => {
        const card = createCard(character);
        memoryGame.appendChild(card);
    });
}


window.onload = () => {
    nameAnimal.innerHTML = localStorage.getItem('Nome of the animal p1');
    imageAnimal.src = localStorage.getItem('Image of animal p1');
    nameAnimalTwo.innerHTML = localStorage.getItem('Nome of the animal p2');
    imageAnimalTwo.src = localStorage.getItem('Image of animal p2');
    
    loadGame();
};

btnPlayAgain.addEventListener('click', () => {
    location.reload()
});
    
btnBackToLogin.addEventListener('click', () => {
    window.location.href = '../html/login-screen.html';
});
    
