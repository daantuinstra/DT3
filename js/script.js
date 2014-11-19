var fieldset1 = document.querySelector('fieldset:nth-of-type(n +3)');
var fieldset2 = document.querySelector('fieldset:nth-of-type(n +4)');    
fieldset1.classList.add('invisible');
fieldset2.classList.add('invisible');

document.querySelector('input[type="radio"]').onclick = function() {
    fieldset1.classList.add('visible');
    fieldset2.classList.remove('visible');
}

document.querySelector('input[type="radio"]:last-of-type').onclick = function() {
    fieldset2.classList.add('visible');
    fieldset1.classList.remove('visible');
}

