import { useEffect, useState } from "react";
import "./App.css";
import NewItem from "./components/NewItem/NewItem";
import TodoList from "./components/TodoList/TodoList";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const App = () => {
  const [list, setList] = useState([]);
  const [editState, setEditState] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/list")
      .then((res) => {
        res.json().then((json) => {
          console.log(json);
          setList(json);
        });
      })
      .catch(() => {
        console.log("Network Error!");
      });
  }, []);

  const deleteItem = (id) => {
    const filteredList = list.filter((item) => item.id !== id);
    setList([...filteredList]);
  };

  const triggerEdit = (item) => {
    setEditState(item);
  };

  const editItem = (updatedItem) => {
    const updatedList = list.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setList([...updatedList]);
  };

  const addItem = (item) => {
    item.id = nanoid();
    fetch("http://localhost:3000/api/v1/list", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then(() => {
      setList((prev) => [item, ...prev]);
      toast.success("Added successfully!");
    });
  };

  return (
    <div className="app">
      <h1 className="title">Todo List</h1>
      <NewItem addItem={addItem} editState={editState} editItem={editItem} />
      <TodoList list={list} deleteItem={deleteItem} triggerEdit={triggerEdit} />
    </div>
  );
};

export default App;
