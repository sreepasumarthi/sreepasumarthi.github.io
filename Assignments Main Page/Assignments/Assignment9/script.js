/*Navigation*/
document.addEventListener("DOMContentLoaded", function () {
    const exonelink = document.getElementById('exonelink');
    const extwolink = document.getElementById('extwolink');
    const exonecont = document.getElementById('exonecont');
    const extwocont = document.getElementById('extwocont');

    exonelink.addEventListener('click', function (event) {
        event.preventDefault();
        exonecont.style.display = 'block';
        extwocont.style.display = 'none';
    });

    extwolink.addEventListener('click', function (event) {
        event.preventDefault();
        extwocont.style.display = 'block';
        exonecont.style.display = 'none';
    });
});

/*Exercise 1*/
const ball = document.querySelector('.ball');
const btnone = document.getElementById('actual');
let down = true;
let inter;

btnone.addEventListener('click', function (event) {
    event.preventDefault();
    if (btnone.textContent === 'Start') {
        btnone.textContent = 'Stop';
        inter = setInterval(move, 5);
    } else {
        btnone.textContent = 'Start';
        clearInterval(inter);
    }
});

function move() {
    const contheight = document.querySelector('.cont').offsetHeight;
    const ballheight = ball.offsetHeight;
    const top = parseInt(ball.style.top) || 0;

    if (down) {
        if (top + ballheight >= contheight) {
            down = false;
        } else {
            ball.style.top = top + 1 + 'px';
        }
    } else {
        if (top <= 0) {
            down = true;
        } else {
            ball.style.top = top - 1 + 'px';
        }
    }
}

/*Exercise 2*/
document.addEventListener("DOMContentLoaded", function () {
    const img = [
        "images/yoga1.jpg",
        "images/yoga2.jpg",
        "images/yoga3.jpg",
        "images/yoga4.jpg",
        "images/yoga5.jpg",
        "images/yoga6.jpg",
        "images/yoga7.jpg",
        "images/yoga8.jpg",
    ];

    const info = [
        "Extended Side Angle",
        "Downward Dog",
        "One-Legged Prayer Pose",
        "Side Bend",
        "Hand Stretch",
        "Warrior Pose",
        "Leg Stretch",
        "Upward Stretch"
    ];

    const list = document.querySelector('.list');

    for (let i = 0; i < img.length; i++) {
        const link = img[i];
        const item = document.createElement('li');
        const image = document.createElement('img');
        image.src = link;
        image.alt = `Image ${i + 1}`;
        image.classList.add('clickable-image');

        const description = document.createElement('p');
        description.textContent = info[i];
        description.classList.add('description');

        image.onclick = function () {
            const all = document.querySelectorAll('.description');
            all.forEach(desc => {
                desc.style.display = 'none';
            });

            description.style.display = 'block';
        };

        item.classList.add('litem');
        item.appendChild(image);
        item.appendChild(description);
        list.appendChild(item);
    }
});


