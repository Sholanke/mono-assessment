export const groupArrayBy = (items, field) => {
  const groupedItems = {};

  items.forEach((item) => {
    const value = item[field];

    if (groupedItems[value]) {
      groupedItems[value].push(item);
    } else {
      groupedItems[value] = [item];
    }
  });

  return groupedItems;
};

export const deleteItemById = (id, items) => {
  if (Array.isArray(items)) {
    const filteredItems = [...items]?.filter?.((item) => item.id !== id);
    return filteredItems;
  }
  return items;
};
