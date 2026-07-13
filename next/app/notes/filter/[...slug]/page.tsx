import NoteList from "@/components/NoteList/NoteList";
import { getNotes } from "@/src/lib/api";

// app/notes/filter/[...slug]/page.tsx
type Props = {
  params: Promise<{ slug: string[] }>;
};
export default async function NotesByCategory({ params }: Props) {
  const { slug } = await params;
  const category = slug[0] === "all" ? undefined : slug[0];
  const response = await getNotes(category);
  return (
    <div>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </div>
  );
}
