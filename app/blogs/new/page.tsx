import { createBlog } from "../../actions/blog";

const NewBlog = () => {
  return (
    <div>
      <h2>Add a new blog</h2>
      <form action={createBlog}>
        <div>
          <label>
            Title
            <input type="text" name="title" required></input>
          </label>
        </div>
        <div>
          <label>
            Author
            <input type="text" name="author" required></input>
          </label>
        </div>
        <div>
          <label>
            URL
            <input type="text" name="url" required></input>
          </label>
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewBlog;
