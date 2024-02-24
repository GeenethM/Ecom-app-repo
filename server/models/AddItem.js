const mongoose = require("mongoose")
const {Schema, model} = mongoose;

const AddItem = new Schema({
    // Title : {type : String, required: true},
    Image : {type: String, required: true},
    // Price : {type: String, required: true},
    // Description : {type: String, required: true}
});

module.exports = model("Item", AddItem);