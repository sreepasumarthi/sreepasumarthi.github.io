const getHouses = async () => {
    const url = "https://portiaportia.github.io/json/house-plans.json";
  
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showHouses = async () => {
    const houses = await getHouses();
    const housesContainer = document.getElementById("houses-container");
    houses.forEach((house) => {
      housesContainer.append(getHouseItem(house));
    });
  };
  
  const getHouseItem = (house) => {
    const section = document.createElement("section");
    const imgDiv = document.createElement("div");
    const textDiv = document.createElement("div");
  
    // Heading
    const heading = document.createElement("h2");
    heading.textContent = house.name;
    textDiv.appendChild(heading);
  
    // Picture of house
    const image = document.createElement("img");
    // Check if the house object and the main_image property exist
    if (house && house.main_image) {
      image.src = `https://portiaportia.github.io/json/images/house-plans/${house.main_image}`;
      image.alt = house.name; // Provide an alt attribute for accessibility
      imgDiv.appendChild(image);
    } else {
      // If the image data is missing or incorrect, display a placeholder or error message
      image.src = "placeholder.jpg";
      image.alt = "Image not available";
      imgDiv.appendChild(image);
    }
  
    // Size, bedrooms, bathrooms
    const details = document.createElement("p");
    details.innerHTML = `<span class="bold">Size:</span> ${house.size}<br>
                        <span class="bold">Bedrooms:</span> ${house.bedrooms}<br>
                        <span class="bold">Bathrooms:</span> ${house.bathrooms}`;
    textDiv.appendChild(details);
  
    // Features (if available)
    if (house.features) {
      const features = document.createElement("p");
      features.innerHTML = `<span class="bold">Features:</span> ${house.features.join(", ")}`;
      textDiv.appendChild(features);
    }
  
    // Floorplans
    if (house.floor_plans) {
      const floorPlansDiv = document.createElement("div");
      house.floor_plans.forEach((plan) => {
        const planImage = document.createElement("img");
        planImage.src = `https://portiaportia.github.io/json/images/house-plans/${plan.image}`;
        planImage.alt = plan.name;
        floorPlansDiv.appendChild(planImage);
      });
      textDiv.appendChild(floorPlansDiv);
    }
  
    section.appendChild(imgDiv);
    section.appendChild(textDiv);
  
    return section;
  };
  
  window.onload = () => showHouses();
  