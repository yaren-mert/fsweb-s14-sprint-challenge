// bu`Task` modeli buraya
const db = require("../../data/dbConfig");
const getAllTasks = async function () {
  let allTasksFromDb = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );

  let allTasks = allTasksFromDb.map((t) => {
    return { ...t, task_completed: t.task_completed == 1 };
  });
  return allTasks;
};

const createTask = async function (model) {
  const [insertedTaskId] = await db("tasks").insert(model);
  const insertedEntity = await db("tasks")
    .where("task_id", insertedTaskId)
    .first();

  return {
    ...insertedEntity,
    task_completed: insertedEntity.task_completed == 1,
  };
};

module.exports = {
  getAllTasks,
  createTask,
};
