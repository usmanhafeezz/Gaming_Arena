document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const prevSlide = document.getElementById('prevSlide');
    const nextSlide = document.getElementById('nextSlide');
    const genreCards = document.getElementById('genreCards');
    const dropdownToggle = document.getElementById('browse-sort_toggle');
    const dropdownMenu = document.getElementById('browse-sort_menu');
    const dropdownText = document.querySelector('.dropdown-text span');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const lowToHighCards1 = document.getElementById('LHCards1'); 
    const lowToHighCards2 = document.getElementById('LHCards2');
    const lowToHighCards3 = document.getElementById('LHCards3');
    const hightlowCards1 = document.getElementById('HLCards1');
    const hightlowCards2 = document.getElementById('HLCards2');
    const comingsoonCards1 = document.getElementById('CSCards1');
    const comingsoonCards2 = document.getElementById('CSCards2');

    const genres = [
        { name: 'Action Games', img: 'ACTION CATALOGUE/action-game-image.jpg', path: 'ACTION CATALOGUE/action.html' },
        
        { name: 'Adventure Games', img: 'ADVENTURE CATALOGUE/images-adventure.jpg', path: 'ADVENTURE CATALOGUE/adventure.html' },

        { name: 'Horror Games', img: 'HORROR CATALOGUE/images-horror.jpg', path: 'HORROR CATALOGUE/horror.html' },

        { name: 'Fighting Games', img: 'FIGHTING CATALOGUE/images-fighting.jpg', path: 'FIGHTING CATALOGUE/fighting.html' },

        { name: 'Multiplayer Games', img: 'MULTIPLAYER CATALOGUE/images-multiplayer.jpg', path: 'MULTIPLAYER CATALOGUE/multi.html' },

        { name: 'Open World Games', img: 'OPENWORLD CATALOGUE/images-openworld.jpg', path: 'OPENWORLD CATALOGUE/openworld.html' },

        { name: 'Cross Platform Games', img: 'CROSSPLATFORM CATALOGUE/images-crossplatform.jpg', path: 'CROSSPLATFORM CATALOGUE/cross.html' },

        { name: 'Racing Games', img: 'RACING CATALOGUE/images-racing.jpg', path: 'RACING CATALOGUE/racing.html' },

        { name: 'Sports Games', img: 'SPORTS CATALOGUE/images-sports.jpg', path: 'SPORTS CATALOGUE/sports.html' },

        { name: 'Single Player Games', img: 'SINGLE PLAYER CATALOGUE/images-singleplayer.jpg', path: 'SINGLE PLAYER CATALOGUE/singleplayer.html' },

        { name: 'Shooter Games', img: 'SHOOTING CATALOGUE/images-shooter.jpg', path: 'SHOOTING CATALOGUE/shooter.html' },

        { name: 'Simulation Games', img: 'SIMULATION CATALOGUE/images-simulation.jpg', path: 'SIMULATION CATALOGUE/simulation.html' }
    ];

    let currentGenreIndex = 0;

    function searchGames() {
        const query = searchInput.value.toLowerCase();
        console.log('Search query:', query);
    }

    searchInput.addEventListener('input', searchGames);
    searchButton.addEventListener('click', searchGames);

    function updateGenres() {
        genreCards.innerHTML = '';
        genres.slice(currentGenreIndex, currentGenreIndex + 4).forEach(genre => {
            const card = document.createElement('div');
            card.classList.add('genre-card');
            const image = document.createElement('img');
            image.src = genre.img;
            image.alt = genre.name;
            switch (genre.name) {
                case 'Action Games':
                case 'Adventure Games':
                case 'Horror Games':
                case 'Fighting Games':
                case 'Multiplayer Games':
                case 'Open World Games':
                case 'Cross Platform Games':
                case 'Racing Games':
                case 'Sports Games':
                case 'Single Player Games':
                case 'Shooter Games':
                case 'Simulation Games':
                    image.style.width = '234px';
                    break;
                default:
                    image.style.width = 'auto';
            }
            const title = document.createElement('p');
            title.textContent = genre.name;
            card.appendChild(image);
            card.appendChild(title);
            if (genre.path) {
                const link = document.createElement('a');
                link.href = genre.path;
                link.style.textDecoration = 'none';
                link.appendChild(card);
                genreCards.appendChild(link);
            } else {
                genreCards.appendChild(card);
            }
        });
    }

    prevSlide.addEventListener('click', () => {
        currentGenreIndex = (currentGenreIndex - 4 + genres.length) % genres.length;
        updateGenres();
    });

    nextSlide.addEventListener('click', () => {
        currentGenreIndex = (currentGenreIndex + 4) % genres.length;
        updateGenres();
    });

    updateGenres();

    // Dropdown menu functionality
    dropdownToggle.addEventListener('click', () => {
        const expanded = dropdownToggle.getAttribute('aria-expanded') === 'true' || false;
        dropdownToggle.setAttribute('aria-expanded', !expanded);
        dropdownMenu.style.display = expanded ? 'none' : 'block';
    });

    dropdownMenu.addEventListener('click', (event) => {
        if (event.target.tagName.toLowerCase() === 'li') {
            dropdownText.textContent = event.target.textContent;
            dropdownToggle.setAttribute('aria-expanded', 'false');
            dropdownMenu.style.display = 'none';

            // Call the function to update cards based on the selected option
            updateAdditionalCards(event.target.textContent);
        }
    });

    // Close the dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownToggle.setAttribute('aria-expanded', 'false');
            dropdownMenu.style.display = 'none';
        }
    });

    // Dark mode toggle functionality
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Function to update additional cards based on the selected option
    function updateAdditionalCards(option) {
        // Hide all additional cards initially
        document.querySelectorAll('.additional-card, .additional-card2, .additional-card3, .additional-card4, .lowtohigh-cards1, .lowtohigh-cards2, .lowtohigh-cards3, .hightolow-cards1, .hightolow-cards2 .comingsoon-cards1, .comingsoon-cards2' ).forEach(card => {
            card.style.display = 'none';
        });

        // Show additional cards based on the selected option
        if (option === 'New Release') {
            document.querySelectorAll('.additional-card, .additional-card2, .additional-card3, .additional-card4').forEach(card => {
                card.style.display = 'block';
            });
        } else if (option === 'Price: High to Low') {
            document.querySelectorAll('.hightolow-cards1, .hightolow-cards2').forEach(card => {
                card.style.display = 'flex';
            });
        } else if (option === 'Price: Low to High') {
            // Show the specific section for Price Low to High
            document.querySelectorAll('.lowtohigh-cards1, .lowtohigh-cards2, .lowtohigh-cards3').forEach(card => {
                card.style.display = 'flex';
            });
        } else if (option === 'Coming Soon') {
            document.querySelectorAll('.comingsoon-cards1, .comingsoon-cards2').forEach(card => {
                card.style.display = 'flex';
            });
        } else if (option === 'All') {
            document.querySelectorAll('.additional-card, .additional-card2, .additional-card3, .additional-card4, .lowToHighCards1, .lowtohigh-cards2, .lowtohigh-cards3, .hightolow-cards1, .hightolow-cards2, .comingsoon-cards1, .comingsoon-cards2').forEach(card => {
                card.style.display = 'flex';
            });
        }
    }
});