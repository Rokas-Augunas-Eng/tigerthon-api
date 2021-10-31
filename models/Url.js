const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    isReviewed: { type: Boolean, default: false },
    animal: { type: String },
    bodyParts: { type: Array },
    location: {
      country: { type: String },
      region: { type: String },
      state: { type: String },
      city: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Url", UrlSchema);
