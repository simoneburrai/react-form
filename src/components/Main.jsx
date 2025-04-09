import Article from "./Article";

function Main({ articles }) {
    return <div className="article-container">
        {articles.map(article => <Article title={article.title} key={article.id} description={article.description} />)}
    </div>
}

export default Main;