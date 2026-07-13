import Link from "next/link";
import css from "./profile.module.css";

const Profile = () => {
  return (
    <section className={css.profile}>
      <h1 className={css.title}>My Profile</h1>

      <h2 className={css.subtitle}>Name: User name</h2>

      <p className={css.description}>
        Some description: Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Cumque non quis, vero consectetur eum at commodi facere error,
        laborum, rerum labore corrupti neque veritatis sed minima et nam. Autem,
        cumque.
      </p>

      <Link href="/profile/edit" className={css.link}>
        Edit profile
      </Link>
    </section>
  );
};

export default Profile;
