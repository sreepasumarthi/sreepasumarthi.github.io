const getMovies = async () => {
    const url = "https://sreepasumarthi.github.io/testing/json/projects.json";


    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const showMovies = async () => {
    const movies = await getMovies();
    const moviesContainer = document.getElementById("movies-container");
    movies.forEach((movie) => {
        moviesContainer.append(getMovieItem(movie));
    });
};

const getMovieItem = (movie) => {
    const section = document.createElement("section");
    const imgDiv = document.createElement("div");

    const image = document.createElement("img");
    image.src = "https://sreepasumarthi.github.io/testing/json/movies.json/" + movie.img;
    imgDiv.append(image);

    const textDiv = document.createElement("div");

    const title = document.createElement("h2");
    title.innerHTML = movie.title;
    title.classList.add("bold");
    textDiv.append(title);

    const director = document.createElement("p");
    director.innerHTML = `<span class="bold">Director:</span> ${movie.director}`;
    textDiv.append(director);

    const actors = document.createElement("p");
    actors.innerHTML = `<span class="bold">Actors:</span> `;
    movie.actors.forEach((actor) => {
        actors.innerHTML += actor;
        if (actor != movie.actors[movie.actors.length - 1]) {
            actors.innerHTML += ", ";
        }
    });
    textDiv.append(actors);

    const year = document.createElement("p");
    year.innerHTML = `<span class="bold">Year Released:</span> ${movie.year}`;
    textDiv.append(year);

    const techs = document.createElement("p");
    techs.innerHTML = `<span class="bold">techs:</span> `;
    movie.techs.forEach((tech) => {
        techs.innerHTML += tech;
        if (tech != movie.techs[movie.techs.length - 1]) {
            techs.innerHTML += ", ";
        }
    });
    textDiv.append(techs);

    const description = document.createElement("p");

    description.innerHTML = movie.description;
    textDiv.append(description);

    imgDiv.id = "movie-img";
    textDiv.id = "movie-text";

    section.append(imgDiv);
    section.append(textDiv);
    return section;
};

window.onload = () => showMovies();