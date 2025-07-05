const startButton = document.getElementById('startButton');
const slideshow = document.getElementById('slideshow');
const homeButton = document.getElementById('homeButton');
const storyboardImage = document.getElementById('storyboard-image');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const mainMenu = document.getElementById('main-menu');
const selectStory = document.getElementById('select-story');
const startSnowWhiteButton = document.getElementById('startSnowWhiteButton');
const dialogueText = document.getElementById('dialogue-text');

// Images for the storyboard
const scenes = [
  'images/scene1.jpg',
  'images/scene2.jpg',
  'images/scene3.jpg',
  'images/scene4.jpg',
  'images/scene5.jpg',
  'images/scene6.jpg',
  'images/scene7.jpg',
  'images/scene8.jpg',
  'images/scene9.jpg',
  'images/scene10.jpg',
  'images/scene11.jpg',
  'images/scene12.jpg',
  'images/scene13.jpg',
  'images/scene14.jpg',
  'images/scene15.jpg',
  'images/scene16.jpg',
  'images/scene17.jpg',
  'images/scene18.jpg',
  'images/scene19.jpg',
  'images/scene20.jpg',
  'images/scene21.jpg',
  'images/scene22.jpg',
  'images/scene23.jpg',
  'images/scene24.jpg',
  'images/scene25.jpg',
  'images/scene26.jpg',
  'images/scene27.jpg',
  'images/scene28.jpg',
  'images/scene29.jpg',
  'images/scene30.jpg',
  'images/scene31.jpg',
  'images/scene32.jpg',
  'images/scene33.jpg',
  'images/scene34.jpg'
];

// Dialogues matching each scene
const dialogues = [
  "Once upon a time, there was a poor widow who lived in a lonely cottage.",
  "In front of the cottage stood two rose-trees: one with white roses, and the other with red.",
  "She had two daughters, who resembled the rose-trees, and were called Snow White and Rose Red.",
  "They were good and cheerful, Snow White being more quiet and gentle, while Rose Red loved to run around in the meadows.",
  "The two children often roamed through the forest, collecting berries and making friends with the animals."
];

let currentSceneIndex = 0;

// Show the main menu initially
mainMenu.style.display = 'block';
selectStory.style.display = 'none';
slideshow.style.display = 'none';

// Show the select story slide when the "Click Here to Begin" button is clicked
startButton.addEventListener('click', () => {
  mainMenu.style.display = 'none';
  selectStory.style.display = 'block';
});

// Start the story when the "Snow White and Rose Red" button is clicked
startSnowWhiteButton.addEventListener('click', () => {
  selectStory.style.display = 'none';
  slideshow.style.display = 'block';
  showScene(currentSceneIndex);
  toggleButtonsVisibility();
});

// Show the current scene image
function showScene(index) {
  storyboardImage.style.opacity = 0;
  setTimeout(() => {
    storyboardImage.src = scenes[index];
    storyboardImage.style.transition = 'opacity 1s ease-in';
    storyboardImage.style.opacity = 1;
  }, 500);
  toggleButtonsVisibility();
}

// Show or hide the "previous" and "next" buttons based on the current scene
function toggleButtonsVisibility() {
  if (currentSceneIndex === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }

  if (currentSceneIndex === scenes.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }
}

// Go to the next scene
nextButton.addEventListener('click', () => {
  if (currentSceneIndex < scenes.length - 1) {
    currentSceneIndex++;
    showScene(currentSceneIndex);
  }
});

// Go to the previous scene
prevButton.addEventListener('click', () => {
  if (currentSceneIndex > 0) {
    currentSceneIndex--;
    showScene(currentSceneIndex);
  }
});

// Home button functionality
homeButton.addEventListener('click', () => {
  slideshow.style.display = 'none';
  selectStory.style.display = 'none';
  mainMenu.style.display = 'block';
  currentSceneIndex = 0; // Reset the scene index if needed
  toggleButtonsVisibility();
});
