import Article from "./Article";

function Main({ articles }) {
    return <main>

        <div className="article-container">
            {articles.map(article => <Article title={article.title} key={article.id} />)}
        </div>

        <div className="form-container">

        </div>

    </main>

}

export default Main;