"use client";

import { strapi } from "@/lib/strapi";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
    try {
      await strapi.register(formData);

      await strapi.login({
        identifier: formData.email,
        password: formData.password,
      });
      router.refresh();
      router.push("/");
    } catch (e) {
      console.log(e);
      setError(e.error?.message || "Bir hata oluştu");
    }
  };

  return (
    <div>
      {error && <small className="text-red-500">{error}</small>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          required
        />{" "}
        <br />
        <input type="email" name="email" placeholder="E-posta" required />{" "}
        <br />
        <input
          type="password"
          name="password"
          placeholder="Şifre"
          required
        />{" "}
        <br />
        <button className="border px-3 py-2 rounded-md">Kayıt Ol</button>
      </form>
    </div>
  );
}
