const fortuneCookie = document.querySelector("#cookie1");
const resetCookie = document.querySelector("#cookie2"); 
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const fortunePhrases = [
  'Keep your eyes open for the small things—they hold great meaning.',
  'A gentle breeze will guide you to where you need to be.',
  'A moment of calm will lead to your next great idea.',
  'Someone is thinking of you with a smile.',
  'True love finds you when you least expect it.',
  'A wise choice today leads to an even wiser tomorrow.',
  'You will find joy in the simple things that often go unnoticed.',
  'There’s no rush—your destination is just a few steps away.',
  'Even the smallest steps you take now will lead to something bigger later.',
  'A fresh perspective will help you unlock a hidden door soon.',
  'The winds of change are subtle, but their direction is unmistakable.',
  'Stay curious—what you seek is closer than you think.',
  'Things are falling into place, but you may not see it yet.',
  'Trust that the pieces of your life are fitting together, even if it\'s in unexpected ways.',
  'You may soon realize that the answers were within you all along.',
  'Your smile will brighten someone\'s day today.',
  'The universe is preparing a special love for you.',
  'Your heart will soon be full of happiness.',
  'Even the darkest clouds will eventually pass.',
  'Better days are just around the corner.',
  'Your strength will carry you through this.',
  'Healing begins with small steps. You’re on the right path.',
  'The storm will pass, and the sun will shine again.',
  'You are stronger than you know.',
  'Even the smallest progress is still progress.'
];

let item = 0;

fortuneCookie.addEventListener('click', openCookie);
resetCookie.addEventListener('click', cookieReset); 

document.addEventListener('keypress', handleEnter);

function openCookie() {
  screenToggle();
  document.querySelector(".fortune p").innerText = fortunePhrases[item];
}

function cookieReset() {
  screenToggle();
  shuffleArray(fortunePhrases);
  item = Math.floor(Math.random() * fortunePhrases.length);
}

function screenToggle() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function handleEnter(event) {
  if (event.key == 'Enter' && screen2.classList.contains("hide")) {
    openCookie();
  } else if (event.key == 'Enter' && screen1.classList.contains("hide")) {
    cookieReset();
  }
}

// Fisher-Yates Shuffle Algorithm for randomizing array order
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}
