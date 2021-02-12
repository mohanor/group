const square = document.getElementById('square');
const cancel = document.getElementById('cancel');
const div2 = document.getElementById('div2');

square.addEventListener('click', () => div2.style.width = '100%')
cancel.addEventListener('click', () => div2.style.width = '0px')