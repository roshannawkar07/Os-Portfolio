import React, { useEffect, useState } from "react";
import "./SearchBar.scss";
import { RiSearchLine } from "@remixicon/react";

const SearchBar = () => {
  const text = "Welcome to my portfolio";
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setValue((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 120);

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <span className="icon left">
          <RiSearchLine />
        </span>

        <input type="text" value={value} disabled />

        <span className="icon right"></span>
      </div>
    </div>
  );
};

export default SearchBar;
