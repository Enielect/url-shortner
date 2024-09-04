import { ArrowRight, Link } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-[30px] min-h-[100dvh]">
      <header className="text-[20px] gradient-header text-center py-5">Ukeme</header>
      <h1 className="text-[40px] text-center text-pink-300 font-bold gradient-header">
        Shorten your long links
      </h1>
      <h4 className="text-white text-center text-sm py-4">
        Linkly is an efficient and easy-to-use URL shortening service that
        streamlines your online experience.
      </h4>
      <div className="flex justify-center">
        <div className="rounded-full flex items-center pr-1 py-1 bg-[#181E29] border border-[#353C4A] max-w-[300px]">
          <div className="px-3">
            <Link className="text-white" />
          </div>
          <input
            type="text"
            style={{ border: "none", outline: "none" }}
            className="max-w-[200px] text-white bg-[#181E29] py-2"
            placeholder="Enter your long link here"
          />
          <button className="flex justify-center items-center w-[40px] h-[40px] bg-[#144EE3] rounded-full">
            <ArrowRight className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
