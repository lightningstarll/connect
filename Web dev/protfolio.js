const logo = document.querySelector('.moving-logo');

setInterval(() => {
    const randomX = Math.floor(Math.random() * 20) - 10; // Move between -10 and 10px on X-axis
    const randomY = Math.floor(Math.random() * 20) - 10; // Move between -10 and 10px on Y-axis
    logo.style.transform = `translate(${randomX}px, ${randomY}px)`;
}, 3000); // Move every 3 seconds
