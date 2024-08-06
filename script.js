document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const container = document.querySelector('.container');
    
    const characterNames = [
        "Naruto Uzumaki",
        "Sakura Haruno",
        "Sasuke Uchiha",
        "Goku",
        "Vegeta",
        "Luffy",
        "Zoro",
        "Nami",
        "Mikasa Ackerman",
        "Eren Yeager"
    ];

    button.addEventListener('click', async () => {
        try {
            // Fetch the anime image from Waifu.pics API
            const response = await fetch('https://api.waifu.pics/sfw/waifu'); // Endpoint for random anime images
            const data = await response.json();

            // Extract the image URL from the API response
            const imageUrl = data.url;
            // Pick a random character name from the list
            const name = characterNames[Math.floor(Math.random() * characterNames.length)];

            // Remove previous image and name if they exist
            const previousImage = document.querySelector('.anime-image');
            const previousName = document.querySelector('.anime-name');
            if (previousImage) previousImage.remove();
            if (previousName) previousName.remove();

            // Create and style the image element
            const image = document.createElement('img');
            image.src = imageUrl;
            image.alt = name;
            image.className = 'anime-image';
            image.style.border = '5px solid green';
            image.style.borderRadius = '50%';
            image.style.width = '200px';
            image.style.height = '200px';
            image.style.objectFit = 'cover';
            image.style.display = 'block';
            image.style.margin = '20px auto';

            // Create and style the name element
            const nameElement = document.createElement('div');
            nameElement.textContent = name;
            nameElement.className = 'anime-name';
            nameElement.style.backgroundColor = 'green';
            nameElement.style.color = 'white';
            nameElement.style.padding = '10px';
            nameElement.style.borderRadius = '5px';
            nameElement.style.marginTop = '10px';
            nameElement.style.display = 'inline-block';

            // Append the new elements to the container
            container.appendChild(image);
            container.appendChild(nameElement);

        } catch (error) {
            console.error('Error fetching anime data:', error);
        }
    });
});
