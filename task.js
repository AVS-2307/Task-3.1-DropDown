const dropDownValue = document.querySelector('.dropdown__value');
const dropDownList = document.querySelector('.dropdown__list');

dropDownValue.addEventListener('click', function() {
    dropDownList.classList.add('dropdown__list_active');    
});

function chooseItem() { 
    //ловим клик на всплытии, не на dropdown__link, а на родителе    
    dropDownList.addEventListener('click', function(event) {            
            dropDownValue.textContent = event.target.textContent; //присваиваем название по клику на target;
            dropDownList.classList.remove('dropdown__list_active');
            event.preventDefault();
            });       

};

chooseItem();
