import mongoose from "mongoose";

// schema syntax :
const entrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 10,
  },
  date: {
    type: Date,
    required:true,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
    maxlength: 1000,
  },
});

const Entry = mongoose.model("Entry", entrySchema); //  creates model Entry based off of the entrySchema

export default Entry;
