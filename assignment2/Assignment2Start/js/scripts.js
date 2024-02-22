// Constants for query selectors
const customNumberInput = document.getElementById('customNumber');
const custColorButton = document.querySelector('.custColor');
const randColorButton = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const images = document.getElementById('images');
const myStudentId = document.getElementById('myStudentId');

// Function to change bg color from user input and add student id
function changeCustomColor() {
    const userInput = parseInt(customNumberInput.value);
    if (userInput >= 0 && userInput <= 100) {
        let color;
        if (userInput < 20) {
            color = 'green';
        } else if (userInput < 40) {
            color = 'blue';
        } else if (userInput < 60) {
            color = 'orange';
        } else if (userInput < 80) {
            color = 'purple';
        } else {
            color = 'yellow';
        }
        document.body.style.backgroundColor = color;
        myStudentId.textContent = "Your student ID here";
    } else {
        alert('Please enter a number between 0 and 100.');
    }
}

// Function to change bg color from random no.
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomNumber;
    changeCustomColor();
}

// Function to generate options for select list
function addList() {
    const imgNames = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; // Image names array
    for (let i = 0; i < imgNames.length; i++) {
        const option = document.createElement('option');
        option.value = imgNames[i];
        option.textContent = imgNames[i];
        imageSelect.appendChild(option);
    }
}

// Function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = `img/${selectedImage}`;
}

// Event listeners for on click event of buttons and select
custColorButton.addEventListener('click', changeCustomColor);
randColorButton.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('change', changeImage);

// Call addList function when the page loads
addList();
