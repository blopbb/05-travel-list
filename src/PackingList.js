import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDelete, onToggleItem, onDeleteAll }) {
  const [sort, setSort] = useState("input");

  var newItems;

  if (sort === "input") {
    newItems = items;
  } else if (sort === "description") {
    newItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    newItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {newItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelete={onDelete}
            onToggleItem={onToggleItem}
          ></Item>
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={onDeleteAll}>Clear List</button>
      </div>
    </div>
  );
}
