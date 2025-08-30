export default function showHome() { 

    const content = document.querySelector('#content');

    const headingOne = document.createElement('h1');
    headingOne.textContent = "Coco's Coffee";
    headingOne.classList.add('home-h1');

    const marketingWrite = document.createElement('p');
    marketingWrite.textContent = `Welcome to Coco's Coffee, your cozy corner for 
                                    fresh brews and good vibes. From bold espressos to
                                    smooth iced blends, every cup is made to keep you going
                                    (and maybe smiling too). We make coffee the way
                                    you like it. Come sip, chill, and stay a while at Coco's.`;
    marketingWrite.classList.add('home-p');

    const timingHeadingTwo = document.createElement('h2');
    timingHeadingTwo.textContent = "Our Timings";
    timingHeadingTwo.classList.add('home-h2');

    const timingList = document.createElement('ul');
    timingList.classList.add('home-ul');
    timingList.appendChild(document.createElement('li')).textContent = "Monday - Friday: 7am - 7pm";
    timingList.appendChild(document.createElement('li')).textContent = "Saturday: 8am - 5pm";
    timingList.appendChild(document.createElement('li')).textContent = "Sunday: Closed";
    
    const locationHeadingTwo = document.createElement('h2');
    locationHeadingTwo.textContent = "Location";
    locationHeadingTwo.classList.add('home-h2');

    const locationInfo = document.createElement('p');
    locationInfo.textContent = "123 Brew St, Caffeine City, CA 90210";
    locationInfo.classList.add('home-p');
    
    content.append(
        headingOne,
        marketingWrite,
        timingHeadingTwo,
        timingList,
        locationHeadingTwo,
        locationInfo
    )
}