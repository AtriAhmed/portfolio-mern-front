import { InboxIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import Loading from '../../Loading';
import AddEducation from './AddEducation';
import EditEducation from './EditEducation';

export default function Education() {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [toEdit, setToEdit] = useState({});

    function getItems() {
        axios.get('/get-education').then(res => {
            setItem(res.data);
            setLoading(false);
        }).catch(err => {
            Swal.fire('Error', err.response.data.message, "error")
        })
    }
    useEffect(() => {
        getItems();
        return;
    }, [])


    if (loading) {
        return (
            <Loading />
        )
    }

    var items_HTMLTABLE = [];
    if (item) {
        items_HTMLTABLE = <>
            <div className='mx-0 grid grid-cols-12 gap-4 text-center break-all'>
                <div className='pb-3 hidden md:block text-start col-span-3'>Certificate</div>
                <div className='pb-3 col-span-4 md:col-span-3 text-start'>Institute</div>
                <div className='pb-3 col-span-4 md:col-span-2 text-start'>Date</div>
                <div className='pb-3 col-span-4 md:col-span-2 text-start'>Location</div>
                <div className='pb-3 text-end sm:text-center col-span-2'>Actions</div>
            </div>
            <div className='divide-y'>

                <div key={item._id} className="mx-0 grid grid-cols-12 gap-4 text-center break-all">
                    <div className='pt-3 hidden md:block text-start col-span-3'>{item.certificate}</div>
                    <div className='pt-3 col-span-4 md:col-span-3 text-start'>{item.institute}</div>
                    <div className='pt-3 col-span-4 md:col-span-2 text-start'>{item.date}</div>
                    <div className='pt-3 hidden md:block text-start col-span-2'>{item.location}</div>
                    <div className='pt-3 text-end sm:text-center col-span-2 justify-self-center'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 sm:col-span-6 text-end sm:text-center'><button disabled={item.id === 1 ? true : false} type='button' className='btn p-0' onClick={(e) => { setToEdit(item); setEditModalShow(true) }}><PencilSquareIcon className={`'block h-8 w-8' ${item.id === 1 ? 'text-gray-400' : 'text-blue-600'}`} aria-hidden="true" /></button></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    }
    else {
        items_HTMLTABLE =
            <div className="flex flex-col gap-4 items-center justify-center text-center h-[25vh]">

                <InboxIcon className="block h-20 w-20" aria-hidden="true" />
                <h3 className='text-2xl font-bold'>Theres no Education</h3>

            </div>
    }
    return (
        <>
            <div className="max-w-[80rem] p-5 mx-auto">
                <div className='rounded-lg shadow-lg'>
                    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-t-lg">
                        <h5 className='mb-3'>Education</h5>
                        <button type='button' className='bg-blue-600 text-white p-2 rounded' onClick={() => { setModalShow(true) }}>Add Education</button>
                    </div>
                    <div className="p-5">

                        {items_HTMLTABLE}
                    </div>
                </div>

            </div>
            <AddEducation show={modalShow} hide={() => { setModalShow(false); getItems() }} />
            <EditEducation show={editModalShow} hide={() => { setEditModalShow(false); getItems() }} toedit={toEdit} />
        </>
    )

}
