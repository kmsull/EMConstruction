import Image from "next/image";
import logo from '../constants/Images/Logo/EMConstructionLogo.png';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <Image
          src={logo}
          alt="EM Construction Logo"
          width={500}
          height={500}
          priority
        />

        <div>
          <ul>
            <li>Heres some information on the home page!</li>
            <li>I dont know why the image is not displaying on the page???</li>
          </ul>
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h1> Down here is the footer </h1>
      </footer>
    </div>
  );
}
