"use client";

import { ReactNode, createContext, useState } from "react";

export const PackageContextProvider = ({
  children,
}: {children: ReactNode}) => {

  const [searchResults, setSearchResults] = useState([]);
}