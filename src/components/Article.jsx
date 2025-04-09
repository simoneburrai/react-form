import { useState } from "react";

function Article({ title, newTitleSetting, id }) {
    const [isClicked, setIsClicked] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const inputTitle = <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)}></input>
    const onSubmitTitle = (e) => {
        e.preventDefault();
        setNewTitle(newTitle);
        newTitleSetting(newTitle, id);
        setIsClicked(false);
    }

    return <div onClick={() => setIsClicked(true)} className="article">
        <h2>{title}</h2>
        {isClicked && <form onSubmit={onSubmitTitle}> {inputTitle}
            <button>Submit</button></form>}
    </div>
}

export default Article;