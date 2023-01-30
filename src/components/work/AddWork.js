import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';
import Swal from 'sweetalert2'

export default function AddWork() {
  const [form, setForm] = useState({
    name: "",
    description:"",
    technologies:"",
    link:"",
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
            formData.append('link',form.link);
            axios.post('/add-work',formData).then(res=>{
                alert(JSON.stringify(res))
            })
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Work</h3>
      <form onSubmit={onSubmit} encType='mutlipart/form-data'>
        <div className="">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className=""
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        
        <div className="">
          <label htmlFor="description">Description</label>
          <textarea
            className=""
            id="description"
            value={form.description}
            onChange={(e) => updateForm({ description: e.target.value })}
          />
        </div>
        <div className="">
          <label htmlFor="technologies">Technologies</label>
          <input
            type="text"
            className=""
            id="technologies"
            value={form.technologies}
            onChange={(e) => updateForm({ technologies: e.target.value })}
          />
        </div>
        <div className="">
          <label htmlFor="link">Link</label>
          <input
            type="text"
            className=""
            id="link"
            value={form.link}
            onChange={(e) => updateForm({ link: e.target.value })}
          />
        </div>
        <div className="mb-3">
                              <label>image</label>
                              <input type="file" name="image" onChange={handleImage} className="form-control"/>
                          </div>
        <div className="">
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
