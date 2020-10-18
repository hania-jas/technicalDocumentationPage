const menu = document.getElementById('menu');
const menuBtn = document.querySelector('.flaticon-menu');
const dropdowns = document.querySelector('.dropdownContent');

const addClassList = () => {
    menu.classList.add('show');
}

const hideMenu = (event) => {
    if (!event.target.matches('.flaticon-menu')) {
        menu.classList.remove('show');
    }
}

window.addEventListener('click', hideMenu);
menuBtn.addEventListener('click', addClassList);