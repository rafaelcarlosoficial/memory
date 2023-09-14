const animalsDesktop = document.querySelectorAll('[animal-desktop]');
const animalsMobile = document.querySelectorAll('[animal-mobile]');
const widthScreen = window.innerWidth;
console.log(widthScreen);

const changeAvatar = (name) => {
    const avatar = document.querySelector('.avatar');

    switch (name) {
      case 'Seahorse':
        avatar.setAttribute('src', '../images/Seahorse-avatar.png');
        break;
      case 'Beluga':
        avatar.setAttribute('src', '../images/beluga-avatar.png');
        break;
      case 'White shark':
        avatar.setAttribute('src', '../images/white-shark-avatar.png');
        break;
      case 'Octopus':
        avatar.setAttribute('src', '../images/octopus-avatar.png');
        break;
      case 'Penguin':
        avatar.setAttribute('src', '../images/penguim-avatar.png');
        break;
      case 'Blue whale':
        avatar.setAttribute('src', '../images/blue-whale-avatar.png');
        break;
      case 'Krill':
        avatar.setAttribute('src', '../images/krill-avatar.png');
        break;
      case 'Sealion':
        avatar.setAttribute('src', '../images/sealion-avatar.png');
        break;
      case 'Dolphin':
        avatar.setAttribute('src', '../images/dolphin-avatar.png');
        break;
      default:
        console.log("Erro: Nome de animal desconhecido");
    }

};

const changeAnimal = (element) => {
    //Mudar a foto e o nome
    const animal = element.target;
    const name = animal.getAttribute('alt');
    const image = animal.getAttribute('src');
    console.log(image);
    
    const profileName = document.querySelector('[data-name]');
    const profileImage = document.querySelector('[data-image]');
    
    profileImage.setAttribute('src', image);
    profileName.innerHTML = name;

    const avatar = document.querySelector('.avatar');
    
    if (avatar.style.transform.includes('translateX(-60vw)')) {
        setTimeout(() => {
            avatar.style.transform = 'translateX(0)';
            changeAvatar(name);
               
        }, 100);
    } else {
        setTimeout(() => {
            avatar.style.transform = 'translateX(-60vw)';
        }, 100);
        
        setTimeout(() => {
            changeAvatar(name);
        }, 350);
    
        setTimeout(() => {
            avatar.style.transform = 'translateX(0)';
        }, 700);
    }

}

if(widthScreen < 880) {

    animalsMobile.forEach(animal => {
        animal.addEventListener('click', changeAnimal);
    });
    
} else { 
    animalsDesktop.forEach(animal => {
    animal.addEventListener('click', changeAnimal);
});

}