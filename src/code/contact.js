export default function showContact() { 
    const content = document.querySelector('#content');

    const headingOne = document.createElement('h1');
    headingOne.textContent = "Contact Us!";
    headingOne.classList.add('contact-h1');


    const managementHeadingTwo = document.createElement('h2');
    managementHeadingTwo.textContent = "Coco's Management";
    managementHeadingTwo.classList.add('contact-h2');

    const managementParagraph = document.createElement('p');
    managementParagraph.textContent = "For any business related queries, contact us at:";
    managementParagraph.classList.add('contact-p');

    const managementList = document.createElement('ul');
    managementList.classList.add('contact-ul');
    managementList.appendChild(document.createElement('li')).textContent = "Phone: 123-456-7890";
    managementList.appendChild(document.createElement('li')).textContent = "Email: realcoco@xyz.com";


    const suggestionsHeadingTwo = document.createElement('h2');
    suggestionsHeadingTwo.textContent = "Suggestions & Feedback";
    suggestionsHeadingTwo.classList.add('contact-h2');

    const suggestionsParagraph = document.createElement('p');
    suggestionsParagraph.textContent = "For any suggestions or feedback, contact us:";
    suggestionsParagraph.classList.add('contact-p');

    const suggestionsList = document.createElement('ul');
    suggestionsList.classList.add('contact-ul');
    suggestionsList.appendChild(document.createElement('li')).textContent = "Phone: 123-456-7890";
    suggestionsList.appendChild(document.createElement('li')).textContent = "Email: realcoco@xyz.com";

    
    const complaintsHeadingTwo = document.createElement('h2');
    complaintsHeadingTwo.textContent = "Complaints";
    complaintsHeadingTwo.classList.add('contact-h2');

    const complaintsParagraph = document.createElement('p');
    complaintsParagraph.textContent = "Contact us for any inconvenience or complaints.";
    complaintsParagraph.classList.add('contact-p');

    const complaintsList = document.createElement('ul');
    complaintsList.classList.add('contact-ul');
    complaintsList.appendChild(document.createElement('li')).textContent = "Phone: 123-456-7890";
    complaintsList.appendChild(document.createElement('li')).textContent = "Email: realcoco@xyz.com";

    content.append(
        headingOne,
        managementHeadingTwo,
        managementParagraph,
        managementList,
        suggestionsHeadingTwo,
        suggestionsParagraph,
        suggestionsList,
        complaintsHeadingTwo,
        complaintsParagraph,
        complaintsList
    )
}
