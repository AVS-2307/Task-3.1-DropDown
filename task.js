const dropDownValue = document.querySelector('.dropdown__value');
const dropDownList = document.querySelector('.dropdown__list');
const dropDownItems = Array.from(document.querySelectorAll('.dropdown__link'));

dropDownValue.addEventListener('click', function() {
    dropDownList.classList.add('dropdown__list_active');
    
});

function chooseItem() {
    dropDownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            dropDownValue.textContent = item.textContent;
            dropDownList.classList.remove('dropdown__list_active');
            event.preventDefault();
            });       
    });
};

chooseItem();
