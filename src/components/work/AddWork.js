import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';
import Swal from 'sweetalert2'

export default function AddWork() {
  const [form, setForm] = useState({
    name: "",
    description:"",
    technologies:"",
  });
  const [picture, setPicture] = useState([]);

  const handleImage = (e)=>{
    e.persist();
    setPicture({image:e.target.files[0]})
}

  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

const formData= new FormData();
            formData.append('image',picture.image);
            formData.append('name',form.name);
            formData.append('description',form.description);
            formData.append('technologies',form.technologies);
            axios.post('/add-work',formData).then(res=>{
                alert(JSON.stringify(res))
            })
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Work</h3>
      <form onSubmit={onSubmit} encType='mutlipart/form-data'>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={form.description}
            onChange={(e) => updateForm({ description: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="technologies">Technologies</label>
          <input
            type="text"
            className="form-control"
            id="technologies"
            value={form.technologies}
            onChange={(e) => updateForm({ technologies: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
                              <label>image</label>
                              <input type="file" name="image" onChange={handleImage} className="form-control"/>
                          </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create work"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
