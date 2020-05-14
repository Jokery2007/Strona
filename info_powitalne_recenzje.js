alert('Dzięki , że tu wpadłeś. Kliknij przycisk poniżej by czytać moje recenzje!');
const button = document.querySelector('.hero__button--js');
const head = querySelector('.head_title--js');
function click(){
    head.innerHTML = 'Przycisk Kusi!';
    console.log('click')
}
button.addEventListener('click' , click);