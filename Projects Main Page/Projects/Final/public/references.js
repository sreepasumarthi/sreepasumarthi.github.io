
const getReferences = async () => {
    try {
        return (await fetch("https://sreepasumarthi-github-io.onrender.com/api/references")).json();
    } catch (error) {
        console.log("error retrieving data");
        return "";
    }
};

let currentReference;

// displays reference in readonly modal dialog
const displayReferenceModal = (reference) => {
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modal-title");
    const modalRelationship = document.getElementById("modal-relationship");
    const modalCompany = document.getElementById("modal-company");
    const modalReferenceText = document.getElementById("modal-referenceText");
    const modelContent = document.getElementById("modelContent");

    modalTitle.innerHTML = `<strong>${reference.name + ", " + reference.relationship}  </strong>`;

    // Add edit and delete buttons next to the Name
    const editLink = document.createElement("a");
    editLink.innerHTML = "&#9998;";
    modalTitle.append(editLink);
    editLink.id = "edit-link";

    const deleteLink = document.createElement("a");
    deleteLink.innerHTML = "&#x274c;";
    modalTitle.append(deleteLink);
    deleteLink.id = "delete-link";
    deleteLink.onclick = deleteReferenceMethod.bind(this, reference);


    modalCompany.textContent = reference.company;
    modalReferenceText.textContent = reference.referenceText;

    modal.style.display = "block";

    const closeModal = () => {
        modal.style.display = "none";
    };

    const closeButton = document.getElementsByClassName("close")[0];
    closeButton.addEventListener("click", closeModal);

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });
    currentReference = reference;

    editLink.onclick = showEditReferenceForm;
    populateReferenceEditForm(reference);
};

const populateReferenceEditForm = (reference) => {
    const form = document.getElementById("reference-form");
    form._id.value = reference._id;
    form.name.value = reference.name;
    form.relationship.value = reference.relationship;
    form.company.value = reference.company;
    form.referenceText.value = reference.referenceText;
};


const deleteReferenceMethod = async (reference) => {

    var deleteConfirm = confirm("Are you sure you want to delete this reference?");
    if (deleteConfirm == false) {
        return false;
    }

    let response = await fetch(`https://sreepasumarthi-github-io.onrender.com/api/references/${reference._id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });

    if (response.status != 200) {
        console.log("Error Deleting Reference");
        return;
    }

    let result = await response.json();

    resetForm();
    clearScreen();
    showReferences();
    document.getElementById("myModal").style.display = "none";

};


const showReferences = async () => {
    const referencesJSON = await getReferences();

    const columns = document.querySelectorAll(".column");
    if (referencesJSON == "") {
        columns.forEach(column => {
            column.innerHTML = "Sorry, no references";
        });
        return;
    }

    referencesJSON.forEach((reference, index) => {
        const shortestColumnIndex = Array.from(columns).reduce((acc, column, idx) => {
            return column.offsetHeight < columns[acc].offsetHeight ? idx : acc;
        }, 0);

        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");
        galleryItem.addEventListener("click", () => displayReferenceModal(reference));
      
        const name = document.createElement("p");
        name.textContent = reference.name;
        name.classList.add("name-style");
        galleryItem.appendChild(name);

        const company = document.createElement("p");
        company.textContent = reference.company;
        company.classList.add("company-style");
        galleryItem.appendChild(company);

        const relationship = document.createElement("p");
        relationship.textContent = reference.relationship;
        relationship.classList.add("relationship-style");
        galleryItem.appendChild(relationship);


        const referenceText = document.createElement("p");
        referenceText.textContent = reference.referenceText;
        galleryItem.appendChild(referenceText);

        columns[shortestColumnIndex].appendChild(galleryItem);
    });
};

// post the reference to the server
const addEditReference = async (e) => {
    e.preventDefault();
    const form = document.getElementById("reference-form");
    const formData = new FormData(form);
    let response;

    const message = document.getElementById("message")


    // Add Method
    try {
        if (form._id.value.trim() == "") {
            //console.log("in add method..." + form.name.value);
            //console.log("in add method..." + form.relationship.value);
            //console.log("in add method..." + form.referenceText.value);
            response = await fetch("https://sreepasumarthi-github-io.onrender.com/api/references", {
                method: "POST",
                body: formData,
            });
            if (!response.ok) {
                throw new Error("Error posting data");
            }
        } else { // edit method
            //put request
            console.log("in put");
            response = await fetch(`https://sreepasumarthi-github-io.onrender.com/api/references/${form._id.value}`, {
                method: "PUT",
                body: formData
            });
            if (!response.ok) {
                throw new Error("Error posting data");
            }
        }

        if (response.status != 200) {
            console.log("Error adding / editing reference");
        }

        await response.json();


        resetForm();
        clearScreen();
        showReferences();
        document.getElementById("dialog").style.display = "none";
        // Call showReferences only once after adding the reference

    }
    catch (error) {
        if (response.status != 200) {
            message.innerHTML = "Error while saving reference.";
            message.style.color = "red";

            return;
        }
    }

};

clearScreen = () => {
    let referencesDiv1 = document.getElementById("reference-list-column1");
    let referencesDiv2 = document.getElementById("reference-list-column2");
    let referencesDiv3 = document.getElementById("reference-list-column3");
    let referencesDiv4 = document.getElementById("reference-list-column4");
    referencesDiv1.innerHTML = "";
    referencesDiv2.innerHTML = "";
    referencesDiv3.innerHTML = "";
    referencesDiv4.innerHTML = "";
}


document.getElementById("cancel-button").addEventListener("click", (e) => {
    e.preventDefault();
    resetForm();
    document.getElementById("dialog").style.display = "none";
});

const resetForm = () => {
    const form = document.getElementById("reference-form");
    form.reset();
    form._id.value = "";
    document.getElementById("message").innerHTML = "";
};


const showAddReferenceForm = (e) => {
    e.preventDefault();
    openDialog("reference-form");
    resetForm();
};

const showEditReferenceForm = (e) => {
    e.preventDefault();
    document.getElementById("myModal").style.display = "none";
    openDialog("reference-form");
};

const openDialog = (id) => {
    document.getElementById("dialog").style.display = "block";
    document.querySelectorAll("#dialog-details > *").forEach((item) => {
        item.classList.add("hidden");
    });
    document.getElementById(id).classList.remove("hidden");
};

// when the server is loaded show all the references from server
showReferences();

document.getElementById("reference-form").onsubmit = addEditReference;
document.getElementById("add-link").onclick = showAddReferenceForm;
