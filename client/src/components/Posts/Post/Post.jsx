import "./Post.css";
import {Link} from "react-router-dom"

function Post() {
    return (
        <Link to="/post/1" className="Post">
           <img src="https://images.pexels.com/photos/10484063/pexels-photo-10484063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Post title image" /> 
           <div className="postInfo">
               <div className="postCate">
                  <span>Music</span> 
                  <span>C++</span>
               </div>
               <div className="postContent">
                   <h1>😊 How to ace in life?</h1>
                   <hr style={{margin: "0 0 10px 0", width: "100%"}} />
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio officia eligendi esse neque? Sequi, consequatur?</p> 
               </div>
               <div className="postDate">
               📆 <span>1 Jan 2022</span> 
               </div>
           </div>
        </Link>
    )
}

export default Post
