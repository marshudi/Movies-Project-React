import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import MovModel from "./Models/movModel.js";

const app = express();

app.use(express.json());
app.use(cors());

const conStr =
    "mongodb+srv://Marshudi:admin@project.ludeoui.mongodb.net/movDB?retryWrites=true&w=majority";

mongoose.connect(conStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(3001, () => {
    console.log("Server is connected...");
});






app.post("/addMovies", async (req, res) => {
    const mID = req.body.mID;
    const mName = req.body.mName;
    const info = req.body.info;
    const image = req.body.image;
    const youtube = req.body.youtube;
    const view = req.body.view;
    const movies = new MovModel({
        mID: mID,
        mName: mName,
        info: info,
        image: image,
        youtube: youtube,
        view:view
    });
    await movies.save();
    res.send("Record Successfully Added!");
});


//express GET route for retrieving all the records from the database
app.get("/display", async (req, res) => {
    const movies = await MovModel.find({})
        .then(async (movies) => {
            const countmovies = await MovModel.countDocuments({});
            res.send({
                movies,
                count: countmovies
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

//express DELETE route
app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await MovModel.findByIdAndRemove(id).exec();
    const countmovies = await MovModel.countDocuments({});
    res.send({
        msg: "Item Deleted",
        count: countmovies
    });

    
});

//express GET route for the selected record
app.get("/getMovies/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await MovModel.findById(id);
        const count = await MovModel.countDocuments();
        res.status(200).send({
            result,
            count
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({
            error: "Internal server error"
        });
    }
});



  





app.put("/update", async (req, res) => {
    const mID = req.body.mID;
    const mName = req.body.mName;
    const info = req.body.info;
    const image = req.body.image;
    const youtube = req.body.youtube;
    const view = req.body.view;
    try {
        const moviesToUpdate = await MovModel.findOne({
            mID: mID
        });
        if (!moviesToUpdate) {
            res.status(404).send({
                error: "Movies not found"
            });
            return;
        }
        moviesToUpdate.mID = String(mID);
        moviesToUpdate.mName = String(mName);
        moviesToUpdate.info = String(info);
        moviesToUpdate.image = String(image);
        moviesToUpdate.youtube = String(youtube);
        moviesToUpdate.view = String(view);

        await moviesToUpdate.save();
        res.send({
            msg: "Record Updated"
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({
            error: "Failed to update Movies record"
        });
    }
});