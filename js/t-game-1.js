

const cards = [
    'demon',
    'starfish',
    'shark',
    'sailfish',
    'orange',
    'otter',    
    'shark',
    'turtle',
    'demon'
];





const loadGame = () => {
    const duplicateCards = [...cards, ...cards];
    
     const shuffledCards = duplicateCards.sort(() => Math.random - 0.5);
     
     shuffledCards.forEach(card => {
        const animal = createElement(card)
        // grid.appendChild(card);
     });
}


