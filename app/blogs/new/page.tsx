"use client";

import { useActionState, useEffect } from "react";
import { createBlog } from "../../actions/blog";
import { useRouter } from "next/navigation";
import { useNotification } from "../../components/NotificationContext";
import Input from "@/app/components/Input";
import InputContainer from "@/app/components/InputContainer";

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
          <label htmlFor="title">Title</label>
          <Input
            type="text"
            name="title"
            defaultValue={state.values?.title}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="author">Author</label>
          <Input
            type="text"
            name="author"
            defaultValue={state.values?.author}
            required
          ></Input>
        </InputContainer>
        <InputContainer>
          <label htmlFor="url">URL</label>
          <Input
            type="text"
            name="url"
            defaultValue={state.values?.url}
            required
          ></Input>
        </InputContainer>
        {state.error && (
          <p aria-live="polite" className="text-red-700 mb-5">
            {state.error}
          </p>
        )}
        <button type="submit" className="button">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
