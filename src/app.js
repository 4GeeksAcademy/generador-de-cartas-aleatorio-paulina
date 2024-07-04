import "./style.css";

window.onload = () => {
  const carta = document.querySelector(".carta");

  carta.classList.add(generateRandomPalo());
  carta.innerHTML = generateRandomNumber();
};

const generateRandomNumber = () => {
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const indexNumeros = Math.floor(Math.random() * numeros.length);
  return numeros[indexNumeros];
};

const generateRandomPalo = () => {
  const palos = ["pica", "trébol", "diamante", "corazón"];
  const indexPalos = Math.floor(Math.random() * palos.length);
  return palos[indexPalos];
};
