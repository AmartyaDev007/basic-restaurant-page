import './styles.css';
import showMenu from './code/menu.js';
import showContact from './code/contact.js';
import showHome from './code/home.js';


// initial page load
showHome();

function clearPage() { 
    const content = document.querySelector('#content');
    content.innerHTML = '';
}


const homeButton = document.querySelector('#home-btn');
homeButton.addEventListener('click', () => { 
    clearPage();
    showHome();
})

const menuButton = document.querySelector('#menu-btn');
menuButton.addEventListener('click', () => { 
    clearPage();
    showMenu();
})

const contactButton = document.querySelector("#contact-btn");
contactButton.addEventListener('click', () => { 
    clearPage();
    showContact();
})

