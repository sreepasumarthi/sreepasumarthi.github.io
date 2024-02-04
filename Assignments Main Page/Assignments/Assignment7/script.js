//Change Image
document.addEventListener('DOMContentLoaded', function () {
    const imageElement = document.getElementById('changeImg');

    imageElement.addEventListener('click', function () {
        if (imageElement.src === 'https://place-hold.it/200') {
            imageElement.src = 'https://place-hold.it/200x200/black/white';
        } else {
            imageElement.src = 'https://place-hold.it/200';
        }
    });
});

//Rotate Image
document.addEventListener('DOMContentLoaded', function () {
    const rotationSlider = document.getElementById('rotSlider');
    const rotatingImage = document.getElementById('rotImg');

    rotationSlider.addEventListener('input', function () {
        const rotationValue = this.value;
        rotatingImage.style.transform = `rotate(${rotationValue}deg)`;
    });
});



