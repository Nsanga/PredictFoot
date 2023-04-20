import Home from "./screens/home"
import Blog from "./screens/blog"
import Article from "./screens/article"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="article" element={<Article />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;