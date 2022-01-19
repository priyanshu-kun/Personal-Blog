import "./Post.css";
import {Link} from "react-router-dom"

function Post({post}) {

    const PE = "http://localhost:5000/images/"

    console.log(post)
    function trimParagraph(str) {
        let maxLength = 150;
        let trimmedString = str.substr(0, maxLength);
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        return trimmedString;
    }

    return (
        <Link to={`/post/${post._id}`} className="Post">
            <img src={PE + post.photo} alt="Post title image" /> 
           <div className="postInfo">
               <div className="postCate">
                   {
                       post.categories.map((c) => (
                          <span>{c.name}</span> 
                       ))
                   }
               </div>
               <div className="postContent">
                   <h1>😊 {post.title}</h1>
                   <hr style={{margin: "0 0 10px 0", width: "100%"}} />
                  <p>{trimParagraph(post.desc)+"..."}</p> 
               </div>
               <div className="postDate">
               📆 <span>{new Date(post.createdAt).toDateString()}</span> 
               </div>
           </div>
        </Link>
    )
}

export default Post
