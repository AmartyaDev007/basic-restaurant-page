export default function showMenu() { 
    const content = document.querySelector('#content');

    const menuHeadingOne = document.createElement('h1');
    menuHeadingOne.textContent = "Coffee Menu";
    menuHeadingOne.classList.add('menu-h1');

    const coffeeHeaingTwo = document.createElement('h2');
    coffeeHeaingTwo.textContent = "Brewed Coffee";
    coffeeHeaingTwo.classList.add('menu-h2');

    const brewedList = document.createElement('ul');
    brewedList.classList.add('menu-ul');
    brewedList.appendChild(document.createElement('li')).textContent = "Espresso | $2.50 - Strong, concentrated coffee shot";
    brewedList.appendChild(document.createElement('li')).textContent = "Americano | $3.00 - Espresso with hot water";
    brewedList.appendChild(document.createElement('li')).textContent = "Cold Brew | $3.50 - Smooth, less acidic coffee steeped cold";
    brewedList.appendChild(document.createElement('li')).textContent = "Caffè Misto | $3.75 - Brewed coffee with steamed milk";

    const espressoHeadingTwo = document.createElement('h2');
    espressoHeadingTwo.textContent = "Espresso Beverages";
    espressoHeadingTwo.classList.add('menu-h2');

    const espressoList = document.createElement('ul');
    espressoList.classList.add('menu-ul');
    espressoList.appendChild(document.createElement('li')).textContent = "Latte | $4.50 - Espresso with steamed milk and light foam";
    espressoList.appendChild(document.createElement('li')).textContent = "Cappuccino | $4.25 - Espresso with thick milk foam";
    espressoList.appendChild(document.createElement('li')).textContent = "Mocha | $4.75 - Espresso with chocolate and milk";
    espressoList.appendChild(document.createElement('li')).textContent = "Flat White | $4.50 - Espresso with velvety steamed milk";
    espressoList.appendChild(document.createElement('li')).textContent = "Macchiato | $3.75 - Espresso “stained” with foam";

    const icedHeadingTwo = document.createElement('h2');
    icedHeadingTwo.textContent = "Iced Coffee";
    icedHeadingTwo.classList.add('menu-h2');

    const icedList = document.createElement('ul');
    icedList.classList.add('menu-ul');
    icedList.appendChild(document.createElement('li')).textContent = "Iced Americano | $3.25 - Espresso over ice with water";
    icedList.appendChild(document.createElement('li')).textContent = "Iced Latte | $4.50 - Espresso with cold milk and ice";
    icedList.appendChild(document.createElement('li')).textContent = "Frappuccino | $5.25 - Blended ice coffee drink";
    icedList.appendChild(document.createElement('li')).textContent = "Iced Mocha | $4.95 - Espresso, chocolate, milk, and ice";

    content.append(
        menuHeadingOne,
        coffeeHeaingTwo,
        brewedList,
        espressoHeadingTwo,
        espressoList,
        icedHeadingTwo,
        icedList
    );
}


