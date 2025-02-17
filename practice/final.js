let currentNumber = Math.floor(Math.random() * 13) + 1;
let correctGuesses = 0;

document.getElementById('current-number').textContent = currentNumber;

document.getElementById('high-button').onclick = () => makeGuess('high');
document.getElementById('low-button').onclick = () => makeGuess('low');
document.getElementById('restart-button').onclick = restartGame;



function makeGuess(guess) {
    let nextNumber = Math.floor(Math.random() * 13) + 1;

    while (nextNumber === currentNumber) {
        nextNumber = Math.floor(Math.random() * 13) + 1;
    }

    if ((guess === 'high' && nextNumber > currentNumber) || (guess === 'low' && nextNumber < currentNumber)) {
        correctGuesses++;
        document.getElementById('message').textContent = '正解! 現在の連続正解数: ' + correctGuesses;
    } else {
        document.getElementById('message').textContent = '不正解! 正解の数は ' + nextNumber + ' でした。ゲームオーバー! 最終連続正解数は ' + correctGuesses + "回！";
        changeBackgroundImage('../fot/IMG_7255.jpg'); 
        endGame();
    }

    currentNumber = nextNumber;
    document.getElementById('current-number').textContent = currentNumber;
}

function endGame() {
    document.getElementById('high-button').style.display = 'none';
    document.getElementById('low-button').style.display = 'none';
    document.getElementById('restart-button').style.display = 'block';
}

function restartGame() {
    correctGuesses = 0;
    currentNumber = Math.floor(Math.random() * 13) + 1;
    document.getElementById('current-number').textContent = currentNumber;
    document.getElementById('message').textContent = '';
    document.getElementById('high-button').style.display = 'inline';
    document.getElementById('low-button').style.display = 'inline';
    document.getElementById('restart-button').style.display = 'none';
    changeBackgroundImage('../fot/B51AEB76-8532-4760-93A4-642C9DFDEEE5.jpg'); 
}

function changeBackgroundImage(imagePath) {
    document.body.style.backgroundImage = `url(${imagePath})`;
}
