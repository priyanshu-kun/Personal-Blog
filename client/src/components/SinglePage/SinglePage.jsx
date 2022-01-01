import "./SinglePage.css"
import Edit from "../../assets/icons/edit.svg"
import HorizontalDots from "../../assets/icons/more-horizontal.svg"
import Trash from "../../assets/icons/trash-2.svg"

function SinglePage() {
    return (
        <div className="SinglePage">
            <div className="timeAndShareLinks">
                <span><span>Jhon Doe,</span>2 Jan 2022 <span>8 min to read</span></span> 
                <div className="postActions">
                    <button><img src={Edit} alt="edit icon" /></button>
                    <button><img src={Trash} alt="Trash" /></button>
                    <button><img src={HorizontalDots} alt="Horizontal menu" /></button>
                </div>
            </div>
            <div className="postBanner">
                <img src="https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="post banner" />
                <div className="postTagsList">
                    <span>Javascript</span>
                    <span>Web Development</span>
                    <span>C++</span>
                </div>
            </div>
            <div className="contentSection">
                <h1>🔥 <span>How to ace in life?</span></h1>
                <p>A client is a piece of software (usually a web browser) which operates on the local system and makes Hypertext Transfer Protocol (HTTP) requests to a server as necessary. Client-side technologies can be faster and safer than server-side technologies; however, they are limited in functionality and cannot interact with permanent storage such as a database.
If your web-application requires permanent storage, for example you want users to add to an existing dataset or pull information that is stored centrally, server-side technologies are required to complete these processes. The client is usually a web browser such as Internet Explorer or Mozilla. Browsers interact with the server using a set of instructions called protocols. These protocols help in the accurate transfer of data requests made through requests from a browser and responses from the server.</p>
            </div>
            <hr className="singlePageDivder" />
            <div className="post-footer">
                Hope, you like it 😊
            </div>
        </div>
    )
}

export default SinglePage
