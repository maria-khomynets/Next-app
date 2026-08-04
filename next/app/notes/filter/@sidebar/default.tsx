import Link from "next/link";
import { getCategories } from "@/src/lib/api";
import css from "./sidebar.module.css";

export default async function NotesSidebar() {
  const categories = await getCategories();
  return (
    <>
      <p className={css.title}>Categories</p>
      <ul className={css.list}>
        <li className={css.item}>
          <Link href={`/notes/filter/all`}> All notes</Link>
        </li>
        {categories.map((category) => (
          <li className={css.item} key={category.id}>
            <Link href={`/notes/filter/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
