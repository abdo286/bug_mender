import React from "react";

const SortSelect = ({ sorting, onChange }) => {
  return (
    <select
      className="ml-2 p-2 border border-green-500 rounded-md bg-white"
      value={sorting}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">None</option>
      <option value="title">Title A-Z</option>
      <option value="-title">Title Z-A</option>
      <option value="developer">Developer A-Z</option>
      <option value="-developer">Developer Z-A</option>
      <option value="status">Status A-Z</option>
      <option value="-status">Status Z-A</option>
      <option value="priority">Priority A-Z</option>
      <option value="-priority">Priority Z-A</option>
      <option value="date">Date Oldest</option>
      <option value="-date">Date Latest</option>
    </select>
  );
};

export default SortSelect;
