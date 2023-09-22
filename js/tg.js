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

const checkEndGame  = () => {
    const disableCards = document.querySelectorAll('.disable-card');
    if (disableCards.length === 20){
        alert('Parabéns, você conseguiu!');
    }
}

const storeCard = (character, hitCardsPlayer) => {
    console.log("43", hitCardsPlayer)
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
    
    //teste
    // const cardtoSet = [...cardStore].find(card => !card.getAttribute('data-character'));
    // cardtoSet.setAttribute('data-character', character);
    // let hitSet = [...hit].find(hit => !hit.getAttribute('data-background'));
    // hitSet.setAttribute('data-background', character)
    // hitSet.style.backgroundImage = `url(../images/${character}.png`
    
    
    } else if (cardStore.length > 0) {
    
    const cardtoSet = [...cardStore].find(card => !card.getAttribute('data-character'));
    cardtoSet.setAttribute('data-character', character);
    let hitSet = [...hit].find(hit => !hit.getAttribute('data-background'));
    hitSet.setAttribute('data-background', character)
    hitSet.style.backgroundImage = `url(../images/${character}.png`
    
    } 
    
    } 
 

// const ChangeTheTurn = () => {
//     console.log(cardCounter)
//     if (cardCounter % 3 === 0){
//         return hitCardsPlayer2; 
//     } else {
//         return  hitCardsPlayer1; 
//     }
// }
    
const checkIftisequal = (hitCardsPlayer) => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter === secondCharacter) {
     rafael = true;
    
    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');
    firstCard = '';
    secondCard = '';
    // storeCard(firstCharacter, ChangeTheTurn());
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
        console.log(teste, 107)
        if(teste === true) {
            checkIftisequal(hitCardsPlayer1);
            if(rafael === true){
                teste = true;
                rafael = '';
            } else {
                teste = false;
            }
            
        } else if (teste === false) {
            checkIftisequal(hitCardsPlayer2);
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
