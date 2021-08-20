import Head from "next/head";
import BlogGrid from "../components/BlogThumbnail";
import blogs from "../public/assets/BlogsDetail.js";

const about = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <BlogGrid blog={blogs[0]} />
      <BlogGrid blog={blogs[1]} />
    </>
  );
};

export default about;
