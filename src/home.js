export const createHomePage = (target) => {

    const createHeader = (() => {
        const header = document.createElement('div');
        header.classList.add('header');

        const hero = document.createElement('h1');
        hero.classList.add('hero');
        hero.textContent = 'Sunny Side Café Shenanigans';
        header.appendChild(hero);

        const createButton = (textContent) => {
        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = textContent;
        header.appendChild(button);
        return button;
        };

        const underLine = (target) => {
            target.classList.add('underline')
        };    

        const homeButton = createButton('Home');
        underLine(homeButton);
    
        const menuButton = createButton('Menu');
    
        const contactButton = createButton('Contact');

        return {
            header,
            menuButton,
            contactButton
            };
    })();

    const mainCreator = (() => {
        const main = document.createElement('div');
        main.classList.add('main');

        const greetingMessage = document.createElement('div');
        greetingMessage.classList.add('greeting');

        const paraFirst = document.createElement('p');
        paraFirst.textContent = 'First to';
        greetingMessage.appendChild(paraFirst);

        const spanTitle = document.createElement('span');
        spanTitle.textContent = 'Sunny Side Café Shenanigans'
        spanTitle.classList.add('title');
        greetingMessage.appendChild(spanTitle);

        const paraSecond = document.createElement('p');
        paraSecond.textContent = "Where every meal is served with a side of sunshine and a sprinkle of laughter. Come in, relax, and let the good times roll as we serve up delicious delights and heartwarming memories. From our kitchen to your table, it's all about the joy of sharing moments and savoring flavors. Embrace the sunny side of life with every bite and every sip. We're thrilled to have you here!";
        greetingMessage.appendChild(paraSecond);

        const greetingPhoto = document.createElement('img');
        greetingPhoto.src = './bar-photo.jpg';
        greetingPhoto.alt = 'photo of dish';
        greetingMessage.appendChild(greetingPhoto);

        const paraThird = document.createElement("p");
        paraThird.textContent = 'Visit us or order the delivery';
        greetingMessage.appendChild(paraThird);
        
        main.appendChild(greetingMessage);

        return main;
    })();

    const footerCreator = (() => {
        const footer = document.createElement('div');
        footer.classList.add('footer');

        const footerMessage = document.createElement('p');
        footerMessage.textContent = '2023 Coded by hrv3str';

        const gitLink = document.createElement('a');
        gitLink.href = 'https://github.com/hrv3str';
        gitLink.target = '_blank'

        const gitIcon = document.createElement('span');
        gitIcon.classList.add('git-logo');

        gitLink.appendChild(gitIcon);
        footerMessage.appendChild(gitLink);
        footer.appendChild(footerMessage);

        return footer;
    })();

    target.appendChild(header);
    target.appendChild(main);
    target.appendChild(footer);
    return {
        menuButton,
        contactButton
    }
}