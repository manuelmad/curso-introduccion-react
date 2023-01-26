import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoSearch } from "../TodoSearch";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

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
            {error && <TodosError error={error}/>}
            {loading && <TodosLoading />}
            {(!loading && !searchedTodos.length && !!totalTodos) && <p>¡No hay ningún TODO que coincida con tu búsqueda!</p>}
            {(!loading && !totalTodos) && <EmptyTodos />}
          
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