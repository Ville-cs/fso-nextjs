"use client";

import { useActionState } from "react";
import { createBlog } from "../../actions/blog";

const NewBlog = () => {
  const [state, formAction] = useActionState(createBlog, {
    error: "",
    values: {
      title: "",
      author: "",
      url: "",
    },
  });
  return (
    <div>
      <h2>Add a new blog</h2>
      <form action={formAction}>
        <div>
          <label>
            Title
            <input
              type="text"
              name="title"
              defaultValue={state.values?.title}
              required
            ></input>
          </label>
        </div>
        <div>
          <label>
            Author
            <input
              type="text"
              name="author"
              defaultValue={state.values?.author}
              required
            ></input>
          </label>
        </div>
        <div>
          <label>
            URL
            <input
              type="text"
              name="url"
              defaultValue={state.values?.url}
              required
            ></input>
          </label>
        </div>
        {state.error && <p aria-live="polite">{state.error}</p>}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewBlog;
