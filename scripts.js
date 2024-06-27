// Add any necessary JavaScript for dynamic behaviors here

// Example: Button click interaction
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = '#333';
        button.style.color = 'white';
    });
});