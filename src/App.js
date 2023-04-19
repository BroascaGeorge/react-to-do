import { useReducer } from "react";
import "./App.css";
import Header from "./Header";
import TodoList from "./TodoList";

const initialState = {
  newInput: "",
  items: [],
};

const reducer = (state, action) => {
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
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = () => {
    dispatch({ type: "ADD_ITEM" });
  };

  const deleteItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  const updateNewInput = (value) => {
    dispatch({ type: "UPDATE_NEW_INPUT", payload: value });
  };

  return (
    <div className="App">
      <Header />
      <TodoList
        newInput={state.newInput}
        items={state.items}
        addItem={addItem}
        deleteItem={deleteItem}
        updateNewInput={updateNewInput}
      />
    </div>
  );
}

export default App;
