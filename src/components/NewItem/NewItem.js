import React from 'react';
import './NewItem.css'

const NewItem = (props) => (
  <div>
    <input />
    <button
      type="button"
      className=" NewItem btn btn-info btn-sm float-right"
      onClick={() => props.onAdded("kjhgkjhgk")}
    >
      Add new task
      <i className="fa fa-plus" aria-hidden="true"></i>
    </button>
  </div>

);

export default NewItem;
