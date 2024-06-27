// Ensure all buttons revert to their original styles when clicked
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.backgroundColor = '#333';
        button.style.color = 'white';
    });

    button.addEventListener('mouseup', () => {
        button.style.backgroundColor = '';
        button.style.color = '';
    });

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '';
        button.style.color = '';
    });
});

// Smooth scroll to the video section
function scrollToVideo() {
    document.getElementById('header-video').scrollIntoView({ behavior: 'smooth' });
}

// Navigate to the shop page when the "Shop" button is clicked
document.getElementById('shopButton').addEventListener('click', function() {
    window.location.href = 'shop.html';
});