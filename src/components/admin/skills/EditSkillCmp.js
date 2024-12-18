import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import Loading from '../../Loading';

export default function EditSkillCmp(props) {
    const [typesList, setTypesList] = useState([]);
    useEffect(() => {
        axios.get('/get-types').then(res => {
            setTypesList(res.data);
        });
    }, [])

    const [Input, setInput] = useState({
        name: '',
        type: '',
        level: ''
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
            name: Input.name,
            type: Input.type,
            level: Input.level
        };
        axios.put(`/update-skill/${props.toedit._id}`, data).then(res => {

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
                    <div>
                        <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">Type</label>
                        <select id="type" name="type" onChange={handleInput} value={Input.type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>Select Type</option>
                            {
                                typesList.map((item) => {
                                    return (
                                        <option value={item.name} key={item._id}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                        <small className='bg-red-600'>{errors?.category_id}</small>
                    </div>
                    <input placeholder='Level' type="text" name="level" onChange={handleInput} value={Input.level} className='block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                    <span className='text-red-600'>{errors?.level}</span>
                </div>
                <button type="submit" className="self-center w-[50%] bg-blue-500 hover:bg-blue-700 rounded-full py-3 text-white font-bold">Edit Skill</button>

            </form>
        </div>
    )
}
