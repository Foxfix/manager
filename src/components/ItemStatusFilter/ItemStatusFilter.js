import React, {Component} from 'react';

export default class IteStatusFilter extends Component {
  render () {
     return (
    <div className="btn-group" role="group">
      <button type="button" className="btn btn-info">All</button>
      <button type="button" className="btn btn-outline-secondary">Active</button>
      <button type="button" className="btn btn-outline-secondary">Done</button>
    </div>
  )
  }

};

