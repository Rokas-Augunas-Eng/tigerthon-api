const mongoose = require("mongoose");

const SearchTermSchema = new mongoose.Schema(
  {
    term: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SearchTerm", SearchTermSchema);
