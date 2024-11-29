import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image
        aria-hidden
        src="https://i.ibb.co/ZTF2qvd/photo-2024-11-29-21-00-59.jpg"
        alt="Window icon"
        width={400}
        height={400}
      />
      <h1 className="text-4xl font-bold text-center">SunDUS</h1>
    </div>
  );
}
