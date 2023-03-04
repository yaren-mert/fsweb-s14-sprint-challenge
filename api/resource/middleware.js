const db = require("../../data/dbConfig");

const checkUniqueResourceName = async function (req, res, next) {
  try {
    let { resource_name } = req.body;
    let isExist = await db("resources")
      .where("resource_name", resource_name)
      .first();
    if (isExist) {
      next({
        status: 400,
        message: "Aynı isimde resource var",
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = {
  checkUniqueResourceName,
};
