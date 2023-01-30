import React, { useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";

export default function AddWork() {
  const [form, setForm] = useState({
    name: ""
  });


  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
            
            const data = {...form}

            axios.post('/add-type',data).then(res=>{
                Swal.fire("Success",res.data,"success")
            })
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Type</h3>
      <form onSubmit={onSubmit}>

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
          <input
            type="submit"
            value="Create type"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
