import "./Write.css"
import x from "../../assets/icons/x.svg"

function Write() {
    return (
        <div className="write">
            <h1>Share your thoughts 🗿</h1>
            <div className="writeArea">
                <div className="writeActionsBtns">
                    <div className="editAndPreview">
                        <button className="customUnderline">Edit</button>
                        <button>Preview</button>
                    </div>
                    <div className="publishAndDiscard">
                        <button>Publish</button>
                        <button>Discard</button>
                    </div>
                </div>
                <div className="writeActionArea">
                    <button className="addCoverImageBtn">Add cover Image</button>
                   {/* <div className="postBannerCover">
                        <img className="postBanner" src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="banner" />
                        <button><img src={x} alt="cut btn" /></button>
                    </div>  */}
                    <input type="text" placeholder="Title" />
                    <hr />
                    <textarea placeholder="Tell your story..."></textarea>
                </div>
            </div>
        </div>
    )
}

export default Write
