"use client";

import LogoIcon from "@/components/UI/iconsComponents/icons/logo";
import ReadmeViewer from "@/components/ReadmeViewer";
import { useState } from "react";
import "globals";
import "github-markdown-css";
export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const owner = "keep-starknet-strange";
  const repo = "art-peace";
  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(`backendapi?searchTerm=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (err) {
      console.error("Error fetching data: ", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="flex min-h-screen text-black flex-col items-center w-full mx-auto">
      <nav className="flex items-center py-6 gap-3 md:gap-8 w-full max-w-7xl mx-auto px-4">
        <div className="w-20">
          <LogoIcon />
        </div>
        <div className="flex flex-1">
          <input
            type="text"
            value={searchTerm}
            className="w-full border p-2"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter package name"
          />
          <button
            className="bg-black text-white px-6 text-sm"
            onClick={handleSearch}
            disabled={loading}
          >
            Search
          </button>
          {loading && <p>Loading...</p>}
          {searchResults.length > 0 && (
            <ul>
              {searchResults.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          )}
        </div>
      </nav>
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
      <div className="container">
        <ReadmeViewer owner={owner} repo={repo} />
      </div>
    </main>
  );
}
