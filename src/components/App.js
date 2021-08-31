import React from "react";
import blogData from "../data/blog";
import CreateHeader from "../components/Header"
import ArticleListCreate from "../components/ArticleList"
import AboutCreate from "./About";



console.log(blogData);

//console.log(ArticleListCreate(blogData.posts))

function App() {
  return (
    <div className="App">
      <CreateHeader name={blogData.name} />
      <AboutCreate image={blogData.image} about={blogData.about} />
      <ArticleListCreate posts={blogData.posts} />     
    </div>
  );
}

export default App;
