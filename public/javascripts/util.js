const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('nav--active');
}

hamburger.addEventListener('click', handleClick);

const delay = time => new Promise(resolve => setTimeout(resolve, time))

const writeAnimation = async () => {
  const elements = document.querySelectorAll('.write')
  for (const element of elements) {
    element.style.visibility = 'hidden';
  }

  const hiddens = document.querySelectorAll('.after-write')
  for (const hidden of hiddens) {
    hidden.style.opacity = '0';
  }

  for (const element of elements) {
    element.style.visibility = 'visible';
    const text = [...element.innerText]
  
    const square = document.createElement('span')
    square.classList.add('welcome__command-line')
    square.textContent = '|'
    square.id = 'square';

    element.innerHTML = ''
    for (const char of text) {
      const prevSquare = document.querySelector('#square') 
        
      if(prevSquare) prevSquare.remove(prevSquare)
      element.textContent += char
      
      element.append(square)
      await delay(100)
    }
  }

  for (const hidden of hiddens) {
    hidden.style.transition = 'opacity .5s ease-in'
    hidden.style.opacity = '1';
  }
}

writeAnimation();