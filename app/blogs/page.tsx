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
      <h2 className="text-5xl mr-20 my-10 text-center">Blogs</h2>
      <form action="/blogs" className="flex justify-center items-center mb-10">
        <input
          type="text"
          name="filter"
          defaultValue={filter || ""}
          className="bg-white text-black mr-5 py-2"
        />
        <button
          type="submit"
          className="rounded-2xl bg-blue-500 p-2 hover:text-black"
        >
          filter blogs by title
        </button>
      </form>
      <ul>
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="my-3 p-5 border hover:text-blue-400 text-2xl"
          >
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
