import React, {Component} from 'react';
import "./SearchPanel.css"

export default class SearchPanel extends Component {
  state = {
    term: ''
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <input className="Search-input form-control"
             placeholder="search"
             value={this.state.term}
             onChange={this.onSearchChange}/>
      )
  }
}

