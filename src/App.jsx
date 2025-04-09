import Header from "./components/Header"
import Main from "./components/Main"
import blogArticles from "./data/blogArticles"
function App() {

  return (
    <>
      <Header />
      <Main initialArticles={blogArticles} />
    </>
  )
}

export default App
