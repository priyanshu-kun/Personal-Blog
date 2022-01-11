import Post from "./Post/Post"
import "./Posts.css"


export default function Posts() {
    return (
        <div className="posts">
            <h1>Well, Relex and Read your stuff here 🧘</h1>
             <div className="sidebarItem showSidebarItem">
                <ul className="sidebarList">
                    <li className="sidebarListItem ">Life</li>
                    <li className="sidebarListItem span-2">Technology</li>
                    <li className="sidebarListItem span-2">Cinema</li>
                    <li className="sidebarListItem">Coding</li>
                    <li className="sidebarListItem">CSS</li>
                    <li className="sidebarListItem span-2">Developing</li>
                </ul>
            </div>
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