const getprojects = async () => {
    const url = "https://portiaportia.github.io/json/projects.json";
  
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
    projects.forEach((project) => {
      projectsContainer.append(getprojectItem(project));
    });
  };
  
  const getprojectItem = (project) => {
    const section = document.createElement("section");
    const imgDiv = document.createElement("div");
  
    const image = document.createElement("img");
    image.src = "https://portiaportia.github.io/json/" + project.img;
    imgDiv.append(image);
  
    const textDiv = document.createElement("div");
  
    const title = document.createElement("h2");
    title.innerHTML = project.title;
    title.classList.add("bold");
    textDiv.append(title);

    
    const technologies = document.createElement("p");
    technologies.innerHTML = `<span class="bold">Technologies Used:</span> `;
    project.tech.forEach((tech) => {
        technologies.innerHTML += tech;
      if (tech != project.technologies[project.technologies.length - 1]) {
        technologies.innerHTML += ", ";
      }
    });
    textDiv.append(technologies);


  
    const director = document.createElement("p");
    director.innerHTML = `<span class="bold">Director:</span> ${project.director}`;
    textDiv.append(director);
  
    const actors = document.createElement("p");
    actors.innerHTML = `<span class="bold">Actors:</span> `;
    project.actors.forEach((actor) => {
      actors.innerHTML += actor;
      if (actor != project.actors[project.actors.length - 1]) {
        actors.innerHTML += ", ";
      }
    });
    textDiv.append(actors);
  
    const year = document.createElement("p");
    year.innerHTML = `<span class="bold">Year Released:</span> ${project.year}`;
    textDiv.append(year);
  
  
    const description = document.createElement("p");
  
    description.innerHTML = project.description;
    textDiv.append(description);
  
    imgDiv.id = "project-img";
    textDiv.id = "project-text";
  
    section.append(imgDiv);
    section.append(textDiv);
    return section;
  };
  
  window.onload = () => showprojects();