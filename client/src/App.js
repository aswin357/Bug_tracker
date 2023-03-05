import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateBug from "./components/CreateBug";
import EditBug from "./components/EditBug";
import BugList from "./components/BugList";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Bug Tracker</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Bugs</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Bug</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<BugList />} />
          <Route path="/edit/:id" element={<EditBug />} />
          <Route path="/create" element={<CreateBug />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

