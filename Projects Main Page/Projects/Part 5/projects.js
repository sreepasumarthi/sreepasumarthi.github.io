const getprojects = async () => {
    const url = "https://sreepasumarthi.github.io/json/projects.json";
  
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      alert(error)
      console.log(error);
    }
  };
  
  const showprojects = async () => {
    const projects = await getprojects();
    
    const projectsContainer = document.getElementById("projects-container");
    projects.forEach((project) => {
    alert(project.title)
    alert(project.img)
    alert(project.technologies)
    alert(project.description)
    alert(project.modaldetails)
    alert(project.schoolyear)
    alert(project.course)
      projectsContainer.append(getprojectItem(project));
    });
  };
  
  const getprojectItem = (project) => {
    const section = document.createElement("section");
    const imgDiv = document.createElement("div");
  
    const image = document.createElement("img");
    image.src = "https://sreepasumarthi.github.io/json/images/" + project.img;
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

    const schoolyear = document.createElement("p");
    schoolyear.innerHTML = `<span class="bold">Year Completed:</span> ${project.schoolyear}`;
    textDiv.append(schoolyear);

    const description = document.createElement("p");
    description.innerHTML = project.description;
    textDiv.append(description);

    const modaldetails = document.createElement("p");
    modaldetails.innerHTML = project.modaldetails;
    textDiv.append(modaldetails);
  
    const course = document.createElement("p");
    course.innerHTML = project.course;
    textDiv.append(course);
  
    imgDiv.id = "project-img";
    textDiv.id = "project-text";
  
    section.append(imgDiv);
    section.append(textDiv);
    return section;
  };
  
  window.onload = () => showprojects();
  