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
    const housesSection = document.getElementById("houses-section");
    houses.forEach((house) => {
        housesSection.append(getHouseItem(house));
    });
};

const getHouseItem = (house) => {
    const section = document.createElement("section");
    const imgDiv = document.createElement("div");
    const textDiv = document.createElement("div");

    /*House Name*/
    const heading = document.createElement("h2");
    heading.textContent = house.name;
    textDiv.appendChild(heading);

    /*House Picture*/
    const image = document.createElement("img");
    image.src = `https://portiaportia.github.io/json/images/house-plans/${house.main_image}`;
    image.alt = house.name; // Provide an alt attribute for accessibility
    imgDiv.appendChild(image);

    /*House Details*/
    const details = document.createElement("p");
    details.innerHTML = `<span class="bold">Size:</span> ${house.size}<br>
                        <span class="bold">Bedrooms:</span> ${house.bedrooms}<br>
                        <span class="bold">Bathrooms:</span> ${house.bathrooms}`;
    textDiv.appendChild(details);

    /*House Features*/
    const features = document.createElement("p");
    features.innerHTML = `<span class="bold">Features:</span> ${house.features.join(", ")}`;
    textDiv.appendChild(features);

    /*House Floorplans*/
    const floorPlansDiv = document.createElement("div");
    house.floor_plans.forEach((plan) => {
        const planImage = document.createElement("img");
        planImage.src = `https://portiaportia.github.io/json/images/house-plans/${plan.image}`;
        planImage.alt = plan.name;
        floorPlansDiv.appendChild(planImage);
    });
    textDiv.appendChild(floorPlansDiv);

    section.appendChild(imgDiv);
    section.appendChild(textDiv);

    return section;
};

window.onload = () => showHouses();
