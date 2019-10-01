//AOS 
AOS.init({
    offset: 400,
    duration: 1000
});

const heads = document.querySelector('.heads');
const tails = document.querySelector('.tails');
const buttonFlip = document.querySelector('.btn-flip');
let headsScore = document.querySelector('.heads-rolls').textContent ='0';
let tailsScore = document.querySelector('.tails-rolls').textContent = '0';
let scoreContent = document.querySelector('.flip-times');
let gameTitle = document.querySelector('.title');
let blankCoin = document.querySelector('.coin-blank');

function flipCoin() {

    const newFlip = ((Math.floor(Math.random() * 2) === 0) ? heads : tails); 
    if(newFlip === heads) {
        console.log('heads');
        blankCoin.style.display = 'none';
        heads.classList.remove('hide');
        tails.classList.add('hide');
        scoreContent.textContent = `You flipped ${headsScore++ +1} Coinye and ${tailsScore} Dogecoin`;
                
    } else if(newFlip === tails){
        console.log('tails');
        blankCoin.style.display = 'none';
        tails.classList.remove('hide');
        heads.classList.add('hide');
        scoreContent.textContent = `You flipped ${headsScore} Coinye and ${tailsScore++ +1} Dogecoin`;

    }          

}

buttonFlip.addEventListener('click', flipCoin);




