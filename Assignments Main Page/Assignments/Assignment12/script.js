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
    let houses = await getHouses();
    let housesSection = document.getElementById("houses-section");
    houses.forEach((house) => {
        housesSection.append(getHouseItem(house));
    });
};

const getHouseItem = (house) => {
    const section = document.createElement("section");
    const textDiv = document.createElement("div");

    /*House Name*/
    textDiv.innerHTML = `<h2>${house.name}</h2>`;

    /*House Picture*/
    const imgDiv = document.createElement("div");
    const image = document.createElement("img");
    image.src = `https://portiaportia.github.io/json/images/house-plans/${house.main_image}`;
    imgDiv.append(image);

    /*House Details*/
    const details = document.createElement("p");
    details.innerHTML = `<span class="bold">Size:</span> ${house.size}<br>
                        <span class="bold">Bedrooms:</span> ${house.bedrooms}<br>
                        <span class="bold">Bathrooms:</span> ${house.bathrooms}`;
    textDiv.append(details);

    /*House Features*/
    const features = document.createElement("p");
    features.innerHTML = `${house.features.join(" * ")}`;
    textDiv.append(features);

    /*House Floorplans*/
    const floorPlansDiv = document.createElement("div");
    house.floor_plans.forEach((plan) => {
        const planImage = document.createElement("img");
        planImage.src = `https://portiaportia.github.io/json/images/house-plans/${plan.image}`;
        floorPlansDiv.append(planImage);
    });
    textDiv.append(floorPlansDiv);

    section.append(imgDiv);
    section.append(textDiv);

    return section;
};

window.onload = () => showHouses();
