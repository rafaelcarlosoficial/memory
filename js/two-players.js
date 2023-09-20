const animals = document.querySelectorAll("[data-animal]");
const avatar = document.querySelector("[data-avatar]");
const avatarTwo = document.querySelector("[data-avatar-two]");
const btnConfirmTwo = document.querySelector("[btn-confirm-two]");
const btnContinue = document.querySelector("[btn-continue]");
const btnConfirmContinue = document.querySelector("[btn-confirm-continue]");

console.log("btnConfirmTwo", btnConfirmTwo)
const changeAvatar = (name, avatar) => {
    switch (name) {
      case "Seahorse":
        avatar.setAttribute("src", "../images/Seahorse-avatar.png");
        break;
      case "Beluga":
        avatar.setAttribute("src", "../images/beluga-avatar.png");
        break;
      case "White shark":
        avatar.setAttribute("src", "../images/white-shark-avatar.png");
        break;
      case "Octopus":
        avatar.setAttribute("src", "../images/octopus-avatar.png");
        break;
      case "Penguin":
        avatar.setAttribute("src", "../images/penguim-avatar.png");
        break;
      case "Blue whale":
        avatar.setAttribute("src", "../images/blue-whale-avatar.png");
        break;
      case "Krill":
        avatar.setAttribute("src", "../images/krill-avatar.png");
        break;
      case "Sealion":
        avatar.setAttribute("src", "../images/sealion-avatar.png");
        break;
      case "Dolphin":
        avatar.setAttribute("src", "../images/dolphin-avatar.png");
        break;
      default:
    }
};

const changeAnimal = (element) => {
    const animal = element.target;
    const name = animal.getAttribute("alt");
    const image = animal.getAttribute("src");
  
    const profileName = document.querySelector("[data-name]");
    const profileImage = document.querySelector("[data-image]");
  
    profileImage.setAttribute("src", image);
    profileName.innerHTML = name;
    
    localStorage.setItem('Nome of the animal p1', name);
    localStorage.setItem('Image of animal p1', image)
    
    if (avatar.style.transform.includes("translateX(-60vw)")) {
      setTimeout(() => {
        avatar.style.transform = "translateX(0)";
        changeAvatar(name, avatar);
      }, 100);
    } else {
      setTimeout(() => {
        avatar.style.transform = "translateX(-60vw)";
      }, 100);
  
      setTimeout(() => {
        changeAvatar(name, avatar);
      }, 350);
  
      setTimeout(() => {
        avatar.style.transform = "translateX(0)";
      }, 700);
    }
}

const removeSaturation = (array) => {
    array.forEach(element => {
    if (element.classList.contains('saturation-card')) { 
        element.classList.remove('saturation-card');
      }
    });
}

const changeSaturation = (element) => {
    const image = element.target;
    image.classList.add('saturation-card');
}
  

const animalClick = (event) => {
    checkConfirmButton(btnConfirmTwo, btnConfirmContinue);
    removeSaturation(animals)
    changeAnimal(event)
    changeSaturation(event)
    
}

animals.forEach((animal) => {
    animal.addEventListener("click", animalClick);
  });
  
// button confirm
const checkConfirmButton = (btnConfirmTwo, btnConfirmContinue) => {
    if(btnConfirmTwo.textContent === 'Edit' && btnConfirmContinue.textContent === 'Edit') {
        btnContinue.style.display = "block";
        
        animals.forEach((animal) => {
            animal.removeEventListener("click", animalClick);
          });
        
        animals.forEach((animal) => {
            animal.removeEventListener("click", animalClickTwo);
          });
    } else {
        btnContinue.style.display = "none";
    }
}

const changeAnimalTwo = (element) => {
    const animal = element.target;
    const name = animal.getAttribute("alt");
    const image = animal.getAttribute("src");
  
    const profileName = document.querySelector("[data-name-two]");
    const profileImage = document.querySelector("[data-image-two]");
  
    profileImage.setAttribute("src", image);
    profileName.innerHTML = name;
    
    localStorage.setItem('Nome of the animal p2', name);
    localStorage.setItem('Image of animal p2', image)
    
    if (avatarTwo.style.transform.includes("translateX(60vw)")) {
      setTimeout(() => {
        avatarTwo.style.transform = "translateX(0)";
        changeAvatar(name, avatarTwo);
      }, 100);
    } else {
      setTimeout(() => {
        avatarTwo.style.transform = "translateX(60vw)";
      }, 100);
  
      setTimeout(() => {
        changeAvatar(name, avatarTwo);
      }, 350);
  
      setTimeout(() => {
        avatarTwo.style.transform = "translateX(0)";
      }, 700);
    }
  
};


const animalClickTwo = (event) => {
    checkConfirmButton(btnConfirmTwo, btnConfirmContinue);
    removeSaturation(animals)
    changeAnimalTwo(event)
    changeSaturation(event)
}

const confirmTheChoice = (click) => {
    const confirm = click.target;
    
    if (confirm.textContent === "Edit") {
      confirm.style.backgroundColor = "var(--orange)";
      confirm.textContent = "Confirm";
      btnContinue.style.display = "none";
      animals.forEach((animal) => {
        animal.addEventListener("click", animalClick);
      });
      animals.forEach((animal) => {
        animal.removeEventListener("click", animalClickTwo);
      });
      
      checkConfirmButton(btnConfirmTwo, btnConfirmContinue);
      
    } else {
      confirm.style.backgroundColor = "var(--light-orange)";
      confirm.textContent = "Edit";
      
    
      animals.forEach((animal) => {
        animal.addEventListener("click", animalClickTwo);
      });
      checkConfirmButton(btnConfirmTwo, btnConfirmContinue);
      animals.forEach((animal) => {
        animal.removeEventListener("click", animalClick);
      });

      btnConfirmContinue.classList.remove('display-btn');
      btnConfirmContinue.style.display = 'block';
    }
}


btnConfirmTwo.addEventListener('click', confirmTheChoice);
  
btnContinue.addEventListener("click", () => {
    window.location.href = '../html/game-2-play.html';
});



//button confirm two


const confirmTheChoiceTwo = (click) => {
    const confirm = click.target;
    if (confirm.textContent === "Edit") {
      confirm.style.backgroundColor = "var(--orange)";
      confirm.textContent = "Confirm";
      checkConfirmButton(btnConfirmTwo, btnConfirmContinue);
      btnContinue.style.display = "block";
      animals.forEach((animal) => {
        animal.addEventListener("click", animalClickTwo);
      });
      
    } else {
    confirm.style.backgroundColor = "var(--light-orange)";
    confirm.textContent = "Edit";
    
    animals.forEach((animal) => {
      animal.removeEventListener("click", animalClickTwo);
    });
    
    checkConfirmButton(btnConfirmTwo, btnConfirmContinue);
    
    btnContinue.style.display = 'block';
    }
}

btnConfirmContinue.addEventListener('click', confirmTheChoiceTwo);



