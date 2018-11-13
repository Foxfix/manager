import React, { Component } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import TodoList from '../TodoList/TodoList';
import SearchPanel from '../SearchPanel/SearchPanel';
import IteStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import NewItem from '../NewItem/NewItem';
import './App.css';


export default class App  extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Work"),
      this.createTodoItem("Get rest")
    ],
    term: ''
  };

  createTodoItem(label) {
    return{
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newTodoData = [...todoData.slice(0, idx), ...todoData.slice(idx+1)];
      return {
        todoData: newTodoData
      }
    }
    )
  };

  addedItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({todoData}) => {
        const newTodoItem = [...todoData];
        newTodoItem.push(newItem);
        return { todoData: newTodoItem};
      }
    );
  };

  toggleProperty(arr, id, propName) {
    //find index element
    const idx = arr.findIndex((el) => el.id === id);
    //update object
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    //construct new array
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      }
    })
  };

  onToggleImportant = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, "important")
        }
      })
  };

  searched(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.label
        .toLowerCase()
        .indexOf(term) > -1;
    })
  };

  onSearchChange = (term) => {
    this.setState({term})
  };

  render (){
    const { todoData, term } = this.state;
    const visibleItems = this.searched(todoData, term);
    const doneCount = todoData.filter(item => item.done).length;
    const todoCount = todoData.length - doneCount;
     return (
    <div className="index">
    <AppHeader toDo={todoCount} Done={doneCount}/>
      <div className="indexSearch d-flex">
        <SearchPanel onSearchChange={this.onSearchChange}/>
        <IteStatusFilter/>
      </div>
      <TodoList
        todos={visibleItems}
        onDeleted={this.deleteItem}
        onToggleImportant={this.onToggleImportant}
        onToggleDone={this.onToggleDone}
      />
      <NewItem
        onAdded={this.addedItem}
      />

  </div>
  );
  }
}
