const animals = document.querySelectorAll('[data-animals]');

const changeAnimal = (element) => {
    //Mudar a foto e o nome
    const animal = element.target;
    const name = animal.getAttribute('alt');
    const image = animal.getAttribute('src');
    
    const profileName = document.querySelector('[data-name]');
    const profileImage = document.querySelector('[data-image]');
    
    profileImage.setAttribute('src', image)
    profileName.innerHTML = name

    // const avatar = document.querySelector('.avatar');
    
    // setTimeout(() => {
    //     avatar.style.tranform = 'translateX(0)';
    // }, 100)
}

console.log(animals);
animals.forEach(animal => {
    console.log(animal)
    animal.addEventListener('click', changeAnimal);
    console.log('passou')
});
    
    
