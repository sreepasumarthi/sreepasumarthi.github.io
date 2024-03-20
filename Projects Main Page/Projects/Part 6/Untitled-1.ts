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
