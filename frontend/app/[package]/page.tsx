"use client";

import ReadmeViewer from "@/components/ReadmeViewer";
import "globals";
import "github-markdown-css";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Page() {
  const owner = "keep-starknet-strange";
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [packageData, setPackageData] = useState(null);
  useEffect(() => {
    const handleSearch = async () => {
      const pre = pathname;
      const newLoad = pre.split("");
      newLoad.shift();
      const payload = newLoad.join("");
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/packages/search?packageName=${payload}`
        );
        const data = await response.json();
        console.log(data);
          setPackageData(data[0]);
      } catch (err) {
        console.error("Error fetching data: ", err);
      } finally {
        setLoading(false);
      }
    };

    handleSearch();
  }, [pathname])
  return (
    <div className="w-full mx-auto">
      <div className="w-full max-w-7xl mx-auto">
        <div className="container">
          <ReadmeViewer owner={owner} packageData={packageData} />
        </div>
      </div>
    </div>
  );
}
