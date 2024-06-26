import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function AddSkill() {
  const [form, setForm] = useState({
    name: "",
    level:"",
  });
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

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newSkill = { ...form };

    axios.post("/add-skill", newSkill)
    .catch(error => {
      window.alert(error);
      return;
    });

    setForm({ name: "", level:""});
    navigate("/skills");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Skill</h3>
      <form onSubmit={onSubmit}>
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
          <label htmlFor="level">Level</label>
          <input
            type="text"
            className="form-control"
            id="level"
            value={form.level}
            onChange={(e) => updateForm({ level: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Skill"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
