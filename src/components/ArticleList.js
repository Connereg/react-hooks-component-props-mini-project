import React from "react";
import ArticleCompile from "./Article";


//CREATES A RENDERBASED ON DATA PASSED TO ARTICLE COMPILE FUNCTION

function ArticleListCreate({ posts }){
    const articlesMade = posts.map((post) => (
        <ArticleCompile
            key={post.id}
            //Creates a unique Key for each article by using post ID
            title={post.title}
            //creates a title for the Article based on title prop of post
            date={post.date}
            preview={post.preview}
            minutes={post.minutes}
            />
    ));
    return <main>{articlesMade}</main>
}
export default ArticleListCreate;