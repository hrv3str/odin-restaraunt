import './styles.css';
import { createHomeContent } from './home.js';
import { createFrame } from './frame.js';
import { createMenuContent } from './menu.js'

const frame = (() => {
    const underLine = (target) => {
        target.classList.add('underline')
    };

    const deUnderLine = (target) => {
        target.classList.remove('underline');
    }

    const sections = createFrame();

    const main = document.createElement('div');
    main.classList.add('main');
    main.id = 'main'

    content.appendChild(sections.header);
    content.appendChild(main);
    content.appendChild(sections.footer);

    return {
        underLine,
        deUnderLine
    }
})();


const main = document.getElementById('main');
const homePageContent = createHomeContent();
const menuPageContent = createMenuContent();

main.appendChild(homePageContent);

const homeButton = document.getElementById('home');
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById('contact');

const handleButtons = (event) => {
    const button = event.target;

    const buttons = document.querySelectorAll('button');
    const buttonArray = Array.from(buttons);

    (() => { // clears 'main' div
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
    })();

    (() => { // clears buttons from underlines and event listeners
        buttonArray.forEach(button => {
            frame.deUnderLine(button);
            button.removeEventListener('click', handleButtons)
        });
    })();

    switch (button.id) {
        case 'home':
            main.appendChild(homePageContent);
            frame.underLine(homeButton);
            break;
        case 'menu':
            main.appendChild(menuPageContent);
            frame.underLine(menuButton);
            break;
        case 'contact':
            main.appendChild(contactPageContent);
            frame.underLine(contactButton);
            break;
    }

    listenButtons();
};

const listenButtons = () => {
    const buttons = document.querySelectorAll('button');
    const buttonArray = Array.from(buttons);

    const activeButtons = buttonArray.filter(button => !button.classList.contains('underline'));

    activeButtons.forEach(button => {
        button.addEventListener('click', handleButtons);
    });
}

frame.underLine(homeButton);
listenButtons();

