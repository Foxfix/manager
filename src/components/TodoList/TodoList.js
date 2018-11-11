import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList= ({ todos, onDeleted,
                 onToggleImportant,
                 onToggleDone}) => {
  const elements = todos.map((item, index) => {
    const {id, ...todoProps} = item;
    return (
       <li key={id} className="list-group-item">
         <TodoListItem
           {...todoProps}
           onDeleted={() => onDeleted(id)}
           onToggleImportant={() => onToggleImportant(id)}
           onToggleDone={() => onToggleDone(id)}
         />
       </li>
    )
  });
  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
};

export default TodoList;
