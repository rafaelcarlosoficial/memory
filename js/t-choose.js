const animals = document.querySelectorAll("[data-animal]");
const avatar = document.querySelector(".avatar");
const btnConfirm = document.querySelectorAll("[btn-confirm]");
const btnConfirmTwo = document.querySelectorAll("[btn-confirm-two]");
const btnContinue = document.querySelector("[btn-continue]");
const btnContinueTwo = document.querySelectorAll('[btn-continue-two]');
const initialWidth = window.innerWidth;
let widthScreen;
console.log(widthScreen);

const changeAvatar = (name) => {
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
  console.log(image);

  const profileName = document.querySelector("[data-name]");
  const profileImage = document.querySelector("[data-image]");

  profileImage.setAttribute("src", image);
  profileName.innerHTML = name;

  const avatar = document.querySelector(".avatar");

  if (avatar.style.transform.includes("translateX(-60vw)")) {
    setTimeout(() => {
      avatar.style.transform = "translateX(0)";
      changeAvatar(name);
    }, 100);
  } else {
    setTimeout(() => {
      avatar.style.transform = "translateX(-60vw)";
    }, 100);

    setTimeout(() => {
      changeAvatar(name);
    }, 350);

    setTimeout(() => {
      avatar.style.transform = "translateX(0)";
    }, 700);
  }
};

const confirmTheChoice = (click) => {
  const confirm = click.target;
  console.log(confirm.textContent);
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
    
    if (btnContinue === undefined) { 
      btnContinueTwo.style.display = "block"
    } else {
      console.log("entrou no 96")
      btnContinue.style.display = "block";
    }
    animals.forEach((animal) => {
      animal.removeEventListener("click", animalClick);
    });
  }
};

const changeSaturation = (element) => {
  
  const image = element.target;
  image.classList.add('saturation-card');
  
}

const animalClick = (event) => {
  removeSaturation(animals)
  changeAnimal(event)
  changeSaturation(event)
}


const removeSaturation = (array) => {
  array.forEach(element => {
  console.log('122', element)
  if (element.classList.contains('saturation-card')) { 
      console.log("123", removeSaturation)
      element.classList.remove('saturation-card');
    }
   
  });
}

animals.forEach((animal) => {
  animal.addEventListener("click", animalClick);
});

//teste

btnConfirm.forEach((btn) => {
  btn.addEventListener("click",
  confirmTheChoice);
});

btnConfirmTwo.forEach((btn) => {
  btn.addEventListener("click", confirmTheChoice);

});

btnContinueTwo.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = '../html/game-2-play.html';
  })
});



btnContinue.addEventListener("click", () => {
  window.location.href = '../html/game-1-play.html';
});