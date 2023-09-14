const animalsDesktop = document.querySelectorAll('[animal-desktop]');
const animalsMobile = document.querySelectorAll('[animal-mobile]');
const changeAnimal = (element) => {
    //Mudar a foto e o nome
    const animal = element.target;
    const name = animal.getAttribute('alt');
    const image = animal.getAttribute('src');
    
    const profileName = document.querySelector('[data-name]');
    const profileImage = document.querySelector('[data-image]');
    
    profileImage.setAttribute('src', image)
    profileName.innerHTML = name

    const avatar = document.querySelector('.avatar');
    console.log(avatar);
    
    if(avatar.style.transform === 'translateX(-50vw)'){ 
    
    setTimeout(() => {
        avatar.style.transform = 'translateX(0)';
    }, 100);
    
    }  
    
    
    if(avatar.style.transform === 'translateX(0)'){ 
    
    setTimeout(() => {
        avatar.style.transform = 'translateX(-50vw)';
    }, 100);
    
    }  
    
    
}

animalsDesktop.forEach(animal => {
    console.log(animal)
    animal.addEventListener('click', changeAnimal);
});
    
    
