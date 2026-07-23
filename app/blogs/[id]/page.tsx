import { notFound } from "next/navigation";
import { getBlogById } from "../../services/blogs";
import { incrementBlogLikes } from "../../actions/blog";
import Description from "./Description";
import Content from "./Content";
import { getCurrentUser } from "@/app/services/session";
import { addToReadingList } from "@/app/actions/readingList";
import { isOnUserReadingList } from "@/app/services/readingLists";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog = await getBlogById(Number(id));
  const user = await getCurrentUser();

  if (!blog) {
    notFound();
  }

  const onReadingList = await isOnUserReadingList(blog.id);

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
        <button type="submit" className="button">
          Like this blog
        </button>
      </form>
      {user && !onReadingList ? (
        <form action={addToReadingList} className="mt-5">
          <input type="hidden" name="blogId" value={blog.id} />
          <input type="hidden" name="userId" value={user.id} />
          <button type="submit" className="button">
            Add to your reading list
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default BlogPage;
