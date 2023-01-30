import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import AnimatedLetters from '../Animations/AnimatedLetters';

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
    axios.post("/send-email", newEmail).then((res) => {
      if (res.status == 200) {
        setForm({ name: "", email: "", subject: "", message: "", });
        Swal.fire("Success", "Email sent", "success")
      } else {
        Swal.fire("Error", "Sorry your email is not sent, try again later or send an email to atriahmed.1999@gmail.com", "error")
      }

    }).catch((error) => {
      alert(error)
    })

  }

  // This following section will display the form that takes the input from the user.
  return (
    <div className='max-w-xl mx-auto'>
      <h1 className='text-7xl font-bold mb-36 mt-36'><AnimatedLetters word="Contact me!" /></h1>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <input
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="name" type="text" placeholder="Name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <input
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="email" type="email" placeholder="Email"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <input
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="subject" type="text" placeholder="Subject"
            value={form.subject}
            onChange={(e) => updateForm({ subject: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <textarea
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Message"
            id="message"
            value={form.message}
            onChange={(e) => updateForm({ message: e.target.value })}
          />
        </div>
        <div className="text-center pt-1 mb-12 pb-1">
          <button
            className="bg-black inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
            type="submit"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"

          >
            Send
          </button>

        </div>
      </form>
    </div>
  );
}
