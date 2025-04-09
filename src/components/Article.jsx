import { useState } from "react";

function Article({ title, isClicked, newTitleSetting, id }) {
    const [newTitle, setNewTitle] = useState(title);
    const inputTitle = <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)}></input>
    const onSubmitTitle = (e) => {
        e.preventDefault;
        setNewTitle(newTitle);
        newTitleSetting(newTitle, id);
    }



    return <div className="article">
        <h2>{title}</h2>
        {isClicked && <form onSubmit={onSubmitTitle}> {inputTitle}
            <button>Submit</button></form>}
    </div>
}

export default Article;