/*Artist Class*/
class Artist {
    constructor(name, age, gender, netWorth, recentTour, picture) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.netWorth = netWorth;
        this.recentTour = recentTour;
        this.picture = picture;
    }

/*Get Section - Initial Display*/
    get section() {
        const section = document.createElement("section");
        section.className = "artist";

        section.innerHTML = `<h1>${this.name}</h1>`;

        const rcs = section.appendChild(document.createElement("section"));
        rcs.className = "rcs";

        const mainImage = rcs.appendChild(document.createElement("aside"));

        const image = this.pc(this.picture);
        mainImage.appendChild(image);

        section.addEventListener('click', () => {
            document.body.appendChild(this.expandedSection);
        });

        return section;
    }

/*Get Expanded Section - Modal*/
    get expandedSection() {
        const article = document.createElement("article");
        article.className = "article";

        const allinfo = document.createElement("article");
        allinfo.className = "info";

        const exit = document.createElement("span");
        exit.className = "exit";
        exit.innerHTML = "&times;";

        const title = document.createElement("h1");
        title.innerHTML = `${this.name}`;

        const mainImage = document.createElement("aside");
        mainImage.className = "artimg";
        const artistImage = this.pc(this.picture);
        mainImage.appendChild(artistImage);

        const artistDetails = [
            { label: "Age", value: this.age },
            { label: "Gender", value: this.gender },
            { label: "Net Worth", value: this.netWorth },
            { label: "Most Recent Tour", value: this.recentTour }
        ];

        const paragraphs = artistDetails.map(({ label, value }) => this.insidearticle(label, value));

        allinfo.append(exit, title, mainImage, ...paragraphs);
        article.append(allinfo);

        const exit2 = () => article.remove();
        article.addEventListener('click', (event) => {
            if (event.target === article) {
                exit2();
            }
        });
        exit.addEventListener('click', exit2);

        return article;
    }
    pc(info) {
        const picture = document.createElement("img");
        picture.src = "images/" + info;
        return picture;
    }
    insidearticle(title, info) {
        const insideletters = document.createElement("p");
        insideletters.innerHTML = `${title}: ${info}`;
        return insideletters;
    }

}

const artistsData = [
    ["Rihanna", 33, "Female", "$600 million", "Anti World Tour", "rihanna.jpg"],
    ["Taylor Swift", 32, "Female", "$400 million", "Reputation Stadium Tour", "taylorswift.jpg"],
    ["Beyonce", 40, "Female", "$500 million", "The Formation World Tour", "beyonce.jpg"],
    ["Madonna", 63, "Female", "$850 million", "Madame X Tour", "madonna.jpg"],
];

artistsData.forEach(data => {
    const artist = new Artist(...data);
    document.getElementById("artist-list").appendChild(artist.section);
});
