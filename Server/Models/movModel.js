import { Int32, ObjectId } from "mongodb";
import mongoose from "mongoose";
const MoviesSchema = mongoose.Schema({
    mID: { type: String, required: true, },
    mName: { type: String, required: false, },
    info: { type: String, required: false, },
    image: { type: String, required: false, },
    youtube: { type: String, required: false, },
    view: { type: Number, required: false, },
});
const MoviesModel = mongoose.model("movies_table", MoviesSchema);
export default MoviesModel;