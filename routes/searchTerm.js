const SearchTerm = require("../models/SearchTerm");
const router = require("express").Router();

// CREATE
router.post("/", async (req, res) => {
  const newSearchTerm = new SearchTerm(req.body);

  try {
    const savedSearchTerm = await newSearchTerm.save();
    res.status(201).json(savedSearchTerm);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedSearchTerm = await SearchTerm.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedSearchTerm);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// DELETE
router.delete("/find/:id", async (req, res) => {
  try {
    await SearchTerm.findByIdAndDelete(req.params.id);
    res.status(200).json("SearchTerm has been deleted.");
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// // GET ONE SearchTerm
router.get("/find/:id", async (req, res) => {
  try {
    const searchTerm = await SearchTerm.findById(req.params.id);
    res.status(200).json(searchTerm);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // GET ALL SearchTermS
router.get("/", async (req, res) => {
  try {
    const searchTerms = await SearchTerm.find();
    res.status(200).json(searchTerms);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
