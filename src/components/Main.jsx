import { useState } from "react";
import Article from "./Article";

function Main({ initialArticles }) {

    // Reactive Variables 
    const [articles, setArticles] = useState(initialArticles);
    const [inputTitle, setInputTitle] = useState("");

    // Input Handler on Title Inserting 
    const handleInputEvent = (e) => {
        setInputTitle(e.target.value);
    }


    // Form management operations 
    const onSubmitFun = (event) => {
        event.preventDefault();
        let newId;
        if (articles.length > 0) {
            const lastArticle = articles[articles.length - 1];
            newId = lastArticle.id + 1;
        } else { newId = 1 };
        const newArticle = {
            id: newId,
            title: inputTitle,
            description: "",
        };
        setInputTitle("");
        setArticles([...articles, newArticle]);
    }

    // remove Article Function(button) 
    const removeArticles = (id) => {
        const updatedArticles = articles.filter((article) => article.id !== id)
        setArticles(updatedArticles);
    }

    const newTitleSetting = (title, id) => {
        let newArticle = {};
        const modifiedArticles = articles.map(article => {
            if (article.id === id) {
                newArticle = {
                    id,
                    title,
                    description: "",
                }

                return newArticle;
            } else {
                return article;
            }
        })
        setArticles([...modifiedArticles, newArticle]);
    }

    return <main>
        {articles.map(article =>
            <div className="article-container" key={article.id}>
                <Article title={article.title} key={article.id} newTitleSetting={newTitleSetting} id={article.id} />
                <button onClick={() => removeArticles(article.id)} >Cancella</button>
            </div>
        )}
        <div className="form-container">
            <form onSubmit={onSubmitFun}>
                <input type="text" value={inputTitle} onChange={handleInputEvent} />
                <button >Send Form</button>
            </form>
        </div>
    </main>

}
export default Main;