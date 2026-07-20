import { notFound } from "next/navigation";
import { getBlogById } from "../../services/blogs";
import { incrementBlogLikes } from "../../actions/blog";
import Description from "./Description";
import Content from "./Content";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog = await getBlogById(Number(id));

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <div className="text-5xl">{blog.title}</div>
      <Description>
        by
        <Content> {blog.author}</Content>
      </Description>
      <Description>
        read the blog here:
        <Content> {blog.url}</Content>
      </Description>
      <Description>
        likes
        <Content> {blog.likes}</Content>
      </Description>
      <form action={incrementBlogLikes}>
        <input type="hidden" name="id" value={blog.id} />
        <button
          type="submit"
          className="p-5 rounded-xl text-3xl hover:bg-blue-500 bg-green-900 text-white"
        >
          Like this blog
        </button>
      </form>
    </div>
  );
};

export default BlogPage;
