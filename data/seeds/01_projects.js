/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  const defaultProjects = [
    {
      project_name: "React Ekran Tasarlama",
      project_description:
        "React kütüphanesi kullanılarak bootstrap css kütüphanesini dahil edip form tasarla",
    },
    {
      project_name: "Kitaplık Uygulaması",
      project_description: "Flutter ile kitaplık uygulaması yapımı",
    },
  ];
  const defaultResources = [
    {
      resource_name: "Github",
      resource_description: "Github Documentation pages",
    },
    {
      resource_name: "Google",
      resource_description: "Flutter official page",
    },
  ];
  const defaultTasks = [
    {
      task_description: "react form component oluştur",
      task_notes:
        "react bootstrap kütüphanesini indir, bootstrap form ekranı tasarla",
      project_id: 1,
    },
    {
      task_description: "react form validasyonu yap",
      task_notes: "forma girilen değerlerin react tarafında validasyonunu yap",
      project_id: 1,
    },
    {
      task_description: "flutter arayüzü oluştur",
      task_notes:
        "flutter componentlerinden grid ve card componentini ana sayfaya ekle",
      project_id: 2,
    },
  ];
  const defaultProjects_Resources = [
    { project_id: 1, resource_id: 1 },
    { project_id: 2, resource_id: 1 },
    { project_id: 2, resource_id: 2 },
  ];

  await knex("projects").insert(defaultProjects);
  await knex("resources").insert(defaultResources);
  await knex("tasks").insert(defaultTasks);
  await knex("project_resources").insert(defaultProjects_Resources);
};
