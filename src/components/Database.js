import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router';

class Database extends Component {
  render() {
    return (
      <div className="Database">
        <div className="slds-grid slds-wrap">
          <nav className="slds-col slds-size--1-of-1">
            <Header title="Database" />
          </nav>
          <main className="slds-col slds-size--1-of-2">
            <h2>Tables</h2>
            <ul>
              <li><Link to="/card">card</Link></li>
              <li><Link to="/cardset">cardset</Link></li>
            </ul>
            Image
          </main>
          <aside className="slds-col slds-size--1-of-2">
            Tab Component
          </aside>
          <section className="slds-col slds-size--1-of-1">
            Card Component
          </section>
        </div>
      </div>
    );
  }
}

export default Database;
