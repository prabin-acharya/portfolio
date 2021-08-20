import React from "react";
import BlogThumbnail from "../components/BlogThumbnail";
import blogs from "../public/assets/BlogsDetail.js";

import blogsStyles from "../styles/Blogs.module.css";

const Blogs = () => {
  return (
    <>
      <h2>Blogs</h2>
      <div className={blogsStyles.blogs}>
        <BlogThumbnail blog={blogs[0]} />
        <BlogThumbnail blog={blogs[1]} />
      </div>
    </>
  );
};

export default Blogs;
