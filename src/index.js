import './styles.css';
import { createHomeContent } from './home.js';
import { createFrame } from './frame.js';
import Image from './bar-photo.jpg'; 

const frame = (() => {
    const underLine = (target) => {
        target.classList.add('underline')
    }; 

    const sections = createFrame();

    const main = document.createElement('div');
    main.classList.add('main');
    main.id = 'main'

    content.appendChild(sections.header);
    content.appendChild(main);
    content.appendChild(sections.footer);

    return {
        underLine
    }
})();


const main = document.getElementById('main');

const homePageContent = createHomeContent();
main.appendChild(homePageContent);

const homeButton = document.getElementById('home');
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById('contact');

frame.underLine(homeButton);

const homePageImage = document.getElementById('home-page-photo');
homePageImage.src = Image;

