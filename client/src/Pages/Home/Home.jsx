import React from "react"
import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar"
import Posts from "../../Posts/Posts.jsx"
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div> 
    </div>
  )
}