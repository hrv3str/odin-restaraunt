export const createMenuContent = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const title = document.createElement('h1');
    title.textContent = 'Menu';
    menu.appendChild(title);

    const subTitleBeverage = document.createElement('h2');
    subTitleBeverage.textContent = 'Beverages:';
    menu.appendChild(subTitleBeverage);

    const createDishCard = (name, description, dishPrice) => {
        const techName = name.replace(/\s+/g, '-').toLowerCase();

        const container = document.createElement('div');
        container.classList.add('dish-card');

        const title = document.createElement('h3');
        title.textContent = name;
        container.appendChild(title);

        const photo = document.createElement('img');
        photo.alt = name.toLowerCase();
        photo.id = techName + "-photo"
        container.appendChild(photo);

        const text = document.createElement('p');
        text.textContent = description;
        container.appendChild(text);

        const price = document.createElement('span');
        price.classList.add('price');
        price.textContent = dishPrice;
        container.appendChild(price);

        menu.appendChild(container);
    }

    const smoothieTitle = 'Mint Smoothie';
    const smoothieDesc = 'Experience a refreshing escape with our Cool Mint Dream Smoothie. This invigorating blend combines fresh mint, creamy yogurt, ripe bananas, and a touch of honey for natural sweetness. Sip your way to rejuvenation and savor the minty delight that uplifts your day.';
    const smooothiePrice = '4';

    createDishCard(smoothieTitle, smoothieDesc, smooothiePrice);

    const raspberryTeaTitle = 'Raspberry Tea';
    const raspberryTeaDesc = 'Delight in the vibrant flavors of our Raspberry Bliss Tea. Experience the natural sweetness and tanginess of ripe raspberries infused into every sip. A refreshing and invigorating choice that captures the essence of summer in a cup. Enjoy a moment of pure fruity indulgence.';
    const raspberryTeaPrice = '2.50';

    createDishCard(raspberryTeaTitle, raspberryTeaDesc, raspberryTeaPrice);

    return menu;
};