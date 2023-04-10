import { useReducer, useState } from "react";
import "./App.css";

const initialState = {
  newInput: "",
  items: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.newInput) {
        alert("Please add an item");
        return state;
      }
      const item = {
        id: Math.floor(Math.random() * 1000),
        value: state.newInput,
      };
      return {
        ...state,
        newInput: "",
        items: [...state.items, item],
      };
    case "DELETE_ITEM":
      const newArray = state.items.filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: newArray,
      };
    case "UPDATE_NEW_INPUT":
      return {
        ...state,
        newInput: action.payload,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = () => {
    dispatch({ type: "ADD_ITEM" });
  };

  const deleteItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  return (
    <div className="App">
      {/* 1. Header   */}

      <h3>To-do list</h3>

      {/* 2. Input   */}

      <input
        type="text"
        placeholder="Add an item"
        value={state.newInput}
        onChange={(e) =>
          dispatch({ type: "UPDATE_NEW_INPUT", payload: e.target.value })
        }
      ></input>
      <button onClick={addItem}>Add</button>

      {/* 3. List items */}
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.value} <button onClick={() => deleteItem(item.id)}>🗙</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
