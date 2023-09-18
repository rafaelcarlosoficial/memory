const animals = document.querySelectorAll("[data-animal]");
const avatar = document.querySelector("[data-avatar]");
const avatarTwo = document.querySelector("[data-avatar-two]");
const btnConfirm = document.querySelectorAll("[btn-confirm]");
const btnConfirmTwo = document.querySelectorAll("[btn-confirm-two]");
const btnContinue = document.querySelector("[btn-continue]");
const btnContinueTwo = document.querySelectorAll('[btn-continue-two]');
const scriptTag = document.querySelector("script[data-screen]");
const nameScreen = scriptTag.getAttribute("data-screen");
const initialWidth = window.innerWidth;
let widthScreen;

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

const changeAnimalTwo = (element) => {
  const animal = element.target;
  const name = animal.getAttribute("alt");
  const image = animal.getAttribute("src");

  const profileName = document.querySelector("[data-name-two]");
  const profileImage = document.querySelector("[data-image-two]");

  profileImage.setAttribute("src", image);
  profileName.innerHTML = name;
  
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
  

const changeAnimal = (element) => {
  const animal = element.target;
  const name = animal.getAttribute("alt");
  const image = animal.getAttribute("src");

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

};
const confirmTheChoiceTwo = (click) => {
  if (confirm.textContent === "Edit") {
    confirm.style.backgroundColor = "var(--orange)";
    confirm.textContent = "Confirm";
    btnContinue.style.display = "block";
    animals.forEach((animal) => {
      animal.removeEventListener("click", animalClickTwo);
    });
} else {
  confirm.style.backgroundColor = "var(--light-orange)";
  confirm.textContent = "Edit";
  animals.forEach((animal) => {
    animal.addEventListener("click", animalClick);
  });
  btnContinue.style.display = "block";
}

}


// const confirmTheChoice = (click) => {
//   const confirm = click.target;
//   if (confirm.textContent === "Edit") {
//     confirm.style.backgroundColor = "var(--orange)";
//     confirm.textContent = "Confirm";
//     btnContinue.style.display = "none";
//     animals.forEach((animal) => {
//       animal.addEventListener("click", animalClick);
//     });
//     btnConfirmTwo.forEach((btn) => {
//       btn.addEventListener("click", confirmTheChoiceTwo);
//     });

//   } else {
//     confirm.style.backgroundColor = "var(--light-orange)";
//     confirm.textContent = "Edit";
//     animals.forEach((animal) => {
//       animal.removeEventListener("click", animalClick);
//     });
//     btnContinue.style.display = "block";
    
    
//   }
// };

const changeSaturation = (element) => {
  const image = element.target;
  image.classList.add('saturation-card');
}

const removeSaturation = (array) => {
  array.forEach(element => {
  if (element.classList.contains('saturation-card')) { 
      element.classList.remove('saturation-card');
    }
  });
}

const releaseContinueButton = (event) => {
  console.log("entrou")
  btnContinue.style.display = 'block';
};


const animalClick = (event) => {
  removeSaturation(animals)
  changeAnimal(event)
  changeSaturation(event)
}


const animalClickTwo = (event) => {
  removeSaturation(animals)
  changeAnimalTwo(event)
  changeSaturation(event)
}


// const confirmBothPlayers = (nameScreen) => {

//   if(nameScreen === 'two-player'){
//     btnConfirmTwo.forEach((btn) => {
//       btn.classList.remove('display-btn');
//     });
//     btnContinue.style.display = "none";
//     animals.forEach((animal) => {
//       animal.addEventListener('click', animalClickTwo);
//     });
    
//   } 
// }

animals.forEach((animal) => {
  animal.addEventListener("click", animalClick);
});

//teste

btnConfirm.forEach((btn) => {
  btn.addEventListener("click",
  confirmTheChoice);
});

// btnConfirmTwo.forEach((btn) => {
//   btn.addEventListener("click", confirmTheChoice);

// });

btnContinueTwo.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = '../html/game-2-play.html';
  })
});


btnContinue.addEventListener("click", () => {
  window.location.href = '../html/game-1-play.html';
});