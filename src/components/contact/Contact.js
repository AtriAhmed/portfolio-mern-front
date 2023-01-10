import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message:"",
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
    
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newEmail = { ...form };
        axios.post("/send-email",newEmail).then((res)=>{
            if(res.status == 200){
                setForm({ name: "", email: "", subject: "", message:"", });
                Swal.fire("Success","Email sent","success")  
            }else{
                Swal.fire("Error","Sorry your email is not sent, try again later or send an email to atriahmed.1999@gmail.com","error")
            }
            
        }).catch((error)=>{
            alert(error)
        })
    
      }
    
      // This following section will display the form that takes the input from the user.
      return (
        <div className='container'>
          <h3>Send an Email</h3>
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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={form.email}
                onChange={(e) => updateForm({ email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                value={form.subject}
                onChange={(e) => updateForm({ subject: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                value={form.message}
                onChange={(e) => updateForm({ message: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Send Email"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      );
}
