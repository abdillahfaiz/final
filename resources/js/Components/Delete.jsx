import React from "react";
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2';

export default function Delete({ URL, id }) {
    const destroy = async (id) => {
        //show sweet alert
        Swal.fire({
            title: 'Are you sure?',
            text: "Kamu yakin akan menghapus ini?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //delete
                Inertia.delete(`${URL}/${id}`)
                Swal.fire({
                    title: 'Success!',
                    text: 'Data deleted successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }
    return (
        <>
            <button onClick={() => destroy(id)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-xs px-2.5 py-1 md:text-sm md:px-5 md:py-2.5  text-center mr-2 mb-2">
                Hapus
            </button>
        </>
    )
}