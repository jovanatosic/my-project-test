import React from "react";
import { useState } from "react";

const TodoForm = (props) =>{
    const [newItem, setNewItem] = useState("");

    const submitHandler = (event) => {
      event.preventDefault();
      if(newItem === "") return

      props.onSubmit(newItem)

      setNewItem("");
    }

    const changeHandler = (event) => {
      setNewItem(event.target.value);
    }

    return(
    <form onSubmit={submitHandler} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} onChange={changeHandler} type="text" id= "item" />
      </div>
      <button className="btn">Add</button>
    </form>
    )
}
export default TodoForm