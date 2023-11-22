import { useState } from "react";
import ListItem from "./ListItem";
import Input from "./Input";
import "../css/App.css";

function App() {
  const [liste, setListe] = useState([]);
  const [newItem, setNewItem] = useState("");

  function handleChange(e) {
    const text = e.target.value;
    setNewItem(text);
  }
  function handleClick() {
    newItem ? setListe((prevItem) => [...prevItem, newItem]) : null;
  }
  function deleteItem(e) {
    const todo = e.target.parentElement;

    todo.style.display = "none"
    setTimeout(todo.remove(),1000)
    
  }

  const icon = <i onClick={deleteItem} className="fa-solid fa-trash-can"></i>;

  return (
    <div className="container">
        <Input handleChange={handleChange} handleClick={handleClick} />
        <ListItem liste={liste} icon={icon} />
    </div>
  );
}

export default App;
