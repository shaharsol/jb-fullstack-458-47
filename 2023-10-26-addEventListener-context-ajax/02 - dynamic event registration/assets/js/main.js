const paintScreen = () => {
    document.body.style.backgroundColor = 'green';
}

const paintButton = document.getElementById('paintButton');
paintButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
})
paintButton.addEventListener('click', () => {
    console.log('red button clicked!');
})

