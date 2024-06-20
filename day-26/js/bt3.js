function nestCategories(categories) {
  const map = {};

  const result = [];

  categories.forEach((category) => {
    if (!map[category.id]) {
      map[category.id] = { ...category, children: [] };
    } else {
      map[category.id] = { ...category, children: map[category.id].children };
    }

    const item = map[category.id];

    if (category.parent === 0) {
      result.push(item);
    } else {
      if (!map[category.parent]) {
        map[category.parent] = { id: category.parent, children: [] };
      }
      map[category.parent].children.push(item);
    }
  });

  return result;
}

const categories = [
  { id: 1, name: "Chuyên mục 1", parent: 0 },
  { id: 2, name: "Chuyên mục 2", parent: 0 },
  { id: 3, name: "Chuyên mục 3", parent: 0 },
  { id: 4, name: "Chuyên mục 2.1", parent: 2 },
  { id: 5, name: "Chuyên mục 2.2", parent: 2 },
  { id: 6, name: "Chuyên mục 2.3", parent: 2 },
  { id: 7, name: "Chuyên mục 3.1", parent: 3 },
  { id: 8, name: "Chuyên mục 3.2", parent: 3 },
  { id: 9, name: "Chuyên mục 3.3", parent: 3 },
  { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
  { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
];

const nestedCategories = nestCategories(categories);
console.log(JSON.stringify(nestedCategories, null, 2));
