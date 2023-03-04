/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (t) => {
      t.increments("project_id");
      t.string("project_name").notNullable();
      t.string("project_description");
      t.boolean("project_completed").defaultTo(false);
    })
    .createTable("resources", (t) => {
      t.increments("resource_id");
      t.string("resource_name").notNullable().unique();
      t.string("resource_description");
    })
    .createTable("tasks", (t) => {
      t.increments("task_id");
      t.string("task_description").notNullable();
      t.string("task_notes");
      t.boolean("task_completed").defaultTo(false);

      //İlişki belirtiyoruz
      t.integer("project_id")
        .notNullable()
        .unsigned()
        .references("project_id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("project_resources", (t) => {
      t.increments("project_resourceid");
      t.integer("resource_id")
        .notNullable()
        .unsigned()
        .references("resource_id")
        .inTable("resources");
      t.integer("project_id")
        .notNullable()
        .unsigned()
        .references("project_id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources");
};
