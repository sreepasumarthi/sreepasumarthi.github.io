const getprojects = async () => {
    const url = "https://sreepasumarthi.github.io/json/projects.json";
  
    try {
      const response = await fetch(url);
      console.log("Response");
      console.log(response);
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
    
      projectsContainer.append(getprojectItem(project));
    });
  };
  
  const getprojectItem = (project) => {
    const section = document.createElement("section");
    const imgDiv = document.createElement("div");
    console.log("here 1")

      
    const course = document.createElement("p");
    course.innerHTML = project.course;
    textDiv.append(course);

    console.log("here 2")


    imgDiv.id = "project-img";
    textDiv.id = "project-text";
  
    section.append(imgDiv);
    section.append(textDiv);
    return section;
  };
  
  window.onload = () => showprojects();
  