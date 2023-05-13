import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function AddWorkCmp() {
    const [picture, setPicture] = useState([]);

    const handleImage = (e) => {
        e.persist();
        setPicture({ image: e.target.files[0] })
    }

    function resetInput() {
        setInput({
            name: '',
            description: '',
            technologies: '',
            link: '',
        })
        setErrors([])
    }
    const [Input, setInput] = useState({
        name: '',
        description: '',
        technologies: '',
        link: '',
    })

    const [errors, setErrors] = useState([])

    const handleInput = (e) => {
        e.persist()
        setInput({ ...Input, [e.target.name]: e.target.value })
    }

    const itemSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', picture.image);
        formData.append('name', Input.name);
        formData.append('description', Input.description);
        formData.append('technologies', Input.technologies);
        formData.append('link', Input.link);
        axios.post('/add-work', formData).then(res => {
            Swal.fire("Success", "Created successfully", "success")
            resetInput()
        }).catch(err => {
            Swal.fire("Error", err.response.message, "error")
        })
    }

    return (

        <div className='max-w-xl mx-auto h-100 flex justify-center items-center'>

            <form className='flex flex-col gap-4 w-full' onSubmit={itemSubmit} encType='mutlipart/form-data'>
                <div>
                    <input placeholder='Name' type="text" name="name" onChange={handleInput} value={Input.name} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors?.name}</span>
                    <input placeholder='Description' type="text" name="description" onChange={handleInput} value={Input.description} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors?.description}</span>
                    <input placeholder='Technologies' type="text" name="technologies" onChange={handleInput} value={Input.technologies} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors?.technologies}</span>
                    <input placeholder='Link' type="text" name="link" onChange={handleInput} value={Input.link} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors?.link}</span>
                    <label className="mb-2 inline-block text-neutral-700" for="file_input">Image</label>
                    <input className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none" id="file_input" type="file" onChange={handleImage} />
                    <span className='text-red-600'>{errors?.image}</span>
                </div>
                <button type="submit" className="self-center w-[50%] bg-blue-500 hover:bg-blue-700 rounded-full py-3 text-white font-bold">Add Work</button>

            </form>
        </div>

    )
}