import './styles.css';
import { createHomeContent } from './home.js';
import { createFrame } from './frame.js';
import Image from './bar-photo.jpg';

const underLine = (target) => {
    target.classList.add('underline')
};  

const content = () => {
    const content = document.getElementById('content');

    const sections = createFrame();

    const mainContent = document.createElement('div');
    mainContent.id = 'main-content';

    content.appendChild(sections.header);
    content.appendChild(mainContent);
    content.appendChild(sections.footer);

    console.log(content);

    return content;
};

document.body.appendChild(content());

const mainContent = document.getElementById('main-content');

const homePageContent = createHomeContent();
mainContent.appendChild(homePageContent);

const homeButton = document.getElementById('home');
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById('contact');

underLine(homeButton);

const homePageImage = document.getElementById('home-page-photo');
homePageImage.src = Image;

