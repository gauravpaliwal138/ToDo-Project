import "./App.css";
import ToDoList from "./ToDoList";
import React, { useState } from "react";

function App() {
  const [list, setList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setList(event.target.value);
  };

  const listOfItems = () => {
    if (list !== "") {
      setItems((oldItems) => {
        return [...oldItems, list];
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      listOfItems();
      document.getElementsByClassName("input")[0].value = "";
      setList("");
    }
  };
  const remove = (id) => {
    console.log("deleted")
 
    setItems((oldItems)=>{
      return oldItems.filter((arrEle,index)=>{
        return index !== id;  
      })
    })
  };
  // const Edit=()=>{
  //   console.log("editing")
  //   {Items.filter((itemVal, index) => {
  //     document.getElementsByClassName("input")[index].value = itemVal;
  //     return <ToDoList key={index} id={index} text={itemVal} onSelect={remove}/>;
  //   })}
    
  // }

  function handleClick() {
    return (
      <>
        {listOfItems()}
        {console.log(Items)}
        {console.log((document.getElementsByClassName("input")[0].value = ""))}
        {setList("")}
      </>
    );
  }

  return (
    <div className="bc">
      <div className="main">
        <div className="heading">ToDo List</div> 
        <input
          type="text"
          className="input"
          placeholder="Enter the task"
          onChange={itemEvent}
          onKeyDown={handleKeyDown}
        />
        <button className="enter" onClick={handleClick}>
          Add
        </button>
        <ol>
          {Items.map((itemVal, index) => {
            // return <li>{itemVal}</li>;
            return <ToDoList key={index} id={index} text={itemVal} onSelect={remove}/>;
          })}
          {/* {list} */}
        </ol>
      </div>
    </div>
  );
}

export default App;
