const circle = document.getElementById("circle");
const circle2 = document.getElementById("circle2");
const infoSquare = document.getElementById("infoSquare");

const numSquares = 8;
// const circleRadius = circle.offsetWidth / 2;
const circleRadius = circle.offsetWidth / 2;
const squareSize = 200;
const margin = -200;
let rotation = 0;

const infoTexts = [
  "Nyeema Morgan",
  "SaraNoa Mark",
  "Michael Rakowitz",
  "William Villalongo",
  "Gala Porras-Kim",
  "Maya Tihtiyas Attean",
  "Morehshin Allahyari",
  "Samuel Levi Jones",
];
const squareImages = [
  "wheel imgs/2024-ICA-OP_Nyeema-Morgan_tsui-18 copy.jpg",
  "wheel imgs/tsui-29.jpg",
  "wheel imgs/2024-ICA-OP_Michael-Rakowitz_tsui-19.jpg",
  "wheel imgs/2024-ICA-OP_William-Villalongo_tsui-21.jpg",
  "wheel imgs/2024-ICA-OP_Gala-Porras-Kim_tsui-16.jpg",
  "wheel imgs/2024-ICA-OP_Maya-Tihtiays-Attean_tsui-4.jpg",
  "wheel imgs/2024-ICA-OP_Morehshin-Allahyari_tsui-11.jpg",
  "wheel imgs/2024-ICA-OP_Samuel-Levi-Jones_tsui-12.jpg",
];

const squares = [];

for (let i = 0; i < numSquares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.style.backgroundImage = `url('${squareImages[i]}')`;

  squares.push(square);

  const angle = (2 * Math.PI * i) / numSquares;
  const x =
    (circleRadius - margin - squareSize / 2) * Math.cos(angle) + circleRadius;
  const y =
    (circleRadius - margin - squareSize / 2) * Math.sin(angle) + circleRadius;

  const rotationAngle = (angle * 180) / Math.PI;
  square.style.transform = `rotate(${rotationAngle}deg)`;

  square.style.left = `${x - squareSize / 2}px`;
  square.style.top = `${y - squareSize / 2}px`;

  circle.appendChild(square);
}

circle2.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    rotation += event.deltaY * 0.1;
    circle.style.transform = `rotate(${rotation}deg)`;

    const rightmostIndex = Math.round((rotation / -45) % numSquares); // this needs updating manually depending on num of squares
    const adjustedIndex = (rightmostIndex + numSquares) % numSquares;

    infoSquare.textContent = infoTexts[adjustedIndex];
  },
  { passive: false }
);
