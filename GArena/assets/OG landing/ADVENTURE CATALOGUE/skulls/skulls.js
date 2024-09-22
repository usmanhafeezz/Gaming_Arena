document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.querySelector('.buy-button');
    buyButton.addEventListener('click', () => {
        alert('Button clicked!');
        // Add more functionality here
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-content');
    const moreContent = document.querySelector('.more-content');

    toggleButton.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            toggleButton.textContent = 'Show Less';
        } else {
            moreContent.style.display = 'none';
            toggleButton.textContent = 'Show More';
        }
    });
});




