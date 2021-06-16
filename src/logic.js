// UI COLOR LOGIC
export const colorLogic = (() => {
  // UI color logic
  const getColor = (arr, i) => {
    let color;
    if (arr[i].priority === 'low') {
      color = 'success';
    } else if (arr[i].priority === 'medium') {
      color = 'info';
    } else {
      color = 'danger';
    }
    return color;
  };

  const buttonColor = (color) => {
    let btnEdit;
    let btnDelete;
    if (color === 'success' || color === 'info') {
      btnEdit = 'warning';
      btnDelete = 'danger';
    }
    if (color === 'danger') {
      btnEdit = 'primary';
      btnDelete = 'warning';
    }
    return [btnEdit, btnDelete];
  };

  const allTasks = (projectArr) => {
    const allProjects = [];

    for (let i = 0; i < projectArr.length; i += 1) {
      allProjects.push(...projectArr[i].tasks);
    }
    return allProjects;
  };
  return { getColor, buttonColor, allTasks };
})();

export default { colorLogic };