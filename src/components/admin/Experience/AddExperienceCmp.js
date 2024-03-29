import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function AddExperienceCmp() {
    function resetInput() {
        setInput({
            name: '',
            position: '',
            date: '',
            description: ''
        })
        setErrors([])
    }
    const [Input, setInput] = useState({
        name: '',
        position: '',
        date: '',
        description: ''
    })

    const [errors, setErrors] = useState([])

    const handleInput = (e) => {
        e.persist()
        setInput({ ...Input, [e.target.name]: e.target.value })
    }

    const itemSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: Input.name,
            position: Input.position,
            date: Input.date,
            description: Input.description,
        }

        axios.post('/add-experience', data).then(res => {

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
                    <input placeholder='Position' type="text" name="position" onChange={handleInput} value={Input.position} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors?.position}</span>
                    <input placeholder='Date' type="text" name="date" onChange={handleInput} value={Input.date} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors?.date}</span>
                    <input placeholder='Description' type="text" name="description" onChange={handleInput} value={Input.description} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors?.description}</span>
                </div>
                <button type="submit" className="self-center w-[50%] bg-blue-500 hover:bg-blue-700 rounded-full py-3 text-white font-bold">Add Experience</button>

            </form>
        </div>

    )
}
