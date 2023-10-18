document.addEventListener('DOMContentLoaded', async () => {
    await loadModel();
});

let model;

async function loadModel() {
    model = await mobilenet.load();
}

function generateTattoo() {
    const style = document.getElementById('style').value;
    const size = document.getElementById('size').value;

    // Here, you would typically use user preferences to guide the model and generate an image.
    // This is a placeholder for demonstration purposes.

    const placeholderImageUrl = 'https://placekitten.com/300/300';

    const generatedTattooContainer = document.getElementById('generatedTattoo');
    generatedTattooContainer.innerHTML = '';

    const tattooImage = document.createElement('img');
    tattooImage.src = placeholderImageUrl;
    tattooImage.alt = 'Generated Tattoo';
    generatedTattooContainer.appendChild(tattooImage);
}
