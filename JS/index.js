var popupContact = document.querySelector(".contact__popup-overlay")
var popupButton = document.querySelector(".intro__button-link")
var popupCloseBtn = popupContact.querySelector('.button__close')
var firstInput;

popupButton.addEventListener('click', function(){
  popupContact.classList.add('open');
    firstInput = popupContact.querySelector('#name-input');
    firstInput.focus()
  document.body.style.overflow = 'hidden';
})

popupCloseBtn.addEventListener('click', function(){
    popupContact.classList.remove('open')
    document.body.style.overflow = 'initial';
})

window.addEventListener('keydown', function(evt){
    if (evt.keyCode === 27) {
        popupContact.classList.remove('open')
        document.body.style.overflow = 'initial';
    }
})
popupContact.addEventListener('click',function(evt){
    if(evt.target === popupContact){
    popupContact.classList.remove('open')
    popupButton.focus() 
    document.body.style.overflow = 'initial';
    }
    
})