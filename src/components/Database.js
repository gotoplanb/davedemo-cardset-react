import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router';

class Database extends Component {
  render() {
    return (
      <div className="Database">
        <Header title="Database" />
        <h2>Tables</h2>
        <ul>
          <li><Link to="/card">card</Link></li>
          <li><Link to="/cardset">cardset</Link></li>
        </ul>
      </div>
    );
  }
}

export default Database;
