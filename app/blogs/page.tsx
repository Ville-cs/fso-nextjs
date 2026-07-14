import { getBlogs } from "../services/blogs";
import Link from "next/link";

const Blogs = () => {
  const blogs = getBlogs().sort((a, b) => b.likes - a.likes);
  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
