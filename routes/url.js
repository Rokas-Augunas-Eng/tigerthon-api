const Url = require("../models/Url");
const router = require("express").Router();

// CREATE
router.post("/", async (req, res) => {
  const newUrl = new Url(req.body);

  try {
    const savedUrl = await newUrl.save();
    res.status(201).json(savedUrl);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedUrl = await Url.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUrl);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// DELETE
router.delete("/find/:id", async (req, res) => {
  try {
    await Url.findByIdAndUDelete(req.params.id);
    res.status(200).json("Url has been deleted.");
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// // GET ONE URL
router.get("/find/:id", async (req, res) => {
  try {
    const url = await Url.findById(req.params.id);
    res.status(200).json(url);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // GET ALL URLS
router.get("/", async (req, res) => {
  try {
    const urls = await Url.find();
    res.status(200).json(urls);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
