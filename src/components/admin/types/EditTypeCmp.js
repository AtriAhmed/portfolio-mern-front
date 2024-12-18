import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import Loading from '../../Loading';

export default function EditTypeCmp(props) {

    const [Input, setInput] = useState({
        name: ''
    });

    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.toedit) {
            setInput(props.toedit);
            setLoading(false);
        }

    }, [props.toedit])

    const handleInput = (e) => {
        e.persist();
        setInput({ ...Input, [e.target.name]: e.target.value });
    }

    const updateItem = (e) => {
        e.preventDefault();
        const data = {
            name: Input.name
        };
        axios.put(`/update-type/${props.toedit._id}`, data).then(res => {

            Swal.fire("Success", res.data.message, "success");
            setErrors([])

        }).catch(err => {
            const response = err.response
            Swal.fire("Error", response.message, "error");

        })
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div className='max-w-xl mx-auto h-100 flex justify-center items-center'>

            <form className='flex flex-col gap-4 w-full' onSubmit={updateItem}>
                <div>
                    <input placeholder='Name' type="text" name="name" onChange={handleInput} value={Input.name} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors?.name}</span>
                </div>
                <button type="submit" className="self-center w-[50%] bg-blue-500 hover:bg-blue-700 rounded-full py-3 text-white font-bold">Edit Type</button>

            </form>
        </div>
    )
}
