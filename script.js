const button = document.getElementById('myButton');
const image = document.getElementById('myImage');

button.addEventListener('click', () => {
    button.style.display = 'none';
    image.style.display = 'block';
});
