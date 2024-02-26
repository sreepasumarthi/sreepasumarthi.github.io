/*Part 1*/
document.addEventListener('DOMContentLoaded', function () {
    const ads = [
        "There's a garden picture in this gallery.",
        "There's a golden picture in this gallery.",
        "There's a mountain & lake picture in this gallery.",
        "There's a small house picture in this gallery.",
        "There's a snow picture in this gallery."
    ];
    let currentIndex = 0;
    const element = document.getElementById('ads');
    function display() {
        element.textContent = ads[currentIndex];
        currentIndex = (currentIndex + 1) % ads.length;
    }
    display();
    setInterval(display, 2000);
});

/*Part 2*/
document.addEventListener('DOMContentLoaded', function () {
    const array = [
      {
        src: 'images/garden.jpg',
        attribution: '<a href="https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7"> Image by vecstock</a> on Freepik'
      },
      {
        src: 'images/golden.jpg',
        attribution: '<a href="https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik'
      },
      {
        src: 'images/mountain-lake.jpg',
        attribution: '<a href="https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik'
      },
      {
        src: 'images/small-house.jpg',
        attribution: '<a href="https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik'
      },
      {
        src: 'images/snow.jpg',
        attribution: '<a href ="https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik'
      }
    ];
 
    const div = document.getElementById('gallery');
 
    array.forEach(function (image) {
      const container = document.createElement('div');
      container.classList.add('cont');
 
      const imgel = document.createElement('img');
      imgel.src = image.src;
 
      const atel = document.createElement('p');
      atel.innerHTML = image.attribution;
 
      container.appendChild(imgel);
      container.appendChild(atel);
 
      div.appendChild(container);
    });
  });

