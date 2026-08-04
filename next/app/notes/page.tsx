import NoteList from "@/components/NoteList/NoteList";
import { getNotes } from "@/src/lib/api";
import css from "./page.module.css";
export default async function Notes() {
  const response = await getNotes();

  return (
    <section>
      <h1 className={css.title}>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
}
