const animals = document.querySelectorAll("[data-animal]");
const avatar = document.querySelector("[data-avatar]");
const btnContinue = document.querySelector("[btn-continue]");

let btnConfirmContinue, avatarTwo, btnConfirmTwo, btnConfirm, twoPlayers
btnConfirm = document.querySelector("[btn-confirm]");

window.onload = () => {
  if (window.location.href.includes("two-players.html")) {
    btnConfirmContinue = document.querySelector("[btn-confirm-continue]");
    avatarTwo = document.querySelector("[data-avatar-two]");
    btnConfirmTwo = document.querySelector("[btn-confirm-two]");
    btnConfirmContinue.addEventListener("click", confirmTheChoiceTwo);
    twoPlayers = true;
  } else {
    twoPlayers = false;
  }
};

const changeAvatar = (name, avatar) => {
    avatar.setAttribute('src', `../images/${name}-avatar.png`)
};

const changeAnimal = (element) => {
  const animal = element.target;
  const name = animal.getAttribute("alt");
  const image = animal.getAttribute("src");

  const profileName = document.querySelector("[data-name]");
  const profileImage = document.querySelector("[data-image]");

  profileImage.setAttribute("src", image);
  profileName.innerHTML = name;

  localStorage.setItem("player1 animal name", name);
  localStorage.setItem("player1 animal image", image);

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

const removeSaturation = (array) => {
  array.forEach((element) => {
    if (element.classList.contains("saturation-card")) {
      element.classList.remove("saturation-card");
    }
  });
};

const changeSaturation = (element) => {
  const image = element.target;
  image.classList.add("saturation-card");
};

const animalClick = (event) => {
  checkConfirmButton(btnConfirm, btnConfirmContinue);
  removeSaturation(animals);
  changeAnimal(event);
  changeSaturation(event);
};

animals.forEach((animal) => {
  animal.addEventListener("click", animalClick);
});


const checkConfirmButton = (btnConfirmTwo, btnConfirmContinue) => {
  if (
    btnConfirmTwo.textContent === "Edit" &&
    btnConfirmContinue.textContent === "Edit"
  ) {
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
};

const changeAnimalTwo = (element) => {
  const animal = element.target;
  const name = animal.getAttribute("alt");
  const image = animal.getAttribute("src");

  const profileName = document.querySelector("[data-name-two]");
  const profileImage = document.querySelector("[data-image-two]");

  profileImage.setAttribute("src", image);
  profileName.innerHTML = name;

  localStorage.setItem("player2 animal name", name);
  localStorage.setItem("player2 animal image", image);

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
  checkConfirmButton(btnConfirm, btnConfirmContinue);
  removeSaturation(animals);
  changeAnimalTwo(event);
  changeSaturation(event);
};

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

    checkConfirmButton(btnConfirm, btnConfirmContinue);
  } else {
    confirm.style.backgroundColor = "var(--light-orange)";
    confirm.textContent = "Edit";
    if(twoPlayers){ 
        animals.forEach((animal) => {
        animal.addEventListener("click", animalClickTwo);
        });
        checkConfirmButton(btnConfirm, btnConfirmContinue);
        btnConfirmContinue.classList.remove("display-btn");
        btnConfirmContinue.style.display = "block";
    }
    animals.forEach((animal) => {
      animal.removeEventListener("click", animalClick);
    });
    
    if(!twoPlayers){
       btnContinue.style.display = "block";
    }

  }
};

btnConfirm.addEventListener("click", confirmTheChoice);

btnContinue.addEventListener("click", () => {
  window.location.href = "../html/game-1-play.html";
});

const customizetheButton = (button, colorName, textContent) => {
    button.style.backgroundColor = `var(--${colorName})`;
    button.textContent = 'Confirm';
}

const confirmTheChoiceTwo = (click) => {
  const confirm = click.target;
  if (confirm.textContent === "Edit") {
    customizetheButton(confirm, 'orange', 'Confirm');
    checkConfirmButton(btnConfirm, btnConfirmContinue);
    btnContinue.style.display = "block";
    animals.forEach((animal) => {
      animal.addEventListener("click", animalClickTwo);
    });
  } else {
    customizetheButton(confirm, 'light-orange', 'Edit');
    animals.forEach((animal) => {
      animal.removeEventListener("click", animalClickTwo);
    });

    checkConfirmButton(btnConfirm, btnConfirmContinue);
    btnContinue.style.display = "block";
  }
};


