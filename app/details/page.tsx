import DisplayLink from "@/components/DisplayLink";
import React, { useEffect } from "react";

const DetailsPage = () => {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center">
      <div className="space-y-6">
        <div>
          <div className="text-white text-center text-xl py-4">Original</div>
          <DisplayLink />
        </div>
        <div>
          <div className="text-white text-center text-xl py-4">Shortned</div>
          <DisplayLink />
        </div>
        <p className="text-white text-2xl pt-3 text-center">Date it expires :</p>
        <p className="text-white text-center">Monday, 1st September 2024</p>
      </div>
    </div>
  );
};

export default DetailsPage;
