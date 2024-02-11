function toggleContent(id) {
  var content1 = document.getElementById('content1');
  var content2 = document.getElementById('content2');

  if (id === '1' || id === 1) {
    content1.classList.add('active');
    content2.classList.remove('active');
  } else if (id === '2' || id === 2) {
    content1.classList.remove('active');
    content2.classList.add('active');
  }
}


function changeImage() {
  var sliderValue = document.getElementById('sliderInput').value;
  var image = document.getElementById('sliderImage');
  image.src = 'images/yoga' + sliderValue + '.jpg';
}

