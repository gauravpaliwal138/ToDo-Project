import React from "react";

function ToDoList(props){

    return(
     <>
     <div className="set">
     <li>{props.text}</li>
      <button className="enter">Edit</button>
      <button className="enter" onClick={()=>props.onSelect(props.id)}>Remove</button>
     </div>



     {/* <ol> */}
          {/* {Items.map((itemVal) => {
            return <li>{itemVal}</li>;
          })} */} 
          {/* {list} */}
        {/* </ol> */}
        </>
    )
}

export default ToDoList