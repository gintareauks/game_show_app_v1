const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('a.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.getElementsByTagName('ul')[0];

// Keep track of the number of guesses the player has missed (5 total tries)
let missed = 0;

// Clicking on the "Start Game" button hides the start-screen overlay
startButton.addEventListener('click', (e) => {
    overlay.style.display = 'none';
}); 

phrases = [
    'freedom of speech',
    'a piece of cake',
    'an arm and a leg', 
    'love birds',
    'elephant in the room'
];

// A random phrase from an array is returned
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
    const letters = document.querySelectorAll('.letter');
    let match = null; 
    for (let i = 0; i < letters.length; i++) {
        if (button.textContent === letters[i].textContent) {
            letters[i].classList.add('show');
            match = true;
        }
    } return match;
}

// Listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', (e) => {
    const buttonClicked = event.target;
    if (buttonClicked.tagName === 'BUTTON') {
        buttonClicked.classList.add('chosen');
        buttonClicked.disabled = 'true';

        const letterFound = checkLetter(buttonClicked);
        if (letterFound == null) {
            let hearts = document.querySelectorAll('.tries img');
            hearts[missed].src = 'images/lostHeart.png';
            missed++;
        }
    } checkWin()
});

// Check if the game has been won or lost
function checkWin() {
    let liLetter = document.querySelectorAll('.letter');
    let liShow = document.querySelectorAll('.show');
    if (liLetter.length === liShow.length) {
        overlay.className = 'win';
        document.querySelector('h2').innerHTML = 'Congratulations ! <br> YOU WON !';
        overlay.style.display = 'flex';
        startButton.textContent = 'Start Again'
    } else if (missed > 4) {
        overlay.className = 'lose';
        document.querySelector('h2').innerHTML = 'SORRY, YOU LOST';
        overlay.style.display = 'flex';
        startButton.textContent = 'Start Again';
    } 
    startButton.addEventListener('click', (e) => {
        reset();
    });
}

// Restart the game from the beginning 
const reset = () => {;
    missed = 0;
    let newPhrase = getRandomPhraseAsArray(phrases);
    let buttons = document.querySelectorAll('button');
    
    if (startButton.textContent === 'Start Again') {
        ul.innerHTML = '';
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].className = '';
            buttons[i].removeAttribute('disabled');
        };
        let hearts = document.querySelectorAll('.tries img');
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].src = 'images/liveHeart.png';
        }
        addPhraseToDisplay(newPhrase);
    }
}




