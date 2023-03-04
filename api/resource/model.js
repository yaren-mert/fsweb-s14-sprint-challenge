// `Resource` modeli buraya
const db = require("../../data/dbConfig");

const getAllResources = async function () {
  let allResources = await db("resources");
  return allResources;
};

const createResource = async function (model) {
  const [insertedResourceId] = await db("resources").insert(model);
  const insertedRecord = await db("resources")
    .where("resource_id", insertedResourceId)
    .first();
  return insertedRecord;
};

module.exports = {
  getAllResources,
  createResource,
};
