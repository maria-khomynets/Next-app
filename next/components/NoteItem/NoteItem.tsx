import { Note } from "@/src/lib/api";
type Props = {
  item: Note;
};
export default function NoteItem({ item }: Props) {
  return (
    <li>
      <p>{item.title}</p>
    </li>
  );
}
