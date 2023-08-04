export const createHomeContent = () => {
    const main = document.createElement('div');
    main.classList.add('main');

    const greetingMessage = document.createElement('div');
    greetingMessage.classList.add('greeting');

    const paraFirst = document.createElement('p');
    paraFirst.textContent = 'Welcome to';
    greetingMessage.appendChild(paraFirst);

    const spanTitle = document.createElement('span');
    spanTitle.textContent = 'Sunny Side Café Shenanigans'
    spanTitle.classList.add('title');
    greetingMessage.appendChild(spanTitle);

    const paraSecond = document.createElement('p');
    paraSecond.textContent = "Where every meal is served with a side of sunshine and a sprinkle of laughter. Come in, relax, and let the good times roll as we serve up delicious delights and heartwarming memories. From our kitchen to your table, it's all about the joy of sharing moments and savoring flavors. Embrace the sunny side of life with every bite and every sip. We're thrilled to have you here!";
    greetingMessage.appendChild(paraSecond);

    const greetingPhoto = document.createElement('img');
    greetingPhoto.alt = 'photo of dish';
    greetingPhoto.id = 'home-page-photo'
    greetingMessage.appendChild(greetingPhoto);

    const paraThird = document.createElement("p");
    paraThird.textContent = 'Visit us or order the delivery';
    greetingMessage.appendChild(paraThird);
    
    main.appendChild(greetingMessage);

    return main;
}