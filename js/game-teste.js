const memoryGame = document.querySelector(".memory-game");
const cardStore = document.querySelectorAll('[data-store]');
const hit = document.querySelectorAll('[data-hit]');
const nameAnimal = document.querySelector('[data-name-animal]');
const imageAnimal = document.querySelector('[data-image-animal]');
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

const storeCard = (character) => {
    
    if(cardStore.length > 0) {
    
    const cardtoSet = [...cardStore].find(card => !card.getAttribute('data-character'));
    cardtoSet.setAttribute('data-character', character);
    const hitSet = [...hit].find(hit => !hit.getAttribute('data-background'));
    hitSet.setAttribute('data-background', character)
    hitSet.style.backgroundImage = `url(../images/${character}.png`
    
    
    } 
 
}

const checkIftisequal = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter === secondCharacter) {
    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');
    firstCard = '';
    secondCard = '';
    storeCard(firstCharacter)
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

const revealCard = ({ target }) => {
    
    if(target.parentNode.className.includes('reveal-card')) return;
    
    if(firstCard === '') {
    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;
    
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;
        checkIftisequal();
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



//capturar o nome
window.onload = () => {
    nameAnimal.innerHTML = localStorage.getItem('Nome do Animal');
    imageAnimal.src = localStorage.getItem('Image of animal');
    loadGame();
}