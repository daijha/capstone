import mongoose from "mongoose";

// schema syntax :
const entrySchema = new mongoose.Schema({
  userId:{
    type: String,
    required:true,
    },
  name: {
    type: String,
    required: true,// they can add whatever they want here .
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

//index:
entrySchema.index({userId: 1})

const Entry = mongoose.model("Entry", entrySchema); //  creates model Entry based off of the entrySchema

export default Entry;
