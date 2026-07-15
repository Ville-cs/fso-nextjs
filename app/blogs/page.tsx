import { getBlogs } from "../services/blogs";
import Link from "next/link";

const Blogs = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) => {
  const { filter } = await searchParams;
  const blogs = await getBlogs(filter || "");
  // const blogs = filter
  //   ? allBlogs.filter((blog) =>
  //       blog.title.toLowerCase().includes(filter.toLowerCase()),
  //     )
  //   : allBlogs;
  blogs.sort((a, b) => b.likes - a.likes);

  return (
    <div>
      <h2>Blogs</h2>
      <form action="/blogs">
        <input type="text" name="filter" defaultValue={filter || ""} />
        <button type="submit">filter blogs by title</button>
      </form>
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
