import Image from "next/image";
import logo from '../constants/images/logo/EMConstructionLogo.png';
import Link from "next/link";
import { Button } from '@headlessui/react'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row gap-8 row-start-2 place-content-center">
        <div>
          <Image
            src={logo}
            alt="EM Construction Logo"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="text-center px-20 place-content-center">
          <ul>
            <li>Heres a little story for you...</li>
            <li>Evandro came into the store one day and met kenny.</li>
            <li>He found out kenny had a software degree</li>
            <li>They agreed kenny would make him a logo and then a website!</li>
            <li>After a while, kenny made the logo and sent it to Evandro!</li>
            <li>Sadly kenny has not heard from evandro since then :(</li>
            <li>But this will not stop ben and kenny from making the site anyway!</li>
          </ul>
          <div className="flex place-content-center space-x-20 p-8">
            <div>
                <Button className="contactButton" > Review Us </Button>
            </div>
            <div>
                <Link href="/Contact">
                    <Button className="contactButton" > Contact Us </Button>
                </Link>
            </div>
          </div>       
        </div>

      </main>
      <footer className="row-start-3 text-gray-800 flex gap-6 flex-wrap items-center justify-center">
        <h1>Site Created by HamSull Development</h1>
        <h1>E: Hamsulldev@gmail.com</h1>
      </footer>
    </div>
  );
}
