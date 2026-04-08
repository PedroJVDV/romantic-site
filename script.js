// script.js

// Functionality for heart rain animation
function startHeartRain() {
    const heartContainer = document.createElement('div');
    heartContainer.classList.add('heart-container');
    document.body.appendChild(heartContainer);

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heartContainer.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Editable text for romantic message
const editableText = document.getElementById('editableText');
editableText.addEventListener('input', function() {
    console.log('Current message:', editableText.innerText);
});

// Interactive button to generate romantic messages
const messageButton = document.getElementById('messageButton');
messageButton.addEventListener('click', function() {
    const messages = [
        'You are the love of my life!',
        'Our love is like the wind; I can’t see it, but I can feel it.',
        'I love you more than yesterday, but less than tomorrow.',
        'You are my favorite distraction.',
        'Together is a wonderful place to be.'
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    alert(messages[randomIndex]);
});

// Start heart rain when the page loads
window.onload = startHeartRain;