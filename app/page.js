// import { Main } from "next/document";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" text-black flex flex-col gap-4 items-center justify-center">
          <p className="text-2xl font-bold">The best URL Shortner in the market</p>
          <p>We are the most straightforward URL Shortner in the world</p>
          <div className='flex gap-3'>
            <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
            <Link href="/"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
          </div>
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" src={"/vector.jpg"} alt="an Image of an vector" fill={true} />
        </div>
      </section>
    </main>
  );
}
