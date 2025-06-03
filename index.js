//Etapes de l'exercice :

//1. Créer 3 var pour stocker les 3 chiffres aléatoires:
//2. Donner au body une couleur de fond en rgb():
//3. Montrer sur le body la couleur en rgb():

//1.
let text = document.getElementById("text");
let body = document.querySelector("body");

let colorGenerator = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let colors = "rgb(" + red + "," + green + "," + blue + ")";

  body.style.backgroundColor = colors;
  text.style.display = "block";
  text.innerText = colors;
};

setInterval(colorGenerator, 1000);
