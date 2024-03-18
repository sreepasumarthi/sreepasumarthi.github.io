const obtainProjects = async () => {
  const url = "https://sreepasumarthi.github.io/json/projects.json";

  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

const displayProjects = async () => {
  const projects = await obtainProjects();
  const projectsContainer = document.getElementById("projects-container");
  projects.forEach((project) => {
    projectsContainer.append(createProjectItem(project));
  });

  const projectImages = document.querySelectorAll(".projimg");
  projectImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      displayModal(projects[index]);
    });
  });
};

const createProjectItem = (project) => {
  const section = document.createElement("section");
  const imgDiv = document.createElement("div");

  const image = document.createElement("img");
  image.src = "https://sreepasumarthi.github.io/json/" + project.img;
  image.classList.add("projimg");
  imgDiv.append(image);

  const textDiv = document.createElement("div");

  const title = document.createElement("h2");
title.textContent = project.title;
title.classList.add("bold");
textDiv.append(title);

  const year = document.createElement("p");
  year.innerHTML = project.schoolyear;
  textDiv.append(year);

  const course = document.createElement("p");
  course.innerHTML = project.course;
  textDiv.append(course);

  const technologies = document.createElement("p");
  technologies.innerHTML = `<span class="bold">Technologies Used:</span> ${project.technologies.join(", ")}`;
  textDiv.append(technologies);

  const description = document.createElement("p");
  description.textContent = project.description;
  textDiv.append(description);

  section.append(imgDiv);
  section.append(textDiv);
  return section;
};

const displayModal = (project) => {
  const modal = document.getElementById("myModal");
  const modalText = document.getElementById("modal-text");
  modalText.innerHTML = project.modaldetails;
  modal.style.display = "block";

  const closeButton = document.getElementsByClassName("close")[0];
  closeButton.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

window.onload = () => displayProjects();
