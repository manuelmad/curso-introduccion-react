import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoSearch } from "../TodoSearch";

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return(
        <React.Fragment>
        {<TodoCounter total={totalTodos} completed={completedTodos} />}
        {<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>}
        {<TodoList>
          {searchedTodos.map(todo => (
          <TodoItem
          onDelete={()=>deleteTodo(todo.text)}
          onComplete={()=>completeTodo(todo.text)}
          key={todo.text}
          text={todo.text}
          completed={todo.completed}/>
          ))}
        </TodoList>}
        {<CreateTodoButton />}
      </React.Fragment>
    );
}

export { AppUI };