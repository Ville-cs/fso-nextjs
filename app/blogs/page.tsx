import { getBlogs } from "../services/blogs";
import Link from "next/link";

const Blogs = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) => {
  const { filter } = await searchParams;
  const blogs = await getBlogs(filter || "");
  blogs.sort((a, b) => b.likes - a.likes);

  return (
    <div>
      <h2 className="text-5xl my-10">Blogs</h2>
      <form action="/blogs">
        <input
          type="text"
          name="filter"
          defaultValue={filter || ""}
          className="bg-white text-black mr-5"
        />
        <button
          type="submit"
          className="rounded-2xl bg-gray-500 px-2 mb-5 hover:text-black"
        >
          filter blogs by title
        </button>
      </form>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className="my-3 hover:text-blue-400 text-2xl">
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
