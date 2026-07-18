const projects = [
  {
    id: 1,
    title: "Todo App",
    category: "React",
    completed: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "HTML CSS",
    completed: true,
  },
  {
    id: 3,
    title: "Router Practice",
    category: "React",
    completed: false,
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "React",
    completed: false,
  },
];

function findProjectById(items, projectId) {
  return items.find(
    (project) => project.id === projectId,
  );
}

function filterProjectsByCategory(
  items,
  category,
) {
  return items.filter(
    (project) => project.category === category,
  );
}

function filterIncompleteProjects(items) {
  return items.filter(
    (project) => project.completed === false,
  );
}

function searchProjectsByTitle(
  items,
  searchText,
) {
  const normalizedSearchText =
    searchText.trim().toLowerCase();

  return items.filter((project) =>
    project.title
      .toLowerCase()
      .includes(normalizedSearchText),
  );
}

console.log(
  "ID 3 olan proje:",
  findProjectById(projects, 3),
);

console.log(
  "React projeleri:",
  filterProjectsByCategory(
    projects,
    "React",
  ),
);

console.log(
  "Tamamlanmayan projeler:",
  filterIncompleteProjects(projects),
);

console.log(
  "'app' arama sonucu:",
  searchProjectsByTitle(
    projects,
    "app",
  ),
);