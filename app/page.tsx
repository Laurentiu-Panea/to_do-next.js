"use client";
import { useEffect, useState } from "react";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  useEffect(() => {
    if (input === "") return setIsInputEmpty(true);
    else setIsInputEmpty(false);
  }, [input]);

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="introdu un task"
      />
      {!isInputEmpty ? (
        <button className={styles.button} onClick={addTodo}>
          Adauga
        </button>
      ) : (
        ""
      )}

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button
              className={styles.button_stergere}
              onClick={() => deleteTodo(index)}
            >
              Șterge
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
