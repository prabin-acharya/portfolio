import Image from "next/image";
import Link from "next/link";

import blogThumbnailStyles from "../styles/BlogThumbnail.module.css";

const BlogThumbnail = ({ blog }) => {
  return (
    <Link href="/blog/[title]" as={`/blog/${blog.titleurl}`}>
      <div className={blogThumbnailStyles.thumbanil}>
        <Image
          className={blogThumbnailStyles.img}
          src={blog.img}
          alt={blog.alt}
          width={480}
          height={220}
        />
        <h3>{blog.title}</h3>

        <p>{blog.topic}</p>
      </div>
    </Link>
  );
};

export default BlogThumbnail;
