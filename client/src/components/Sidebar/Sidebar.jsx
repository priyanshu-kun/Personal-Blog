import axios from "axios"
import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import "./Sidebar.css"

export default function Sidebar() {
    const [cats,setCats] = useState([])
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/category")
            setCats(res.data);
        }
        getCats();
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <h1>CATEGORIES</h1>
                <ul className="sidebarList">
                    {
                        cats.map((c) => (
                            <Link to={`/?cat=${c.name}`} className="sidebarListItem">{c.name}</Link>
                        ))
                    } 
                </ul>
            </div>
            <hr />
            <div className="footer">
                <ul className="footerList">
                    <li className="footerListItem">Help</li>
                    <li className="footerListItem">Privicy</li>
                    <li className="footerListItem">Terms</li>
                </ul>
            </div>
        </div>
    )
}
