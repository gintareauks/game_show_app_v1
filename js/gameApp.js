const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('a.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.getElementsByTagName('ul')[0];
let missed = 0;

// Clicking on the "Start Game" button hides the start-screen overlay
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

// A random phrase from an array is returned and split
const getRandomPhraseAsArray = arr => {
    const randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum].split('');
}

getRandomPhraseAsArray(phrases);

// Letters of a string are added to the display
const addPhraseToDisplay = arr => {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li);

        if (arr[i] !== ' ') {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }   
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// Checking if the letter is in the phrase
const checkLetter = button => {
    let phraseItems = ul.children;
    let correct = null;
    for (let i = 0; phraseItems.length; i++) {
        const letter = phraseItems[i].textContent.toLowerCase();
        if (button.textContent === letter) {
            phraseItems[i].classList.add('show');
            correct = true;
        }
    } return correct;
}

//listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', (e) => {
    const buttonClicked = event.target;
    if (buttonClicked.tagName === 'BUTTON') {
        buttonClicked.classList.add('chosen');
        buttonClicked.disabled = 'true';

        const letterFound = checkLetter(buttonClicked);
    }
});

