import Image from "next/image";

import blogThumbnailStyles from "../styles/BlogThumbnail.module.css";

const BlogGrid = ({ blog }) => {
  return (
    <div className={blogThumbnailStyles.thumbanil}>
      <Image src={blog.img} alt={blog.alt} width={480} height={220} />
      <h3></h3>
      {blog.title}
      <p>{blog.topic}</p>
    </div>
  );
};

export default BlogGrid;
