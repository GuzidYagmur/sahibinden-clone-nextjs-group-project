"use client";
export default function Error({ error }) {
  return (
    <div>Bir hata oluştu: {error === "string" ? error : "Bilinmeyen Hata"}</div>
  );
}
