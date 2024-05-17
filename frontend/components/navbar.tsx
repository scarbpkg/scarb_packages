"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import LogoIcon from "@/components/UI/iconsComponents/icons/logo";
import "globals";
import Link from "next/link";
const CustomNav = (props: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [packageData, setPackageData] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/packages/search?packageName=${searchTerm.toLowerCase()}`
      );
      const data = await response.json();
      if (data.length) {
        setSearchResults(data);
        setShowDropdown(true);
        setNoResults(false);
      } else {
        setNoResults(true);
      }
    } catch (err) {
      console.error("Error fetching data: ", err);
    } finally {
      setLoading(false);
    }
  };

  const savePackageData = (data: any) => {
    setPackageData(data);
    props.handleChange(data);
    setShowDropdown(false);
    router.push(`/${data.packageName}`);
  };
  return (
    <div className="shadow w-full">
      <nav className="flex items-center py-6 gap-3 md:gap-8 w-full max-w-7xl mx-auto px-4">
        <Link href="/" className="w-20">
          <LogoIcon />
        </Link>
        <div className="flex flex-1">
          <div className="relative w-full">
            <input
              type="text"
              value={searchTerm}
              className="w-full border rounded-full py-2 px-8"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter package name"
            />
            {showDropdown && searchResults.length > 0 && (
              <div className="absolute -bottom-12 w-full left-0 bg-white flex flex-col px-4 py-3">
                <ul>
                  {searchResults.map((result, index) => (
                    <li
                      onClick={() => savePackageData(result)}
                      key={index}
                      className="cursor-pointer"
                    >
                      {result.packageName }
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {noResults && (
              <div className="absolute -bottom-12 w-full left-0 bg-white flex flex-col px-4 py-3">
                No results found...
              </div>
            )}
            <button
              className="bg-black absolute rounded-r-full right-0 h-full text-white disabled:bg-black/50 px-6 text-sm"
              onClick={handleSearch}
              disabled={loading}
            >
              Search
            </button>
          </div>
          {/* {loading && <p>Loading...</p>} */}
        </div>
        <button
          className="bg-black rounded-full right-0 h-full text-white disabled:bg-black/50 px-6 py-3 text-sm"
          onClick={handleSearch}
          disabled={loading}
        >
          Browse all Packages
        </button>
      </nav>
    </div>
  );
};

export default CustomNav;
