import { getBlogs } from "../services/blogs";

const Blogs = () => {
  const blogs = getBlogs();
  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <div>{blog.title}</div>
            <div>{blog.author}</div>
            <div>{blog.url}</div>
            <div>{blog.likes}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
