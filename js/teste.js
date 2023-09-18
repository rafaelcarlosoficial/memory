
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
      animal.addEventListener("click", animalClickTwo);
    });
    checkConfirmButton(btnConfirmTwo, btnConfirmContinue);
    }
}


const checkConfirmButton = (btnConfirmTwo, btnConfirmContinue) => {
    if(btnConfirmTwo === 'Edit' && btnConfirmContinue === 'Edit') {
        btnContinue.style.display = "none";
    } else {
        btnContinue.style.display = "block";
    }
}