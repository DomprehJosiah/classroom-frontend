const DEPARTMENTS = [
  "Computer Science",
  "Statistics",
  "Hospitality",
  "Artificial Intelligence",
];

export const DEPARTMENTS_OPTIONS = DEPARTMENTS.map((dept) => ({
  label: dept,
  value: dept.toLowerCase().replace(/\s+/g, "-"),
}));
