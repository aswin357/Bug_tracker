import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Bug = (props) => (
  <tr>
    <td>{props.bug.username}</td>
    <td>{props.bug.description}</td>
    <td>{props.bug.duration}</td>
    <td>{props.bug.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.bug._id}>edit</Link> | <a href="#" onClick={() => { props.deleteBug(props.bug._id) }}>delete</a>
    </td>
  </tr>
)

const BugList = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/bugs/')
      .then(response => {
        setBugs(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const deleteBug = (id) => {
    axios.delete('http://localhost:5000/bugs/'+id)
      .then(response => { console.log(response.data)});
    setBugs(bugs.filter(el => el._id !== id));
  }

  const bugList = () => {
    return bugs.map(currentbug => {
      return <Bug bug={currentbug} deleteBug={deleteBug} key={currentbug._id}/>;
    })
  }

  return (
    <div>
      <h3>Bug List</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { bugList() }
        </tbody>
      </table>
      <div>
        <Link to="/create">Create New Bug</Link>
      </div>
    </div>
  );
}

export default BugList;
