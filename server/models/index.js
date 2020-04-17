const mongoose = require("mongoose");
const { dbURI } = require("../config");
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

require("./assistant");
require("./user");
