import Image from "next/image";

const array = [
  "https://i.ibb.co/FwCtfF5/photo-2024-11-29-21-20-03.jpg",
  "https://i.ibb.co/L0wXgPZ/photo-2024-11-29-21-20-00.jpg",
  "https://i.ibb.co/ZTF2qvd/photo-2024-11-29-21-00-59.jpg",
  "https://i.ibb.co/fxQ87NP/photo-2024-11-29-21-19-58.jpg",
];
export default function Home() {
  return (
    <div className="">
      <div className="mb-36">
        <h1 className="text-4xl font-bold text-center m-auto w-fit text-pink-600">
          Malik Sundus Rafiq
        </h1>
        <h1 className="text-4xl font-bold text-center m-auto w-fit text-pink-600 mb-10">
          Hello 👋👋
        </h1>
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {array.map((src) => (
          <Image
            key={src}
            src={src}
            alt="Window icon"
            width={500}
            height={500}
          />
        ))}
      </div>
    </div>
  );
}
