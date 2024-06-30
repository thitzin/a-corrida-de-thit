const thit = document.querySelector('.thit')
const espinho = document.querySelector('.espinho')
const nuvem = document.querySelector('.nuvem')
const pontos = document.querySelector(".pontos--value")
const paradothit = document.querySelector('.paradothit')
const menu = document.querySelector('.menu')
const gameover = document.querySelector('.gameover')

const pulo = () => {
  if (+window.getComputedStyle(paradothit).width.replace('px', '') == 0) {
  thit.src = './images/thitpulando.png';
   thit.classList.add('pulo');
  
    setTimeout(() => {
      thit.classList.remove('pulo');
      thit.src = './images/thitcorrendo.gif'
    }, 500)
  }
}

  const jogar1 = () => {
    if (+window.getComputedStyle(paradothit).width.replace('px', '') != 0) {
  
      thit.style.width = '150px';
      paradothit.style.width = '0px';
      gameover.style.width = '0';
      menu.style.width = '0px';
      espinho.classList.add('jogar1');
      setTimeout(() => {
        menu.src = './images/fundogameover.png';
        menu.style.bottom = '-2px';
        menu.style.left = '0';
        paradothit.src = './images/thitgameover.png';
        paradothit.style.left = '310px';
        paradothit.style.bottom = `115px`;
      }, 100)
     }
    }

const loop = setInterval(() => {

  const espinhoPosition = espinho.offsetLeft;
  const thitPosition = +window.getComputedStyle(thit).bottom.replace('px', '');

  if (espinhoPosition <= 120 && thitPosition < 80 && espinhoPosition > 0) {

    menu.style.width = '999999999px';

    paradothit.style.width = '350px';

    gameover.style.width = '720px';

    espinho.classList.remove('jogar1');

    document.removeEventListener('keydown', jogar1);

  }
}, 10);

document.addEventListener('keydown', pulo);
document.addEventListener('click', pulo);
document.addEventListener('touchstart', pulo);
document.addEventListener('click', jogar1);
document.addEventListener('keydown', jogar1);
document.addEventListener('touchstart', jogar1);