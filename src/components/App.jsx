import React from "react";
import TodoItem from "./TodoItem";

function App() {
  const [text, setText] = React.useState("");
  const [items, setItems] = React.useState([]);

  function handleChange(event){
    const newText = event.target.value;
    setText(newText);
  }

  function handleClick(){
    setItems(prevItem => {
      return[
        ...prevItem,
        text
      ];
    })
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
        onChange={handleChange}
        type="text"
        value={text}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => (
            <TodoItem text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}


export default App;
