import { InboxIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import AddAboutModal from "./AddAboutModal"
import EditAboutModal from "./EditAboutModal"
import Loading from '../../Loading';

export default function ViewAbout() {
    const [loading, setLoading] = useState(true);
    const [itemsList, setItemsList] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [toEdit, setToEdit] = useState({});

    function getItems() {
        axios.get('/get-about').then(res => {
            setItemsList(res.data);
            setLoading(false);
        }).catch(err => {
            Swal.fire('Error', err.response.data.message, "error")
        })
    }
    useEffect(() => {
        getItems();
        return;
    }, [])

    const deleteItem = (e, item) => {
        e.preventDefault();

        Swal.fire({
            title: 'Delete About',
            text: `Are you sure to delete ${item.name} ?`,
            showDenyButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Cancel`,
            confirmButtonColor: '#df4759',
            denyButtonColor: '#d9e2ef',
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`/delete-about/${item._id}`).then(res => {

                    Swal.fire("Success", res.data.message, "success");
                    getItems();

                }).catch(err => {

                    Swal.fire("Error", err.response.data.message, "error");

                })

            } else if (result.isDenied) {
            }
        });


    }
    if (loading) {
        return (
            <Loading />
        )
    }

    var items_HTMLTABLE = [];
    if (itemsList.length > 0) {
        items_HTMLTABLE = <>
            <div className='mx-0 grid grid-cols-12 text-center break-all'>
                <div className='pb-3 hidden md:block text-start col-span-4'>Title</div>
                <div className='pb-3 col-span-4 md:col-span-4 text-start'>Content</div>
                <div className='pb-3 text-end sm:text-center col-span-4'>Actions</div>
            </div>
            <div className='divide-y'>
                {itemsList.map((item) => {
                    return (

                        <div key={item._id} className="mx-0 grid grid-cols-12 text-center break-all">
                            <div className='pt-3 hidden md:block text-start col-span-4'>{item.title}</div>
                            <div className='pt-3 col-span-4 md:col-span-4 text-start'>{item.content}</div>
                            <div className='pt-3 text-end sm:text-center col-span-4'>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-12 sm:col-span-6 text-end sm:text-center'><button disabled={item.id === 1 ? true : false} type='button' className='btn p-0' onClick={(e) => { setToEdit(item); setEditModalShow(true) }}><PencilSquareIcon className={`'block h-8 w-8' ${item.id === 1 ? 'text-gray-400' : 'text-blue-600'}`} aria-hidden="true" /></button></div>
                                    <div className='col-span-12 sm:col-span-6 text-end sm:text-center'><button disabled={item.id === 1 ? true : false} type='button' className='btn p-0' onClick={(e) => { deleteItem(e, item); }}><TrashIcon className={`block h-8 w-8 ${item.id === 1 ? 'text-gray-400' : 'text-red-600'}`} aria-hidden="true" /></button></div>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        </>
    }
    else {
        items_HTMLTABLE =
            <div className="flex flex-col gap-4 items-center justify-center text-center h-[25vh]">

                <InboxIcon className="block h-20 w-20" aria-hidden="true" />
                <h3 className='text-2xl font-bold'>Theres no About</h3>

            </div>
    }
    return (
        <>
            <div className="max-w-[80rem] p-5 mx-auto">
                <div className='rounded-lg shadow-lg'>
                    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-t-lg">
                        <h5 className='mb-3 mb-0'>About ( {itemsList.length} )</h5>
                        <button type='button' className='bg-blue-600 text-white p-2 rounded' onClick={() => { setModalShow(true) }}>Add About</button>
                    </div>
                    <div className="p-5">

                        {items_HTMLTABLE}
                    </div>
                </div>

            </div>
            <AddAboutModal show={modalShow} hide={() => { setModalShow(false); getItems() }} />
            <EditAboutModal show={editModalShow} hide={() => { setEditModalShow(false); getItems() }} toedit={toEdit} />
        </>
    )

}
