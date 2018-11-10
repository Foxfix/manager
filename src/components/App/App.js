import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import TodoList from '../TodoList/TodoList';
import SearchPanel from '../SearchPanel/SearchPanel';
import IteStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import './App.css';


const App = () => {
  const todoData = [
    {label: "Drink coffee", important: false, id: 1},
    {label: "Get the job", important: true, id: 2},
    {label: "Learn React", important: true, id: 3}
  ];

  const performance = {
    todo: 5,
    done: 2
  };

  return (
    <div className="index">
    <AppHeader toDo={performance.todo} Done={performance.done}/>
      <div className="d-flex">
        <SearchPanel/>
        <IteStatusFilter/>
      </div>
      <TodoList todos={todoData}/>

  </div>
  );
};

export default App;
