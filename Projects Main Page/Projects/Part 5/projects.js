document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const close = document.querySelector(".close");
    const container = document.querySelector(".container");

    // Fetch the JSON file
    async function fetchProjects() {
        try {
            const response = await fetch('projects.json');
            const data = await response.json();
            return data.movies; // Assuming the movies array is what you want to display
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    }

    // Render projects
    async function renderProjects() {
        const projects = await fetchProjects();
        if (!projects) return;

        // Loop through each project and create HTML elements
        projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');

            const img = document.createElement('img');
            img.classList.add('size');
            img.src = `images/${project.img_name}`;
            img.setAttribute('data-text', project.description);

            const title = document.createElement('h1');
            title.textContent = project.title;

            const technologies = document.createElement('p');
            technologies.textContent = project.technologies.join(', ');

            const description = document.createElement('p');
            description.textContent = project.description;

            projectDiv.appendChild(img);
            projectDiv.appendChild(title);
            projectDiv.appendChild(technologies);
            projectDiv.appendChild(description);

            container.appendChild(projectDiv);
        });
    }

    // Open popup when project image is clicked
    container.addEventListener('click', function(event) {
        if (event.target.classList.contains('size')) {
            const description = event.target.getAttribute('data-text');
            document.querySelector('.popup-content').innerHTML = description;
            popup.style.display = 'block';
        }
    });

    // Close popup
    close.addEventListener("click", function() {
        popup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    // Call renderProjects function to display projects
    renderProjects();
});
