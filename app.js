'use strict';

const elements = document.querySelectorAll('.acc-item__header');
let activeState = true;

const containClass = (el) => {
  if(el.parentElement.classList.contains('active')) return true
}
const addClass = (elem) => {
  elem.parentElement.classList.add('active') 
}
const removeClass = (elem) => {
  elem.parentElement.classList.remove('active') 
}
const removeClasses = (elem) => {
  elem.forEach(el => removeClass(el))
}

elements.forEach(element => element.addEventListener('click', () => {
  if (containClass(element)) {
    console.log(`if`)
    removeClass(element);
    activeState = true;
  } else if (activeState) {
      console.log(`else if`)
      addClass(element)
      activeState = false;
  } else {
      console.log(`else`)
      removeClasses(elements);
      setTimeout(() => {addClass(element)}, 200)
  }
}));