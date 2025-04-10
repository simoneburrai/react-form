import { useState } from "react";

function Article({ title, newTitleSetting, id }) {
    const [isClicked, setIsClicked] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const inputTitle = <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)}></input>
    const onSubmitTitle = (e) => {
        e.preventDefault();
        setNewTitle(newTitle);
        newTitleSetting(newTitle, id);
        setIsClicked(!isClicked);
    }

    return <div className="article">
        <h2 onClick={() => setIsClicked(!isClicked)}>{title}<span className="flag">click to modify</span>
        </h2>
        {isClicked && <form onSubmit={onSubmitTitle}>
            {inputTitle}
            <button ><i className="fa-solid fa-pen-to-square"></i></button>
        </form>}
    </div>
}

export default Article;