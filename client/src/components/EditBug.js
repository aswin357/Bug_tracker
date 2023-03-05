import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditBug = props => {
  const [bug, setBug] = useState({
    title: '',
    description: '',
    priority: '',
    status: '',
    createdBy: ''
  })

  useEffect(() => {
    axios.get('http://localhost:5000/bugs/'+props.match.params.id)
      .then(response => {
        setBug(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [props.match.params.id])

  const onChangeTitle = e => {
    setBug({...bug, title: e.target.value})
  }

  const onChangeDescription = e => {
    setBug({...bug, description: e.target.value})
  }

  const onChangePriority = e => {
    setBug({...bug, priority: e.target.value})
  }

  const onChangeStatus = e => {
    setBug({...bug, status: e.target.value})
  }

  const onChangeCreatedBy = e => {
    setBug({...bug, createdBy: e.target.value})
  }

  const onSubmit = e => {
    e.preventDefault();
    const updatedBug = {
      title: bug.title,
      description: bug.description,
      priority: bug.priority,
      status: bug.status,
      createdBy: bug.createdBy
    }
    
    axios.post('http://localhost:5000/bugs/update/'+props.match.params.id, updatedBug)
      .then(res => console.log(res.data));
    
    props.history.push('/');
  }

  return (
    <div>
      <h3>Edit Bug</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title: </label>
          <input type="text" required className="form-control" value={bug.title} onChange={onChangeTitle}/>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <textarea required className="form-control" value={bug.description} onChange={onChangeDescription}/>
        </div>
        <div className="form-group">
          <label>Priority: </label>
          <select required className="form-control" value={bug.priority} onChange={onChangePriority}>
            <option value=""></option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="form-group">
          <label>Status: </label>
          <select required className="form-control" value={bug.status} onChange={onChangeStatus}>
            <option value=""></option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <div className="form-group">
          <label>Created By: </label>
          <input type="text" required className="form-control" value={bug.createdBy} onChange={onChangeCreatedBy}/>
        </div>
        <div className="form-group">
          <input type="submit" value="Update Bug" className="btn btn-primary"/>
        </div>
      </form>
    </div>
  )
}

export default EditBug;
