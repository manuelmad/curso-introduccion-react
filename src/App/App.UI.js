import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoSearch } from "../TodoSearch";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    totalTodos,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

    return(
        <React.Fragment>
        {<TodoCounter />}
        {<TodoSearch />}
          <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length && !!totalTodos) && <p>¡No hay ningún TODO que coincida con tu búsqueda!</p>}
            {(!loading && !totalTodos) && <p>¡Crea tu primer TODO!</p>}
          
            {searchedTodos.map(todo => (
              <TodoItem
              onDelete={()=>deleteTodo(todo.text)}
              onComplete={()=>completeTodo(todo.text)}
              key={todo.text}
              text={todo.text}
              completed={todo.completed}/>
              ))}
          </TodoList>
          
          {!!openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}

          
        {<CreateTodoButton
          openModal={openModal}
          setOpenModal={setOpenModal}
        />}
      </React.Fragment>
    );
}

export { AppUI };