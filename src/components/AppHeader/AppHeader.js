import React from 'react';
import './AppHeader.css'

const AppHeader = ({toDo, Done}) => {
  return (
    <div className="app-header d-flex">
      <h1>My todo list</h1>
      <h2>{toDo} more to do, {Done} done</h2>
    </div>
  )
};

export default AppHeader;
