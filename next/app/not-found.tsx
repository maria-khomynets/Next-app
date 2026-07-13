// app/not-found.tsx

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  const [count, setCount] = useState(3);
  useEffect(() => {
    if (count === 0) {
      router.push("/");
      return;
    }
    // Редірект через 3 секунди
    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count, router]);

  return (
    <div>
      <h1>404 - Сторінку не знайдено</h1>
      <p>Вас буде перенаправлено на головну через {count} секунд…</p>
    </div>
  );
};

export default NotFound;
