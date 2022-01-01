import React from 'react'
import "./Single.css"
import SinglePage from "../../components/SinglePage/SinglePage"
import Sidebar from "../../components/Sidebar/Sidebar"

function Single() {
    return (
        <div className='Single'>
           <SinglePage /> 
            <Sidebar />
        </div>
    )
}

export default Single
