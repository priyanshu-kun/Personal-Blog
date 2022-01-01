import Post from "./Post/Post"
import "./Posts.css"


export default function Posts() {
    return (
        <div className="posts">
            <h1>Well, Relex and Read your stuff here 🧘</h1>
          <div className="post-container">
            <Post /> 
            <Post /> 
            <Post /> 
            <Post /> 
            <Post /> 
            <Post />
          </div> 
        </div>
    )
}