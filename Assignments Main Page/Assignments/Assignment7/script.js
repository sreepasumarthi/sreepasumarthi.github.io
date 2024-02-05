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

//Add stars in column
function addImage(event) {
    var rect = event.target.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    var img = document.createElement('img');
    img.src = 'images/star.png';
    img.alt = 'Added Image';
    img.style.position = 'absolute';
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    img.width = '50';
    img.height = '50';
    event.target.appendChild(img);
}


