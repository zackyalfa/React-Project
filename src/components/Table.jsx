import React, { useState } from "react";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";

export default function Table({ dataTh, dataTd, coloumDB, buttonData, endpoints, coloumnDetail, judulModalEdit, inputData }) {
    const [isOpenModalDelete, setisOpenModalDelete] = useState(false);
    const [endpointsReplaced, setEndpointsrReplaced] = useState({})
    const [isOpenModalEdit, setisOpenModalEdit] = useState(false);

    function handleModelDelete(id) {

        const endpointsDetail = endpoints['detail'];
        const endpointsDelete = endpoints['delete'];
        //replace/ganti {id} dari endpoint dgn id yg di klik
        const detailReplaced  = endpointsDetail.replace('{id}', id);
        const deleteReplaced  = endpointsDelete.replace('{id}', id);
        //simpan di object baru
        const replaced = {
            "detail":detailReplaced,
            "delete":deleteReplaced
        }
        //kirim ke state
        setEndpointsrReplaced(replaced);
        // ubah state agar modal tampil
        setisOpenModalDelete(true);
    }

    function handleModalEdit(id) {
        const endpointsDetail = endpoints['detail'];
        const endpointsUpdate = endpoints['update'];
        //replace/ganti {id} dari endpoint dgn id yg di klik
        const detailReplaced  = endpointsDetail.replace('{id}', id);
        const updateReplaced  = endpointsUpdate.replace('{id}', id);
        //simpan di object baru
        const replaced = {
            "detail":detailReplaced,
            "update":updateReplaced
        }
        //kirim ke state
        setEndpointsrReplaced(replaced);
        // ubah state agar modal tampil
        setisOpenModalEdit(true);
    }

    return (
        <>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg px-20 py-10">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {
                                dataTh.map((data, Index) =>
                                    <th scope="col" class="px-6 py-3" key={Index}>{data}</th>
                                )
                            }

                        </tr>
                    </thead>
                    <tbody>
                    {
                    Object.entries(dataTd).map(([index, value]) => (      
                        <tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            
                                <td class="px-6 py-4 text-right">{parseInt(index)+1}.</td>
                                {
                                    Object.entries(coloumDB).map(([i, v]) => (
                                        <td class="px-6 py-4">
                                            {
                                                !v ? value[i] : value[i.replace(/[!@#$%^&]/, '')] ? value[i.replace(/[!@#$%^&]/, '')][v] : '0'
                                            }
                                        </td>
                                    ))
                                }
                                <td class="px-6 py-4 text-right">
                                    {
                                        buttonData.includes("edit") ? (
                                    <a onClick={() => handleModalEdit(value.id)} href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">edit</a>

                                        ) :''

                                    }

                                    {
                                        buttonData.includes("delete") ? (
                                    <a onClick={() => handleModelDelete(value.id)} href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ml-3">delete</a>
                                        ) :''

                                    }
                                </td>
                                </tr>
                                )) 
                            }
                           
                        
                    </tbody>
                </table>
            </div>
            <ModalDelete isOpen={isOpenModalDelete} closeModal={() => setisOpenModalDelete(false)} endpoints={endpointsReplaced} coloumnDetail={coloumnDetail}></ModalDelete>
            <ModalEdit isOpen={isOpenModalEdit} closeModal={() => setisOpenModalEdit(false)} judulModalEdit={judulModalEdit} inputData={inputData}></ModalEdit>

        </>
    )
}