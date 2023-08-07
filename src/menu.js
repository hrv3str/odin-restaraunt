export const createMenuContent = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const title = document.createElement('h1');
    title.textContent = 'Menu';
    menu.appendChild(title);

    const createHeader = (text) => {
        const header = document.createElement('h2');
        header.textContent = text;
        menu.appendChild(header);
    };

    createHeader('Beverages');

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

    const lemonadeTitle = 'Refreshing Lemonade';
    const lemonadeDesc = "Enjoy the delightful tang of freshly squeezed lemon juice harmoniously blended with just the right touch of sweetness. Our Refreshing Lemonade is the epitome of quenching your thirst on a sunny day. Whether you're looking to cool down or simply savor a classic favorite, this invigorating drink is sure to hit the spot.";
    const lemonadePrice = '2.99'

    createDishCard(lemonadeTitle, lemonadeDesc, lemonadePrice);

    const latteTitle = 'Iced Caramel Latte';
    const latteDesc = "Embark on a journey of rich flavors and smooth textures with our Iced Caramel Latte. Immerse yourself in the harmonious fusion of chilled espresso, luxuriously drizzled caramel syrup, and creamy milk, all masterfully served over a bed of ice. Each sip offers a delightful contrast of bold coffee and velvety sweetness that's perfect for those seeking a refreshing pick-me-up.";
    const lattePrice = '4.49'

    createDishCard(latteTitle, latteDesc, lattePrice);

    createHeader('Appetizers');

    const mozzarellaSticksTitle = 'Mouthwatering Mozzarella Sticks';
    const mozzarellaSticksDesc = "Indulge in the ultimate comfort food experience with our Mouthwatering Mozzarella Sticks. These delectable treats feature crispy, golden-brown exteriors that give way to warm, gooey centers of premium mozzarella cheese. Served alongside a classic marinara sauce for dipping, each bite offers a delightful contrast between the crunchy coating and the creamy, melted cheese. Whether you're enjoying them as an appetizer or sharing with friends, these mozzarella sticks are a taste of cheesy perfection.";
    const mozzarellaSticksPrice = '7.99'

    createDishCard(mozzarellaSticksTitle, mozzarellaSticksDesc, mozzarellaSticksPrice);

    const onionRingsTitle = 'Golden Onion Rings';
    const onionRingsDesc = "Satisfy your craving for crunch and flavor with our Golden Onion Rings. Each ring is expertly coated in a light and crispy batter, delivering a satisfying crunch with every bite. The onions inside are tender and sweet, providing the perfect contrast to the outer texture. Whether you choose to dip them in zesty ranch, tangy barbecue, or another favorite sauce, our onion rings are a versatile and delicious side that complements any meal. Share them with friends or savor them all to yourself!";
    const onionRingsPrice = '6.49';

    createDishCard(onionRingsTitle, onionRingsDesc, onionRingsPrice);

    createHeader('Salads');

    const caesarTitle = 'Crispy Chicken Caesar Salad';
    const caesarDesk = "Elevate your salad experience with our Crispy Chicken Caesar Salad. Immerse yourself in a symphony of flavors and textures as you savor each bite. Crisp and fresh romaine lettuce serves as the base, accompanied by tender, seasoned grilled chicken that adds a savory kick to every forkful. The croutons lend a satisfying crunch, while the generous sprinkle of parmesan cheese brings a rich, salty depth to the dish. All of these delightful elements come together harmoniously, united by the velvety embrace of our Caesar dressing. Embark on a culinary journey that balances vibrant greens, satisfying protein, and the classic allure of Caesar salad.";
    const caesarPrice = '9.99';

    createDishCard(caesarTitle, caesarDesk, caesarPrice);

    const quinoaSaladTitle = 'Mediterranean Quinoa Salad';
    const quinoaSaladDesk = "Experience the vibrant flavors of the Mediterranean with our enchanting Mediterranean Quinoa Salad. This wholesome creation marries the nutty goodness of quinoa with the juiciness of cherry tomatoes, the refreshing crunch of cucumbers, and the bold character of olives. The ensemble of ingredients is further elevated by the addition of crumbled feta cheese, which imparts a creamy tang that beautifully complements the other elements. Drizzled with balsamic vinaigrette, this salad is a symphony of tastes and textures that transports you to the shores of the Mediterranean, even as you enjoy it in the heart of our diner.";
    const quinoaSaladPrice = '8.49';

    createDishCard(quinoaSaladTitle, quinoaSaladDesk, quinoaSaladPrice);

    createHeader('Main Courses');

    const burgerTitle = 'Classic Burger';
    const burgerDesc = "Indulge in the timeless delight of our Classic Burger, a quintessential American favorite that captures the essence of comfort and satisfaction. Sink your teeth into a juicy beef patty, lovingly cooked to perfection to unleash a burst of savory flavors with every bite. The ensemble is thoughtfully crowned with crisp lettuce, ripe tomato slices, and a generous scattering of onion for that perfect crunch and pungency. As a final touch, you have the freedom to personalize your burger by choosing from an array of delectable cheeses that melt seamlessly over the patty, creating a harmonious symphony of textures and tastes. Accompanied by a side of golden and crispy fries, this is a burger experience that pays homage to tradition while embracing your individual palate.";
    const burgerPrice = '10.99';

    createDishCard(burgerTitle, burgerDesc, burgerPrice);

    const pizzaTitle = 'Deluxe Veggie Pizza';
    const pizzaDesc = "Embark on a culinary journey through layers of flavor with our Deluxe Veggie Pizza. This thin-crust masterpiece showcases a delightful arrangement of fresh vegetables that dance across the canvas of the pizza, offering a vivid and colorful spectrum of taste. Each slice is a medley of vibrant bell peppers, succulent mushrooms, zesty red onions, and more, all harmoniously mingling atop a bed of melted cheese. The delicate, crispy crust serves as the perfect canvas for this symphony of textures and tastes. Whether you're a devoted vegetarian or simply craving a burst of garden-fresh goodness, the Deluxe Veggie Pizza is a delightful culinary creation that brings together the joy of pizza and the healthful essence of vegetables."
    const pizzaPrice = '12.49';

    createDishCard(pizzaTitle, pizzaDesc, pizzaPrice);

    createHeader('Desserts');

    const brownieTitle = 'Decadent Chocolate Brownie';
    const brownieDesc = "ndulge in the rich flavors of our Decadent Chocolate Brownie. This warm and gooey delight is made with premium cocoa and topped with a generous scoop of velvety vanilla ice cream. As you take a bite, the fudgy texture and melty chocolate will envelop your taste buds in pure bliss. A final drizzle of chocolate sauce adds an extra layer of sweetness to this dessert masterpiece. The contrast between the warm brownie and the cold ice cream creates a symphony of flavors and temperatures that's truly satisfying. Perfect for sharing or savoring all on your own.";
    const browniePrice = '5.99'

    createDishCard(brownieTitle, brownieDesc, browniePrice);

    const cheseCakeTitle = 'Classic New York Cheesecake';
    const cheseCakeDesk = "Experience the timeless elegance of our Classic New York Cheesecake. This creamy masterpiece features a luscious cheesecake filling nestled atop a golden graham cracker crust. The silky smooth texture and rich flavor of the cheesecake are complemented by a delightful berry compote, adding a burst of fruity freshness to each forkful. Every bite is a harmonious combination of velvety richness and fruity tanginess. Whether you're celebrating a special occasion or simply treating yourself, our Classic New York Cheesecake is the epitome of dessert perfection.";
    const cheseCakePrice = '6.49';

    createDishCard(cheseCakeTitle, cheseCakeDesk, cheseCakePrice);

    return menu;
};