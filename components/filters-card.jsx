import Image from "next/image";

export default function FilterCard() {
  return (
    <div className="bg-[#011B4E] inline-block">
        <div className="flex justify-center items-center text-white text-5xl pt-20">
            <h1>Kiralık veya Satılık En İyi Sonuçları Bulun</h1>
        </div>
      <Image
        src="/bg-image-01-1.png"
        width={1440}
        height={550}
        alt="icon"
      />
    </div>
  );
}