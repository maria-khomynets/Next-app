import { Note } from "@/src/lib/api";
import Link from "next/link";
import css from "./NoteItem.module.css";
type Props = {
  item: Note;
};
export default function NoteItem({ item }: Props) {
  return (
    <li className={css.item}>
      <Link className={css.link} href={`/notes/${item.id}`}>
        {item.title}
      </Link>
    </li>
  );
}
