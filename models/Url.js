const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    isReviewed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Url", UrlSchema);
