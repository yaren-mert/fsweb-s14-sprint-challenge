// `/api/resources` router buraya
const router = require("express").Router();
const resourceModel = require("../resource/model");
const mw = require("../resource/middleware");

router.get("/", async (req, res, next) => {
  try {
    let allResources = await resourceModel.getAllResources();
    res.json(allResources);
  } catch (error) {
    next(error);
  }
});

router.post("/", mw.checkUniqueResourceName, async (req, res, next) => {
  try {
    if (!req.body.resource_name) {
      res.status(400).json({ message: "eksik alan var" });
    } else {
      let insertedData = await resourceModel.createResource(req.body);
      res.json(insertedData);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
