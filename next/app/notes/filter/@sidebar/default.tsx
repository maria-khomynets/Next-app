import Link from "next/link";
import { getCategories } from "@/src/lib/api";

export default async function NotesSidebar() {
  const categories = await getCategories();
  return (
    <ul>
      <li>
        <Link href={`/notes/filter/all`}> All notes</Link>
      </li>
      {categories.map((category) => (
        <li key={category.id}>
          <Link href={`/notes/filter/${category.id}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
}
