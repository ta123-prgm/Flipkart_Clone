// Image sets for each color (replace with real image URLs)
const imageSets = {
    black: {
        main: "https://via.placeholder.com/500x400?text=Sneakers+Black+Main",
        thumbnails: [
            "https://via.placeholder.com/150x120?text=Black+Side",
            "https://via.placeholder.com/150x120?text=Black+Bottom",
            "https://via.placeholder.com/150x120?text=Black+Inside"
        ]
    },
    white: {
        main: "https://via.placeholder.com/500x400?text=Sneakers+White+Main",
        thumbnails: [
            "https://via.placeholder.com/150x120?text=White+Side",
            "https://via.placeholder.com/150x120?text=White+Bottom",
            "https://via.placeholder.com/150x120?text=White+Inside"
        ]
    },
    blue: {
        main: "https://via.placeholder.com/500x400?text=Sneakers+Blue+Main",
        thumbnails: [
            "https://via.placeholder.com/150x120?text=Blue+Side",
            "https://via.placeholder.com/150x120?text=Blue+Bottom",
            "https://via.placeholder.com/150x120?text=Blue+Inside"
        ]
    }
};

// Get elements
const colorButtons = document.querySelectorAll('.color-btn');
const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumbnail-images img');

// Function to switch images
function switchImages(color) {
    // Update main image
    mainImage.src = imageSets[color].main;
    mainImage.alt = `Classic Sneakers - ${color.charAt(0).toUpperCase() + color.slice(1)}`;

    // Update thumbnails
    thumbnails.forEach((thumb, index) => {
        thumb.src = imageSets[color].thumbnails[index];
        thumb.alt = `${color.charAt(0).toUpperCase() + color.slice(1)} View ${index + 1}`;
    });
}

// Add event listeners to color buttons
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        colorButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Switch images
        const color = button.getAttribute('data-color');
        switchImages(color);
    });
});

// Initialize with black (default)
switchImages('black');