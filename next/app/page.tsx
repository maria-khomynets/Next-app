import Link from "next/link";
import css from "./home.module.css";

export default function Home() {
  return (
    <section className={css.hero}>
      <span className={css.badge}>Ваш простір для нотаток</span>
      <h1 className={css.title}>
        Вітаємо у <span>NoteHub</span>
      </h1>
      <p className={css.subtitle}>
        Збирайте, впорядковуйте та швидко знаходьте свої нотатки — усе в одному
        зручному місці.
      </p>
      <div className={css.actions}>
        <Link className={css.primary} href="/notes/filter/all">
          Переглянути нотатки
        </Link>
        <Link className={css.secondary} href="/profile">
          Мій профіль
        </Link>
      </div>
    </section>
  );
}