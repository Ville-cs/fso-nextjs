"use client";

import { useActionState, useEffect } from "react";
import { createBlog } from "../../actions/blog";
import { useRouter } from "next/navigation";
import { useNotification } from "../../components/NotificationContext";
import Input from "./Input";
import InputContainer from "./InputContainer";

const NewBlog = () => {
  const [state, formAction] = useActionState(createBlog, {
    error: "",
    values: {
      title: "",
      author: "",
      url: "",
    },
    success: false,
  });

  const { showNotification } = useNotification();
  const router = useRouter();
  useEffect(() => {
    if (state.success) {
      showNotification("blog created");
      router.push("/blogs");
    }
  }, [state, showNotification, router]);

  return (
    <div>
      <h2 className="text-5xl mb-10 text-center">Add a new blog</h2>
      <form action={formAction} className="flex-col items-center">
        <InputContainer>
          <label>
            Title
            <Input
              type="text"
              name="title"
              defaultValue={state.values?.title}
              required
            />
          </label>
        </InputContainer>
        <InputContainer>
          <label>
            Author
            <Input
              type="text"
              name="author"
              defaultValue={state.values?.author}
              required
            ></Input>
          </label>
        </InputContainer>
        <InputContainer>
          <label>
            URL
            <Input
              type="text"
              name="url"
              defaultValue={state.values?.url}
              required
            ></Input>
          </label>
        </InputContainer>
        {state.error && (
          <p aria-live="polite" className="text-red-700 mb-5">
            {state.error}
          </p>
        )}
        <button
          type="submit"
          className="py-5 px-10 rounded-2xl hover:bg-blue-700 bg-green-900"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
