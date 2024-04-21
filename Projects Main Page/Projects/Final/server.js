const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

mongoose
    .connect(
        "mongodb+srv://sreepasumarthi:coolstuff@cluster0.hvvzzie.mongodb.net/"
    )
    .then(() => {
        console.log("Successfully connected to mongodb!");
    })
    .catch((error) => {
        console.log("Sorry, couldn't connect to mongodb.", error);
    });

const refSchema = new mongoose.Schema({
    name: String,
    relationship: String,
    company: String,
    referenceText: String,
});

const Reference = mongoose.model("Reference", refSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/references", (req, res) => {
    getReferences(res);
});

const getReferences = async (res) => {
    const references = await Reference.find();
    res.send(references);
};

app.get("/api/references/:id", (req, res) => {
    getReference(req.params.id, res);
});

const getReference = async (id, res) => {
    const reference = await Reference.findOne({ _id: id });
    res.send(reference);
};

app.post("/api/references", upload.single("img"), (req, res) => {
    //console.log("values....", req.body.name)
    const result = validateReference(req.body);
    console.log(result);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const reference = new Reference({
        name: req.body.name,
        relationship: req.body.relationship,
        company: req.body.company,
        referenceText: req.body.referenceText,
    });

    createReference(reference, res);
});

const createReference = async (reference, res) => {
    const result = await reference.save();
    res.send(reference);
};

app.put("/api/references/:id", upload.single("img"), (req, res) => {
    const result = validateReference(req.body);
    console.log(result);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    updateReference(req, res);
});

const updateReference = async (req, res) => {
    let fieldsToUpdate = {
        name: req.body.name,
        relationship: req.body.relationship,
        company: req.body.company,
        referenceText: req.body.referenceText,
    };

    const result = await Reference.updateOne({ _id: req.params.id }, fieldsToUpdate);

    res.send(result);
};

app.delete("/api/references/:id", (req, res) => {
    removeReference(res, req.params.id);
});

const removeReference = async (res, id) => {
    const reference = await Reference.findByIdAndDelete(id);
    res.send(reference);
};

function validateReference(reference) {
    //console.log("reference name ...." + reference.name)
    //console.log("reference referenceText ...." + reference.referenceText)

    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        relationship: Joi.string().min(5).required(),
        company: Joi.string().min(3).required(),
        referenceText: Joi.string().min(5).required(),
        _id: Joi.allow(""),
    });

    return schema.validate(reference);
}

app.listen(3070, () => {
    console.log("I'm listening");
});