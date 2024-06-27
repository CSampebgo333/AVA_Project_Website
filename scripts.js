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

function scrollToVideo() {
    document.getElementById('header-video').scrollIntoView({ behavior: 'smooth' });
}