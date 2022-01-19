import {useState} from "react"
import "./SinglePage.css"
import Edit from "../../assets/icons/edit.svg"
import HorizontalDots from "../../assets/icons/more-horizontal.svg"
import Trash from "../../assets/icons/trash-2.svg"
import {Link, useParams} from 'react-router-dom'
import {useEffect} from "react"
import axios from "axios"

function SinglePage() {

    const PE = "http://localhost:5000/images/"

    const {post_id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/post/"+post_id);
            console.log(res.data);
            setPost(res.data);
        }     
        getPost();
    }, [post_id])

    return (
        <div className="SinglePage">
            <div className="timeAndShareLinks">
                <span><Link to={`/?user=${post.username}`}>{post.username},</Link>{new Date(post.createdAt).toDateString()}<span>8 min to read</span></span> 
                <div className="postActions">
                    <button><img src={Edit} alt="edit icon" /></button>
                    <button><img src={Trash} alt="Trash" /></button>
                    <button><img src={HorizontalDots} alt="Horizontal menu" /></button>
                </div>
            </div>
            <div className="postBanner">
                <img src={PE + post.photo} alt="post banner" />
                <div className="postTagsList">
                    <span>Javascript</span>
                    <span>Web Development</span>
                    <span>C++</span>
                </div>
            </div>
            <div className="contentSection">
                <h1>🔥 <span>{post.title}</span></h1>
                <p>{post.desc}</p>
            </div>
            <hr className="singlePageDivder" />
            <div className="post-footer">
                Hope, you like it 😊
            </div>
        </div>
    )
}

export default SinglePage
