import { ArrowRight, Link } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-[30px] min-h-[100dvh]">
      <header className="text-[20px] gradient-header text-center py-5">
        Ukeme
      </header>
      <h1 className="text-[40px] text-center md:text-[50px] text-pink-300 font-bold gradient-header">
        Shorten your long links
      </h1>
      <h4 className="text-white text-center text-sm md:text-lg py-4">
        Linkly is an efficient and easy-to-use URL shortening service that
        streamlines your online experience.
      </h4>
      <div className="flex justify-center">
        <div className="rounded-full flex justify-between items-center pr-1 py-1 bg-[#181E29] border border-[#353C4A] max-w-[300px] w-[min(50vw,550px)] md:max-w-[700px]">
          <div className="flex items-center">
            <div className="px-3">
              <Link className="text-white" />
            </div>
            <div className="w-full">
              <input
                type="text"
                style={{ border: "none", outline: "none" }}
                className="max-w-[200px] min-[556px]:w-full w-[calc(100%-7px)] md:max-w-[600px] text-white bg-[#181E29] py-2"
                placeholder="Enter your long link here"
              />
            </div>
          </div>
          <button className="flex md:hidden justify-center shadow-button button-resize-corrector  items-center w-[75px] h-[40px] bg-[#144EE3] rounded-full">
            <ArrowRight className="text-white" />
          </button>
          <button className="md:flex text-white hidden  justify-center big-button-shadow items-center px-4 py-3 bg-[#144EE3] rounded-full">
            Shorten Now
          </button>
        </div>
      </div>
    </div>
  );
}
