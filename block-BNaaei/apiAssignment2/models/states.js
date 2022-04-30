const mongoose = require("mongoose");
let stateSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  countryname: {
    type: String,
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
  },
  population: {
    type: Number,
    require: true,
  },
  area: {
    type: String,
  },
  neighbouringState: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
    },
  ],
});
let State = mongoose.model("State", stateSchema);
module.exports = State;
