const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('a.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.getElementsByTagName('ul')[0];

let missed = 0;
let phrases = document.createElement('phrases');

startButton.addEventListener('click', (event) => {
    overlay.style.display = 'none';
});

phrases = ['family', 'flower', 'love', 'sunset', 'snowman' ];

function getRandomPhraseAsArray(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return phrases[randomIndex].split('');
}
console.log(getRandomPhraseAsArray(phrases));


function addPhraseToDisplay(arr) {
    let li = document.createElement('li');
    let listItem = '';
    for (let i = 0; i < arr.length; i++) {
    listItem = arr[i];
    } 
} 
    
const phraseArray = getRandomPhraseAsArray(phrases);
console.log(addPhraseToDisplay(phraseArray));




