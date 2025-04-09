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
        console.log(articles)
        const newArticle = {
            id: newId,
            title: inputTitle,
            description: "",
        };
        console.log(newArticle);
        setInputTitle("");
        setArticles([...articles, newArticle]);
    }

    remove Article Function(button)
    const removeArticles = (id) => {
        const updatedArticles = articles.filter((article) => article.id !== id)
        setArticles(updatedArticles);
    }



    return <main>
        <div className="article-container">
            {articles.map(article =>
                <div key={article.id}>
                    <Article title={article.title} key={article.id} />
                    <button onClick={removeArticles(article.id)} >Cancella</button>
                </div>
            )}
        </div>
        <div className="form-container">
            <form onSubmit={onSubmitFun}>
                {inputTitle}
                <input type="text" value={inputTitle} onChange={handleInputEvent} />
                <button >Send Form</button>
            </form>
        </div>
    </main>

}

export default Main;