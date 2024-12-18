import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function AddContactCmp() {
    function resetInput() {
        setInput({
            name: '',
            lastname: '',
            title: '',
            email: '',
            phone: '',
            location: ''
        })
        setErrors([])
    }
    const [Input, setInput] = useState({
        name: '',
        lastname: '',
        title: '',
        email: '',
        phone: '',
        location: ''
    })

    const [errors, setErrors] = useState([])

    const handleInput = (e) => {
        setInput({ ...Input, [e.target.name]: e.target.value })
    }

    const itemSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: Input.name,
            lastname: Input.lastname,
            title: Input.title,
            email: Input.email,
            phone: Input.phone,
            location: Input.location
        }

        axios.post('/add-contact', data).then(res => {

            Swal.fire("Success", res.data.message, "success")
            resetInput()

        }).catch(err => {
            const response = err.response
            setErrors(response.data.message)
        })
    }

    return (

        <div className='max-w-xl mx-auto h-100 flex justify-center items-center'>

            <form className='flex flex-col gap-4 w-full' onSubmit={itemSubmit}>
                <div>
                    <input placeholder='Name' type="text" name="name" onChange={handleInput} value={Input.name} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors?.name}</span>
                    <input placeholder='Lastname' type="text" name="lastname" onChange={handleInput} value={Input.lastname} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors?.lastname}</span>
                    <input placeholder='Title' type="text" name="title" onChange={handleInput} value={Input.title} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors?.title}</span>
                    <input placeholder='Email' type="text" name="email" onChange={handleInput} value={Input.email} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors?.email}</span>
                    <input placeholder='Phone' type="text" name="phone" onChange={handleInput} value={Input.phone} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors?.phone}</span>
                    <input placeholder='Location' type="text" name="location" onChange={handleInput} value={Input.location} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors?.location}</span>
                </div>
                <button type="submit" className="self-center w-[50%] bg-blue-500 hover:bg-blue-700 rounded-full py-3 text-white font-bold">Add Contact</button>
            </form>
        </div>

    )
}
