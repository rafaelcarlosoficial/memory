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
const acquireInformations = (element, animal, name, image, nameLocation, imageLocation, localStorageName, localStorageImage) => {
    animal = element.target;
    name = animal.getAttribute("alt");
    image = animal.getAttribute("src");
 
   const profileName = document.querySelector(`[${nameLocation}]`);
   const profileImage = document.querySelector(`[${imageLocation}]`);
 
   profileImage.setAttribute("src", image);
   profileName.innerHTML = name;
 
   localStorage.setItem(localStorageName, name);
   localStorage.setItem(localStorageImage, image);
}
const functionSetTimeOut = (avatar, name, time) => {
    setTimeout(() => {
        avatar.style.transform = "translateX(0)";
        changeAvatar(name, avatar);
    }, time);
}

const characterAnimation = (avatar, name, number) => {
    if (avatar.style.transform.includes("translateX(-60vw)")) {
        functionSetTimeOut(avatar, name, 100)
      } else {
        setTimeout(() => {
          avatar.style.transform = `translateX(${number}vw)`;
        }, 100);
        setTimeout(() => {
          changeAvatar(name, avatar);
        }, 350);
        functionSetTimeOut(avatar, name, 700)
      }
};
    

const changeAnimal = (element) => {
  const animal = element.target;
  const name = animal.getAttribute("alt");
  const image = animal.getAttribute("src");
  acquireInformations(element, animal, name, image, 'data-name', 'data-image','player1 animal name', 'player1 animal image' )
  characterAnimation(avatar, name, -60); 
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
    btnConfirmContinue.textContent === "Edit" && btnConfirmTwo.textContent !== "Confirm" && btnConfirmContinue.textContent !== "Confirm") {
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
    acquireInformations(element, animal, name, image, 'data-name-two', 'data-image-two', 'player2 animal name', 'player2 animal image') 
    characterAnimation(avatarTwo, name, 60)
};

const animalClickTwo = (event) => {
  checkConfirmButton(btnConfirm, btnConfirmContinue);
  removeSaturation(animals);
  changeAnimalTwo(event);
  changeSaturation(event);
};

const customizetheButton = (button, colorName, textContent) => {
    button.style.backgroundColor = `var(--${colorName})`;
    button.textContent = textContent;
}
const confirmTheChoice = (click) => {
  const confirm = click.target;

  if (confirm.textContent === "Edit") {
    customizetheButton(confirm, 'orange', 'Confirm');
    btnContinue.style.display = "none";
    animals.forEach((animal) => {
      animal.addEventListener("click", animalClick);
    });
    animals.forEach((animal) => {
      animal.removeEventListener("click", animalClickTwo);
    });

    checkConfirmButton(btnConfirm, btnConfirmContinue);
  } else {
    customizetheButton(confirm, 'light-orange', 'Edit')

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
  if (window.location.href.includes("two-players.html")){
    window.location.href = "../html/game-2-play.html";
  } else {
    window.location.href = "../html/game-1-play.html";
  }
  

});


const confirmTheChoiceTwo = (click) => {
  const confirm = click.target;
  if (confirm.textContent === "Edit") {
    console.log("ENTROU AQUI")
    
    customizetheButton(confirm, 'orange', 'Confirm');
    btnContinue.style.display = "none";
    animals.forEach((animal) => {
      animal.addEventListener("click", animalClickTwo);
    });
  } else {
    customizetheButton(confirm, 'light-orange', 'Edit');
    animals.forEach((animal) => {
      animal.removeEventListener("click", animalClickTwo);
    });

    btnContinue.style.display = "block";
  }
};


