const openPopUp = document.getElementById('open_pop_up');
const closePopUP = document.getElementById('pop_up_close'); 
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e) {
    e.preventDefault()
    popUp.classList.add('active');
})

closePopUP.addEventListener('click', () => {
    popUp.classList.remove('active');
})
