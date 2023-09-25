const animals = document.querySelectorAll("[data-animal]");
const avatar = document.querySelector("[data-avatar]");
const btnConfirm = document.querySelectorAll("[btn-confirm]");
const btnContinue = document.querySelector("[btn-continue]");

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
    localStorage.setItem('Nome do Animal', name);
    localStorage.setItem('Image of animal', image)

    const profileName = document.querySelector("[data-name]");
    const profileImage = document.querySelector("[data-image]");
  
    profileImage.setAttribute("src", image);
    profileName.innerHTML = name;
    
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
    removeSaturation(animals)
    changeAnimal(event)
    changeSaturation(event)
}

animals.forEach((animal) => {
    animal.addEventListener("click", animalClick);
  });
  
// button confirm
btnContinue.addEventListener("click", () => {
    window.location.href = '../html/game-1-play.html';
});

const confirmTheChoice = (click) => {
    const confirm = click.target;
    if (confirm.textContent === "Edit") {
      confirm.style.backgroundColor = "var(--orange)";
      confirm.textContent = "Confirm";
      btnContinue.style.display = "none";
      animals.forEach((animal) => {
        animal.addEventListener("click", animalClick);
      });

    } else {
      confirm.style.backgroundColor = "var(--light-orange)";
      confirm.textContent = "Edit";
      animals.forEach((animal) => {
        animal.removeEventListener("click", animalClick);
      });
      console.log("passou aqui!")
      btnContinue.style.display = "block";
      
    }
}


btnConfirm.forEach((btn) => {
    btn.addEventListener("click",
    confirmTheChoice);
  });


