import React, { useEffect, useState } from 'react'
import axios from 'axios'
import'./table.css'
export default function Table() {
const [fdata, setfadata] = useState([])
const [error, seterror] = useState([])

const url = 'https://reqres.in/api/users?page=2'
useEffect(()=>{
    axios.get(url)
    .then((resp)=>{ 

        setfadata(resp.data.data)})


    .catch((err)=>{
        seterror(err.message)
        console.log(err)})
},[])
console.log(fdata)
  return (
    <>
        <div>
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Email</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Avtar</td>
                </tr>
            </thead>
            <tbody>
                {
                    fdata.map((item)=>{
                        return (<tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td><img src={item.avatar} alt=' image'/></td>
                    </tr>)
                    }

                    )
                }
            </tbody>
        </table>

        <div><h1>{error}</h1></div>
        </div>
    </>
  )
}
