import Head from "next/head";
import BlogGrid from "../components/BlogGrid";
import blogs from "../public/assets/BlogsDetail.js";

const about = () => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>Blog</h1>
      <BlogGrid blog={blogs[0]} />
      <BlogGrid blog={blogs[1]} />
    </div>
  );
};

export default about;
