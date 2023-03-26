import { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!newItem) {
      alert("Enter an item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  };

  const deleteItem = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h3>To do list</h3>

      {/* 2. Input  */}
      <input
        type="text"
        placeholder="Add an item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add</button>

      {/* 3. List items */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.value}{" "}
            <button className="delete-btn" onClick={() => deleteItem(item.id)}>
              🗙
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
