import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Modal from '../../Modal'

export default function AddEducation({ show, hide }) {
    function resetInput() {
        setInput({
            certificate: '',
            institute: '',
            date: '',
            location: '',
        })
        setErrors([])
    }
    const [Input, setInput] = useState({
        certificate: '',
        institute: '',
        date: '',
        location: ''
    })

    const [errors, setErrors] = useState([])

    const handleInput = (e) => {
        setInput({ ...Input, [e.target.name]: e.target.value })
    }

    const itemSubmit = (e) => {
        e.preventDefault();

        const data = {
            ...Input,
        }

        axios.post('/add-education', data).then(res => {

            Swal.fire("Success", res.data.message, "success")
            resetInput()

        }).catch(err => {
            const response = err.response
            setErrors(response.data.message)
        })
    }

    return (
        <Modal title="Add Education" show={show} hide={hide} dialogClassName="w-full sm:max-w-2xl h-fit mx-2 my-auto rounded-xl">
            <div className='max-w-xl mx-auto h-100 flex justify-center items-center'>
                <form className='flex flex-col gap-4 w-full' onSubmit={itemSubmit}>
                    <div>
                        <input placeholder='Certificate' type="text" name="certificate" onChange={handleInput} value={Input.certificate} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                        <span className='text-red-600'>{errors?.certificate}</span>
                        <input placeholder='Institute' type="text" name="institute" onChange={handleInput} value={Input.institute} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                        <span className='text-red-600'>{errors?.institute}</span>
                        <input placeholder='Date' type="text" name="date" onChange={handleInput} value={Input.date} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                        <span className='text-red-600'>{errors?.date}</span>
                        <input placeholder='Location' type="text" name="location" onChange={handleInput} value={Input.location} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                        <span className='text-red-600'>{errors?.location}</span>
                    </div>
                    <button type="submit" className="self-center w-[50%] bg-blue-500 hover:bg-blue-700 rounded-full py-3 text-white font-bold">Add Education</button>
                </form>
            </div>
        </Modal>
    )
}
