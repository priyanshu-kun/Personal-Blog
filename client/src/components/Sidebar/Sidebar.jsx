import React from "react"
import "./Sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <h1>CATEGORIES</h1>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">Life</li>
                    <li className="sidebarListItem span-2">Technology</li>
                    <li className="sidebarListItem span-2">Cinema</li>
                    <li className="sidebarListItem">Coding</li>
                    <li className="sidebarListItem">CSS</li>
                    <li className="sidebarListItem span-2">Developing</li>
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
