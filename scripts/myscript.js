/* global document, window, localStorage */
/* code for image changer */

var progImages = document.querySelector('img');

progImages.onclick = function () {
    'use strict';
    var myImages = progImages.getAttribute('src');
    if (myImages === 'images/home.jpg') {
        progImages.setAttribute('src', 'images/office.jpg');
    } else {
        progImages.setAttribute('src', 'images/home.jpg');
    }
};

// personalized welcome message code

var nameButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    'use strict';
    var myName = window.prompt('What is your name? ');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Hello! Have a nice day " + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello! Have a nice day ' + storedName;
}

nameButton.onclick = function () {
    'use strict';
    setUserName();
};