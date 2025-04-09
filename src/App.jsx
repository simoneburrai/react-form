import Main from "./components/Main"
import blogArticles from "./data/blogArticles"
function App() {

  return (
    <>
      <Main articles={blogArticles} />
    </>
  )
}

export default App
