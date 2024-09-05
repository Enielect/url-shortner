"use client";

import wait from "@/lib/wait";
import React, { useEffect, useState } from "react";

const DisplayLink = () => {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    let button = document.querySelector(".copy-button") as HTMLDivElement;
    // get text in div
    let textToCopy = document.querySelector(".text-to-copy")
      ?.innerHTML as string;

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(textToCopy);
    });

    if (isClicked) {
      const interval = setTimeout(() => {
        setIsClicked(false);
      }, 3000);
    }
  }, [isClicked]);
  return (
    <div className="flex">
      <div className="bg-white py-3 px-4">
        <div className="text-to-copy">http.facebook.com</div>
      </div>
      <div className="">
        <button
          onClick={() => setIsClicked(true)}
          className={`w-full max-w-[100px] transition-all relative text-white bg-[#144EE3] copy-button h-full px-4 ${
            isClicked ? "button-animate" : ""
          }`}
        >
          {isClicked ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default DisplayLink;
