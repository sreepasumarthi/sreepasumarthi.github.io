const technologies = document.createElement("p");
  technologies.innerHTML = `<span class="bold">Technologies:</span> `;
  project.technologies.forEach((tech) => {
    technologies.innerHTML += genre;
    if (genre != project.technologies[movie.technologies.length - 1]) {
      technologies.innerHTML += ", ";
    }
  });
  textDiv.append(technologies);