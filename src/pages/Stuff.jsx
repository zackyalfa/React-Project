import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import axios from "axios";


export default function Stuff() {

    const dataThParent = [
        "#",
        "Name",
        "Category",
        "Total Available",
        "Total Defec",
        "Action"
    ]

    const [stuffs, setStuffs] = useState({});

   
    useEffect(() => {
            axios.get('http://localhost:6666/stuffs', {
                headers: {
                    'Authorization': 'bearer ' + localStorage.getItem('access_token'),
                }
            })
            .then(res => {
                setStuffs(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const coloumDataBase = { // props
        "name" : null,
        "category" : null,
        "stuff_stock":
        "total_available",
        "stuff_Stock*": "total_defec",
    }

    const button = [
        "edit",
        "delete" 
    ]

    const endpoints = {
        "detail": "http://localhost:6666/stuffs/{id}",
        "delete": "http://localhost:6666/stuffs/delete/{id}",
        "edit": "http://localhost:6666/stuffs/update/{id}"
    }

    const coloumnDetailModalDelete = 'name'

    const judulModalEdit = 'stuff'

    const inputData = {
        "name":{
            "type":"text",
            "option":null,
        },
        "category":{
            "type":"selected",
            "options":['KLN','HTL','Teknisi/Sarpras']
        }
    }

    return (
        <>
            <Navbar/>
            <div className="p-10">
            <Table dataTh={dataThParent} dataTd={stuffs} coloumDB={coloumDataBase} buttonData={button} endpoints={endpoints} coloumnDetail={coloumnDetailModalDelete} judulModalEdit={judulModalEdit} inputData={inputData}></Table>
            </div>
        </>
          )
}