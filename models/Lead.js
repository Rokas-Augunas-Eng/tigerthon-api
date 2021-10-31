const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema(
  {
    links: { type: Array, required: true },
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

module.exports = mongoose.model("Lead", LeadSchema);
