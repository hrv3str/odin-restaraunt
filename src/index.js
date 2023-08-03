import './styles.css';
import { createHomePage } from './home.js';
import Image from './bar-photo.jpg';

const content = () => {
    const content = document.createElement('div');
    content.id = 'content';

    const sections = createHomePage();

    content.appendChild(sections.header);
    content.appendChild(sections.main);
    content.appendChild(sections.footer);

    console.log(content);

    return content;
};

    document.body.appendChild(content());

const homePageImage = document.getElementById('home-page-photo');
homePageImage.src = Image;

