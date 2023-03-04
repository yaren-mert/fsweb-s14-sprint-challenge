const db = require("../../data/dbConfig");

const checkPayloadAndProjectIdExist = async (req, res, next) => {
  let { project_id, task_description } = req.body;
  if (project_id === undefined || task_description === undefined) {
    next({
      status: 400,
      message: "Eksik alan var",
    });
  } else {
    let isExistProject = await db("projects")
      .where("project_id", project_id)
      .first();
    if (!isExistProject) {
      next({
        status: 400,
        message: "Böyle bir proje yok",
      });
    } else {
      next();
    }
  }
};

module.exports = { checkPayloadAndProjectIdExist };
