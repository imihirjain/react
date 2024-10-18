const todoKey = "reactTodo";
export const getDataLocalStorage = () => {
  const rawTodos = localStorage.getItem(todoKey);
  if (!rawTodos) return [];
  return JSON.parse(rawTodos);
};

export const setDataLocalStorage = (task) => {
  localStorage.setItem(todoKey, JSON.stringify(task));
};
