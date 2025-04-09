import Main from "./components/Main"
import blogArticles from "./data/blogArticles"
function App() {

  return (
    <>
      <Main initialArticles={blogArticles} />
    </>
  )
}

export default App
