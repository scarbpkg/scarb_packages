"use client";

import "globals";
export default function Home() {

  return (
    <main className="flex min-h-screen text-black flex-col items-center w-full mx-auto">
      <div className="bg-[#292277] gradient w-full">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight leading-relaxed text-white/80 sm:text-6xl">
              Build amazing Cairo and Starknet dApps with scarb packages
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              amet libero corrupti ipsa ea iusto dolorem, perspiciatis expedita
              facilis, harum tempora pariatur inventore nostrum vel et earum
              fugiat saepe accusamus est recusandae repudiandae culpa mollitia
              fugit doloremque. Error, id temporibus!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
