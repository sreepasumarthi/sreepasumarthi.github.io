const showHouses = async () => {
    const houses = await getHouses();
    const housesContainer = document.getElementById("houses-container");
    
    houses.forEach((house, index) => {
      let houseData = null;
      switch (house.type) {
        case 'lakehouse':
          houseData = {
            image: `lakehouse_${index % 3 + 1}.jpg`, // Choose three different lakehouse images
            size: house.size,
            bedrooms: house.bedrooms,
            bathrooms: house.bathrooms,
            floor_plans: house.floor_plans
          };
          break;
        case 'farmhouse':
          houseData = {
            image: `farmhouse_${index % 3 + 1}.jpg`, // Choose three different farmhouse images
            size: house.size,
            bedrooms: house.bedrooms,
            bathrooms: house.bathrooms,
            floor_plans: house.floor_plans
          };
          break;
        case 'mountain house':
          houseData = {
            image: `mountain_house_${index % 3 + 1}.jpg`, // Choose three different mountain house images
            size: house.size,
            bedrooms: house.bedrooms,
            bathrooms: house.bathrooms,
            floor_plans: house.floor_plans
          };
          break;
        default:
          break;
      }
      housesContainer.append(getHouseItem(houseData));
    });
  };
  
  const getHouseItem = (house) => {
    const section = document.createElement("section");
    const imgDiv = document.createElement("div");
    const textDiv = document.createElement("div");
  
    const image = document.createElement("img");
    image.src = `https://portiaportia.github.io/json/images/house-plans/${house.image}`;
    imgDiv.append(image);
  
    const details = document.createElement("p");
    details.innerHTML = `<span class="bold">Size:</span> ${house.size}<br>
                        <span class="bold">Bedrooms:</span> ${house.bedrooms}<br>
                        <span class="bold">Bathrooms:</span> ${house.bathrooms}`;
    textDiv.append(details);
  
    // Display floor plans
    const floorPlans = document.createElement("div");
    house.floor_plans.forEach((plan) => {
      const planImage = document.createElement("img");
      planImage.src = `https://portiaportia.github.io/json/images/house-plans/${plan}`;
      planImage.classList.add("floor-plan");
      floorPlans.append(planImage);
    });
  
    imgDiv.id = "house-img";
    textDiv.id = "house-text";
  
    section.append(imgDiv);
    section.append(textDiv);
    section.append(floorPlans);
    return section;
  };
  
  window.onload = () => showHouses();
  