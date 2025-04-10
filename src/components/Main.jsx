import { useState } from "react";
import Article from "./Article";
import Form from "./Form";

function Main({ initialArticles }) {

    // Reactive Variables 
    const [articles, setArticles] = useState(initialArticles);
    const [inputTitle, setInputTitle] = useState("");

    // Form management operations 
    const onSubmitFun = (event) => {
        if (!inputTitle) {
            return
        }
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
        if (!title) {
            return;
        }
        const modifiedArticles = articles.map(article => {
            if (article.id === id) {
                const newArticle = {
                    id,
                    title,
                    "description": ""

                }

                return newArticle;
            } else {
                return article;
            }
        })
        setArticles(modifiedArticles);
    }

    return <main>
        <div className="articles-container">
            {articles.map(article =>
                <div className="article-card" key={article.id}>
                    <Article
                        title={article.title}
                        key={article.id}
                        newTitleSetting={newTitleSetting}
                        id={article.id} />
                    <button className="remove-button" onClick={() => removeArticles(article.id)} ><i class="fa-solid fa-trash"></i></button>
                </div>
            )}
        </div>

        <div className="form-container">
            <h3>Add a new Title</h3>
            <form onSubmit={onSubmitFun}>
                <Form input={inputTitle} setInputTitle={setInputTitle} />
            </form>

        </div>
    </main>

}
export default Main;