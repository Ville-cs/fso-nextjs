import { notFound } from "next/navigation";
import { getBlogById } from "../../services/blogs";
import { incrementBlogLikes } from "../../actions/blog";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog = await getBlogById(Number(id));

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <div>{blog.title}</div>
      <div>{blog.author}</div>
      <div>{blog.url}</div>
      <div>{blog.likes}</div>
      <form action={incrementBlogLikes}>
        <input type="hidden" name="id" value={blog.id} />
        <button type="submit">Like this blog</button>
      </form>
    </div>
  );
};

export default BlogPage;
