// `/api/tasks` router buraya
const router = require("express").Router();
const taskModel = require("../task/model");
const mw = require("../task/middleware");

router.get("/", async (req, res, next) => {
  try {
    let allTasks = await taskModel.getAllTasks();
    res.json(allTasks);
  } catch (error) {
    next(error);
  }
});

router.post("/", mw.checkPayloadAndProjectIdExist, async (req, res, next) => {
  try {
    let insertedData = await taskModel.createTask(req.body);
    res.json(insertedData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
