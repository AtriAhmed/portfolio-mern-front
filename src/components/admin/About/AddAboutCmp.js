import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function AddAboutCmp() {
    function resetInput() {
        setInput({
            title: '',
            content: ''
        })
        setErrors([])
    }
    const [Input, setInput] = useState({
        title: '',
        content: ''
    })

    const [errors, setErrors] = useState([])

    const handleInput = (e) => {
        e.persist()
        setInput({ ...Input, [e.target.name]: e.target.value })
    }

    const itemSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: Input.title,
            content: Input.content
        }

        axios.post('/add-about', data).then(res => {

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
                    <input placeholder='Title' type="text" name="title" onChange={handleInput} value={Input.title} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors?.name}</span>
                    <input placeholder='Content' type="text" name="content" onChange={handleInput} value={Input.content} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors?.content}</span>
                </div>
                <button type="submit" className="self-center w-[50%] bg-blue-500 hover:bg-blue-700 rounded-full py-3 text-white font-bold">Add About</button>

            </form>
        </div>

    )
}
