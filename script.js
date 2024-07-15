const ecran = document.querySelector("#ecran");

const buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        ecran.innerText = ""; // Vide le contenu de l'ecran
        break;
      case "=":
        try {
          ecran.innerText = eval(ecran.innerText); // Calcule le contenu de l'ecran
        } catch {
          ecran.innerText = "Error";
        }
        break;
      case "DEL":
        if (ecran.innerText) {
          ecran.innerText = ecran.innerText.slice(0, -1); // Supprime le dernier chiffre au click du boutton del
        }
        break;
      default:
        ecran.innerText += e.target.innerText; // Ajoute le contenu du boutton sur lequel l'utilisateur à cliqué
    }
    if (ecran.innerText.length >= 14) {
      // je diminue la taille du texte dans l'ecran
      ecran.style.fontSize = "20px";
    } else {
      ecran.style.fontSize = "30px";
    }
  });
});
