import React, {Component} from 'react';
import './NewItem.css'

export default class NewItem extends Component {
  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.label)
  };

  render() {
    return (
      <form className="NewItem d-flex"
      onSubmit={this.onSubmit}>
        <input type="text" className="form-control"
          onChange={this.onLabelChange}
               placeholder="What I have to do ..."/>
        <button
          className="btn btn-info  float-right">
          Add new task
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>

      </form>
    )
  }
};
