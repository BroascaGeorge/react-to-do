import React from "react";

function TodoList(props) {
  const { newInput, items, addItem, deleteItem, updateNewInput } = props;

  const handleInputChange = (e) => {
    updateNewInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add an item"
        value={newInput}
        onChange={handleInputChange}
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.value} <button onClick={() => deleteItem(item.id)}>🗙</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
