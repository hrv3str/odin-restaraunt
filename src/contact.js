import mapImage from './map.png';
import phoneIcon from './phone.svg';
import mapIcon from './map-marker.svg';

export const createContactContent = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '(123) 456 78 90';
    const phoneImage = document.createElement('img');
    phoneImage.classList.add('icon');
    phoneImage.src = phoneIcon;
    phoneNumber.appendChild(phoneImage);

    contact.appendChild(phoneNumber);

    const location = document.createElement('p');
    location.textContent = '6767 Sunset Blvd, Los Angeles'
    const locationImage = document.createElement('img');
    locationImage.classList.add('icon');
    locationImage.src = mapIcon;
    location.appendChild(locationImage);

    contact.appendChild(location);

    const mapShot = document.createElement('img');
    mapShot.classList.add('map');
    mapShot.src = mapImage;

    contact.appendChild(mapShot);

    return contact;
};