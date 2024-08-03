import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import AnimatedLetters from '../../Animations/AnimatedLetters';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Input from '../../Input';
import TextArea from '../../TextArea';
import Button from '../../Button';
import ThreeJSScene from '../ThreeJSScene';

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

  return (
    <div id="contact" className='min-h-screen flex justify-center items-center my-20'>
      <div className='w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2'>
        <AnimationOnScroll className='col-span-1 w-full flex flex-col gap-8  bg-primary p-8' animateIn="animate__slideInLeft" duration={2}>
          <div className='uppercase text-secondary font-bold text-xl'>I would love to hear from you</div>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-black'><AnimatedLetters word="Contact." /></h1>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <Input
                label="Your Name"
                placeholder="What's your name?"
                value={form.name}
                onChange={(e) => updateForm({ name: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <Input
                label="Your Email"
                type="email" placeholder="What's your email?"
                value={form.email}
                onChange={(e) => updateForm({ email: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <Input
                label="Subject"
                placeholder="What's the subject?"
                value={form.subject}
                onChange={(e) => updateForm({ subject: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <TextArea
                label="Your Message"
                placeholder="Message"
                value={form.message}
                onChange={(e) => updateForm({ message: e.target.value })}
              />
            </div>
            <div className="text-center pt-1 pb-1">
              <Button
                type="submit"
                customClassnames="w-full"
              >
                Send
              </Button>

            </div>
          </form>
        </AnimationOnScroll>
        <div className='hidden sm:block col-span-1'>
          <AnimationOnScroll className='flex justify-center h-full w-full' animateIn="animate__slideInRight" duration={2} >
            <ThreeJSScene />
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}
