const animalsDesktop = document.querySelectorAll('[animal-desktop]');
const animalsMobile = document.querySelectorAll('[animal-mobile]');
const avatar = document.querySelector('.avatar');
const initialWidth = window.innerWidth;

let widthScreen;
console.log(widthScreen);


const changeAvatarDesktop = (name) => {
    // const avatar = document.querySelector('.avatar');

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

const changeAvatarMobile = (name) => {
  switch (name) {
    case 'Seahorse':
      avatar.setAttribute('src', '../images/Seahorse-animal-responsive.png');
      break;
    case 'Beluga':
      avatar.setAttribute('src', '../images/beluga-animal-responsive.png');
      break;
    case 'White shark':
      avatar.setAttribute('src', '../images/white-shark-animal-responsive.png');
      break;
    case 'Octopus':
      avatar.setAttribute('src', '../images/octopus-animal-responsive.png');
      break;
    case 'Penguin':
      avatar.setAttribute('src', '../images/penguim-avatar.png');
      break;
    case 'Blue whale':
      avatar.setAttribute('src', '../images/blue-whale-avatar.png');
      break;
    case 'Krill':
      avatar.setAttribute('src', '../images/krill-animal-responsive.png');
      break;
    case 'Sealion':
      avatar.setAttribute('src', '../images/sealion-animal-responsive.png');
      break;
    case 'Dolphin':
      avatar.setAttribute('src', '../images/dolphin-animal-responsive.png');
      break;
    default:
      console.log("Erro: Nome de animal desconhecido");
  }
}

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
            if(widthScreen < 880) {
              console.log("entrou")
              changeAvatarMobile(name);
            } else { 
              changeAvatarDesktop(name);
            }
        }, 100);
    } else {
        setTimeout(() => {
            avatar.style.transform = 'translateX(-60vw)';
        }, 100);
        
        setTimeout(() => {
            changeAvatarDesktop(name);
        }, 350);
    
        setTimeout(() => {
            avatar.style.transform = 'translateX(0)';
        }, 700);
    }

}

const chooseImage = (widthScreen) => {
  if(widthScreen < 880) {
    console.log('ENTROU');
    animalsMobile.forEach(animal => {
        animal.addEventListener('click', changeAnimal);
        console.log("entrou no mobile")
    });
} else { 
    animalsDesktop.forEach(animal => {
    animal.addEventListener('click', changeAnimal);
});

}
};

const screenWidth = () => {
  widthScreen = window.innerWidth;
  chooseImage(widthScreen);

}


window.addEventListener('resize', screenWidth);

// teste

if(widthScreen === undefined) {
console.log('198')
  chooseImage(initialWidth);
}