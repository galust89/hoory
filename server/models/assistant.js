const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  name: { type: String },
  gender: { type: String },
  color: { type: String },
});

const ModelClass = mongoose.model("assistant", schema);

module.exports = ModelClass;
