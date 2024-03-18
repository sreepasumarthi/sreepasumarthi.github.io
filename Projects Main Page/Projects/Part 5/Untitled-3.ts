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
