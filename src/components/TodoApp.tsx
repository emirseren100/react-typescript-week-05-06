import {
  useState,
  type FormEvent,
} from "react";

import "./TodoApp.css";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const initialTodos: Todo[] = [
  {
    id: 1,
    title: "React Router konusunu tekrar et",
    completed: true,
  },
  {
    id: 2,
    title: "Todo state mantığını öğren",
    completed: false,
  },
  {
    id: 3,
    title: "Array filter pratiği yap",
    completed: false,
  },
];

function TodoApp() {
  const [todos, setTodos] =
    useState<Todo[]>(initialTodos);

  const [newTodoTitle, setNewTodoTitle] =
    useState("");

  function handleAddTodo(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const trimmedTitle = newTodoTitle.trim();

    if (!trimmedTitle) {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      title: trimmedTitle,
      completed: false,
    };

    setTodos((previousTodos) => [
      ...previousTodos,
      newTodo,
    ]);

    setNewTodoTitle("");
  }

  function handleToggleTodo(todoId: number) {
    setTodos((previousTodos) =>
      previousTodos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    );
  }

  function handleDeleteTodo(todoId: number) {
    setTodos((previousTodos) =>
      previousTodos.filter(
        (todo) => todo.id !== todoId,
      ),
    );
  }

  return (
    <section
      className="todo-app"
      aria-labelledby="todo-app-title"
    >
      <div className="todo-heading">
        <p className="route-eyebrow">
          Week 06 Todo Practice
        </p>

        <h2 id="todo-app-title">
          Todo Uygulaması
        </h2>

        <p>
          Görev ekle, tamamlandı olarak işaretle veya
          listeden sil.
        </p>
      </div>

      <form
        className="todo-form"
        onSubmit={handleAddTodo}
      >
        <label
          className="visually-hidden"
          htmlFor="new-todo"
        >
          Yeni görev
        </label>

        <input
          id="new-todo"
          type="text"
          value={newTodoTitle}
          onChange={(event) =>
            setNewTodoTitle(event.target.value)
          }
          placeholder="Yeni bir görev yaz..."
          autoComplete="off"
          required
        />

        <button type="submit">
          Ekle
        </button>
      </form>

      {todos.length === 0 ? (
        <p className="todo-empty">
          Henüz görev bulunmuyor.
        </p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="todo-item"
            >
              <div className="todo-content">
                <input
                  id={`todo-${todo.id}`}
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =>
                    handleToggleTodo(todo.id)
                  }
                />

                <label
                  htmlFor={`todo-${todo.id}`}
                  className={
                    todo.completed
                      ? "todo-title todo-title-completed"
                      : "todo-title"
                  }
                >
                  {todo.title}
                </label>
              </div>

              <button
                className="todo-delete-button"
                type="button"
                onClick={() =>
                  handleDeleteTodo(todo.id)
                }
                aria-label={`${todo.title} görevini sil`}
              >
                Sil
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default TodoApp;