import { useState } from "react";
import Article from "./Article";

function Main({ initialArticles }) {

    const [articles, setArticles] = useState(initialArticles);
    const [inputTitle, setInputTitle] = useState("");

    const handleInputEvent = (e) => {
        setInputTitle(e.target.value);
    }

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
        setArticles([...articles, newArticle]);

    }



    return <main>

        <div className="article-container">
            {articles.map(article =>
                <Article title={article.title} key={article.id} />)}
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