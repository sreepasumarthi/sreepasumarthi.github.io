// Fetch projects from the specified URL
const obtainProjects = async () => {
  const url = "https://sreepasumarthi.github.io/json/projects.json";

  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

// Display the fetched projects
const displayProjects = async () => {
  const projects = await obtainProjects();
  const projectsContainer = document.getElementById("projects-container");
  projects.forEach((project) => {
    projectsContainer.append(createProjectItem(project));
  });
};

// Create a project item
const createProjectItem = (project) => {
  const section = document.createElement("section");
  const imgDiv = document.createElement("div");

  const image = document.createElement("img");
  image.src = "https://sreepasumarthi.github.io/json/" + project.img;
  image.classList.add("projimg");
  imgDiv.append(image);

  const textDiv = document.createElement("div");

  const title = document.createElement("h2");
  title.innerHTML = project.title;
  title.classList.add("bold");
  textDiv.append(title);

  const technologies = document.createElement("p");
  technologies.innerHTML = `<span class="bold">Technologies Used:</span> `;
  project.technologies.forEach((tech, index) => {
    technologies.innerHTML += tech;
    if (index !== project.technologies.length - 1) {
      technologies.innerHTML += ", ";
    }
  });
  textDiv.append(technologies);
  
  const year = document.createElement("p");
  year.innerHTML = project.schoolyear;
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

// Execute the displayProjects function when the window loads
window.onload = () => displayProjects();
