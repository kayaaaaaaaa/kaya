const poems = [
  "Roses are red, violets are blue, being with you makes me feel like anything is possible, Yashika.",
  "I never knew that I could love someone as much as I love you, Yashika. You have truly changed my life for the better.",
  "When I'm with you, Kaustav, everything else fades away. You are the only one that matters to me.",
  "I am so grateful to have you in my life, Yashika. I don't know what I would do without you.",
  "You are the sun in my sky, Yashika. You brighten up my life and make everything better.",
  "I love you more every day, Kaustav. You are the missing piece that completes me."
];

const poemContainer = document.getElementById("poem-container");
const generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * poems.length);
  const randomPoem = poems[randomIndex];
  poemContainer.innerHTML = `<p>${randomPoem}</p>`;
});
