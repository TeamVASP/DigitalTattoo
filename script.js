function showOptions(label) {
    document.getElementById('options-container').classList.remove('hidden');
    // Additional logic to handle label selection
}

function showPreferences(option) {
    document.getElementById('preferences-container').classList.remove('hidden');
    // Additional logic to handle option selection
}

function generateTattoo() {
    const userPreference = document.getElementById('preference').value;

    // Replace the following placeholder URLs with real tattoo image URLs based on the user's preference
    const tattooImageUrls = {
        'Sporty': 'https://media.istockphoto.com/id/1285647587/vector/vintage-monochrome-gambling-emblems.jpg?s=612x612&w=0&k=20&c=M6Fvui01ROhEp_qhbKyvIsBXh6JPmYiTet8qS9oKQuE=',
        'Religious': 'https://stylesatlife.com/wp-content/uploads/2022/07/Om-Tattoo-Designs-1.jpg',
        'Abstract': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9cEqXBdB37sMdzU_cFcdzAfQrZ2LGIozBbQ&usqp=CAU'
    };

    // Use the user's preference to fetch the corresponding tattoo image URL
    const selectedImageUrl = tattooImageUrls[userPreference];

    // Display the generated tattoo image
    displayGeneratedTattoo(selectedImageUrl);
}

function showWiproDetails() {
    // Logic to show Wipro details
    alert("Your access areas are Wipro Sarjapur office and Wipro EC office.");
}

function scanTattoo() {
    // Logic to simulate scanning the tattoo
    const healthResultsContainer = document.getElementById('health-results');
    healthResultsContainer.classList.remove('hidden');
}

function displayGeneratedTattoo(imageUrl) {
    const generatedTattooContainer = document.getElementById('generatedTattoo');
    generatedTattooContainer.innerHTML = '';

    const tattooImage = document.createElement('img');
    tattooImage.src = imageUrl;
    tattooImage.alt = 'Generated Tattoo';
    generatedTattooContainer.appendChild(tattooImage);
}
