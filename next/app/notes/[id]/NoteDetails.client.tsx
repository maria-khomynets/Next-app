"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { getSingleNote } from "@/src/lib/api";
import css from "./NoteDetails.module.css";

export default function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note, id"],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  });
  const router = useRouter();
  const handleGoBack = () => {
    const isSure = confirm("are you sure&");
    if (isSure) {
      router.back();
    }
  };
  if (isLoading) return <p className={css.status}>Loading...</p>;

  if (error || !note) return <p className={css.status}>Some error..</p>;

  const formattedDate = note.updatedAt
    ? `Updated at: ${note.updatedAt}`
    : `Created at: ${note.createdAt}`;

  return (
    <div className={css.wrapper}>
      <button className={css.back} onClick={handleGoBack}>
        Back
      </button>
      <h2 className={css.title}>{note.title}</h2>
      <p className={css.content}>{note.content}</p>
      <p className={css.date}>{formattedDate}</p>
    </div>
  );
}
