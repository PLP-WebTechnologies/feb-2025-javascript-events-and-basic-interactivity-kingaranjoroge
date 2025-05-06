// Event Handling
document.getElementById('clickButton').addEventListener('click', function() {
    alert('Button clicked!');
});

document.getElementById('hoverBox').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#007bff';
    this.style.color = 'white';
});

document.getElementById('hoverBox').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#e9ecef';
    this.style.color = 'black';
});

document.getElementById('keypressInput').addEventListener('keypress', function(event) {
    console.log('Key pressed:', event.key);
});

document.getElementById('doubleClickBox').addEventListener('dblclick', function() {
    alert('Secret action triggered!');
});

// Interactive Elements
document.getElementById('colorButton').addEventListener('click', function() {
    this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

// Image Gallery
const images = document.querySelectorAll('#imageGallery img');
let currentIndex = 0;

function showImage(index) {
    images.forEach(img => img.style.display = 'none');
    images[index].style.display = 'block';
}

showImage(currentIndex);

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 3000);

// Tabs
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Form Validation
document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!name) {
        alert('Name is required!');
        return;
    }

    if (!email) {
        alert('Email is required!');
        return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert('Invalid email format!');
        return;
    }

    if (!password || password.length < 8) {
        alert('Password must be at least 8 characters!');
        return;
    }

    alert('Form submitted successfully!');
}); 