// Add event listeners to all buttons for mouse events
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mousedown', () => {
        // Change button color on mouse down
        button.style.backgroundColor = '#333';
        button.style.color = 'white';
    });

    button.addEventListener('mouseup', () => {
        // Revert button color on mouse up
        button.style.backgroundColor = '';
        button.style.color = '';
    });

    button.addEventListener('mouseleave', () => {
        // Revert button color when mouse leaves the button
        button.style.backgroundColor = '';
        button.style.color = '';
    });
});

// Function to scroll to the header video section
function scrollToVideo() {
    document.getElementById('header-video').scrollIntoView({ behavior: 'smooth' });
}

// Add event listener to the shop button to navigate to the shop page
document.getElementById('shopButton').addEventListener('click', function() {
    window.location.href = 'shop.html';
});