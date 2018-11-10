import React, {Component} from 'react';
import "./TodoListItem.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    })
  };

  onImportantClick = () => {
    this.setState((prevState) => {
      return {important: !prevState.important}
    });
  };

  render() {
    const {label = false} = this.props;

    const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done"
    }

    if (important) {
      classNames += " important"
    }

    return (
     <span className={classNames}>
      <span
        onClick={this.onLabelClick}
        className="todo-list-item-label"
        >{label}
    </span>

    <button type="button" className="btn btn-outline-danger btn-sm float-right"><i className="fa fa-trash-o"
                                                                                   aria-hidden="true"></i></button>
      <button
        onClick={this.onImportantClick}
        type="button"
        className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation"></i>
      </button>
    </span>

    )
  }
}
