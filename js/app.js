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

phrases = [
    'Freedom of speech',
    'A piece of cake',
    'An arm and a leg', 
    'Love birds',
    'Elephant in the room'
];

function getRandomPhraseAsArray(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex].split('');
}
console.log(getRandomPhraseAsArray(phrases));


function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li);

        if (arr[i] !== '') {
            li.className = 'letter';
        }
    } 
} 

const phraseArray = getRandomPhraseAsArray(phrases); 
console.log(addPhraseToDisplay(phraseArray));


function checkLetter(button) {
    let phraseItems = ul.children;
    let correct = null;
    for (let i = 0; i < phraseItems.length; i++) {
        const letter = phraseItems[i].textContent.toLowerCase();
        if (button.textContent === letter) {
            phraseItems[i].classList.add('show');
            correct = true;
        }
    } return correct;
}

qwetry.addEventListener('click', (e) => {
if (e.target.tagName === 'BUTTON') {
    e.target.classList.add('chosen');
    e.target.setAttribute('disabled', true);

    const match = checkLetter(e.target);

    if (!match) {
        const tries = document.querySelectorAll('.tries');
        tries[missed].style.display = 'none';
        missed++;
    } if (e.target) {
        return checkWin(e.target);
    }
}

});




