// components/NoteForm/NoteForm.tsx

"use client";

import { useState } from "react";
import { Category, createNote } from "@/src/lib/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useNoteDraftStore } from "@/src/lib/stores/noteStore";
import css from "./NoteForm.module.css";

type Props = {
  categories: Category[];
};

const NoteForm = ({ categories }: Props) => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { draft, setDraft, clearDraft } = useNoteDraftStore();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setDraft({
      ...draft,
      ...(name === "category" ? { categoryId: value } : { [name]: value }),
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      clearDraft();
      router.push("/notes/filter/all");
    },
    onError: () => {
      setError("Не вдалося створити нотатку. Спробуйте ще раз.");
    },
  });

  const handleSubmit = (formData: FormData) => {
    setError("");
    const values = Object.fromEntries(formData);
    const title = String(values.title ?? "").trim();
    const content = String(values.content ?? "").trim();
    const categoryId = String(values.category ?? "").trim();

    if (!title || !content || !categoryId) {
      setError("Заповніть усі поля, щоб створити нотатку.");
      return;
    }

    mutate({ title, content, categoryId });
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Create note</h1>
      <form className={css.form} action={handleSubmit}>
        <div className={css.field}>
          <label className={css.label} htmlFor="title">
            Title
          </label>
          <input
            className={css.input}
            id="title"
            type="text"
            name="title"
            defaultValue={draft?.title}
            onChange={handleChange}
            required
            minLength={1}
            placeholder="Замовлення в Starbucks"
          />
        </div>

        <div className={css.field}>
          <label className={css.label} htmlFor="content">
            Content
          </label>
          <textarea
            className={css.textarea}
            id="content"
            name="content"
            defaultValue={draft?.content}
            onChange={handleChange}
            required
            minLength={1}
            placeholder="Опис нотатки..."
          ></textarea>
        </div>

        <div className={css.field}>
          <label className={css.label} htmlFor="category">
            Category
          </label>
          <select
            className={css.select}
            id="category"
            name="category"
            defaultValue={draft?.categoryId}
            onChange={handleChange}
            required
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {error && <p className={css.error}>{error}</p>}

        <div className={css.actions}>
          <button className={css.submit} type="submit" disabled={isPending}>
            {isPending ? "Creating..." : "Create"}
          </button>
          <Link className={css.cancel} href="/notes/filter/all">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;