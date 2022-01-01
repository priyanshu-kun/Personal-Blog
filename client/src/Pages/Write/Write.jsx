import "./Write.css"

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
                    <button>Add cover Image</button>
                    <input type="text" placeholder="Title" />
                    <hr />
                    <textarea placeholder="Tell your story..."></textarea>
                </div>
            </div>
        </div>
    )
}

export default Write
