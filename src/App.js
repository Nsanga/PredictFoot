import Home from "./pages/landingPage"
import Blog from "./pages/blog"
import Article from "./pages/article"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllArticles from "./pages/allArticles";



function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/articles" element={<AllArticles />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;