const Lead = require("../models/Lead");
const router = require("express").Router();

// CREATE
router.post("/", async (req, res) => {
  const newLead = new Lead(req.body);

  try {
    const savedLead = await newLead.save();
    res.status(201).json(savedLead);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedLead);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// DELETE
router.delete("/find/:id", async (req, res) => {
  try {
    await Lead.findByIdAndUDelete(req.params.id);
    res.status(200).json("Lead has been deleted.");
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// // GET ONE LEAD
router.get("/find/:id", async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    res.status(200).json(lead);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // GET ALL LEADS
router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find();
    res.status(200).json(leads);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
