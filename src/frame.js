export const createFrame = () => {
    const headerCreator = () => {
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
        const buttonId = textContent.toLowerCase();
        button.id = buttonId;
        header.appendChild(button);
        return button;
        };  

        const homeButton = createButton('Home');
    
        const menuButton = createButton('Menu');
    
        const contactButton = createButton('Contact');

        return header;
    };

    const footerCreator = () => {
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
    };

    const header = headerCreator();
    const footer = footerCreator();

    return {
        header,
        footer
    };
}