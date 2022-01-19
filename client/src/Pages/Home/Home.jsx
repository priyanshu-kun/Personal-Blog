import React, {useEffect, useState} from "react"
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar"
import Posts from "../../components/Posts/Posts.jsx"
import "./Home.css";
import axios from "axios";
import {useLocation} from "react-router-dom"

export default function Home() {

  const [posts, setPosts] = useState([])
  const {search} = useLocation();


  useEffect(() => {
      const fetchPost = async () => {
          const res = await axios.get("/post"+search)
          setPosts(res.data);
      }
    fetchPost();
  }, [search])


  return (
    <div>
      <Header />
      <div className="home">
        {
          !posts.length ? <h1 style={{margin: "30px auto", fontSize: "1.6rem", opacity: "0.3", color: "red", }}>There is nothing to show here 😞!</h1> : 
        <Posts posts={posts} />
        }
        <Sidebar />
      </div> 
    </div>
  )
}
