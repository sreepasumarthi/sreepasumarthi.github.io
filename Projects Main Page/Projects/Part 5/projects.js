const getprojects = async () => {
    const url = "https://sreepasumarthi.github.io/json/projects.json";
  
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showprojects = async () => {
    const projects = await getprojects();
    const projectsContainer = document.getElementById("projects-container");
    projects.forEach((movie) => {
      projectsContainer.append(getMovieItem(movie));
    });
  };
  
  const getMovieItem = (movie) => {
    const section = document.createElement("section");
    const imgDiv = document.createElement("div");
  
    const image = document.createElement("img");
    image.src = "https://sreepasumarthi.github.io/json/projects.json/" + movie.img;
    imgDiv.append(image);
  
    const textDiv = document.createElement("div");
  
    const title = document.createElement("h2");
    title.innerHTML = movie.title;
    title.classList.add("bold");
    textDiv.append(title);
  
    const tech = document.createElement("p");
    tech.innerHTML = `<span class="bold">Technologies Used:</span> ${projects.tech}`;
    textDiv.append(tech);
  
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
  
    const genres = document.createElement("p");
    genres.innerHTML = `<span class="bold">Genres:</span> `;
    movie.genres.forEach((genre) => {
      genres.innerHTML += genre;
      if (genre != movie.genres[movie.genres.length - 1]) {
        genres.innerHTML += ", ";
      }
    });
    textDiv.append(genres);
  
    const description = document.createElement("p");
  
    description.innerHTML = movie.description;
    textDiv.append(description);
  
    imgDiv.id = "movie-img";
    textDiv.id = "movie-text";
  
    section.append(imgDiv);
    section.append(textDiv);
    return section;
  };
  
  window.onload = () => showprojects();