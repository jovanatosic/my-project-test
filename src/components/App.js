import { useState } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Phones from "./Phones/Phones";
import Cart from "./Cart/Cart";
import CartProvider from "../context/CartProvider";

const App = () => {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }
  const completeTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Phones />
      </main>
      <div className={"form"}>
        <TodoForm onSubmit={addTodo} />
        <h1 className="header">ToDo List</h1>
        <TodoList
          todos={todos}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      </div>
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </CartProvider>
  );
};

export default App;
