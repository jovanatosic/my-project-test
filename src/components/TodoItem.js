import React from "react";

const TodoItem = ({completed, id, title, completeTodo, deleteTodo})=>{
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={event => completeTodo(id, event.target.checked)}
          />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          Delete
        </button>
      </li>
    );
}
export default TodoItem