/*Toggle Menu*/
function toggleContent(contentId) {
    const contents = document.querySelectorAll(".content");
    contents.forEach(content => {
        content.style.display = "none";
    });
    const selectedContent = document.getElementById("content" + contentId);
    if (selectedContent) {
        selectedContent.style.display = "block";
    }
}

/*Exercise 1*/
const e1 = (e) => {
    let e1Image = document.getElementById("inpimg");

    if (e.key == 'b') {
        e1Image.src = "images/read.jpg";
    }
    else if (e.key == 'c') {
        e1Image.src = "images/clown.jpg";
    }
    else if (e.key == 'p') {
        e1Image.src = "images/birthday.jpg";
    }
    else if (e.key == 'r') {
        e1Image.src = "images/rain.jpg";
    }
    else if (e.key == 's') {
        e1Image.src = "images/shovel.jpg";
    }
    else if (e.key == 'w') {
        e1Image.src = "images/work.jpg";
    }
};

document.getElementById("input").addEventListener("keyup", e1);

/*Exercise 2*/

function changeImage() {
    const sliderValue = document.getElementById('sliderInput').value;
    const image = document.getElementById('sliderImage');
    image.src = `images/yoga${sliderValue}.jpg`;
}

/*Toggle Menu*/

function toggleMenu() {
    const menu = document.getElementById('menu');
    const togMenu = document.querySelector('.togmenu');

    menu.classList.toggle('active');
    togMenu.classList.toggle('active');
}

