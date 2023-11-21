import { useState } from "react";

const Header = () => {
  const [searchString, setSearchString] = useState<string>();

  return (
    <header className="sticky top-0 text-white bg-[#d9d8d2] ">
      <div className="grid grid-cols-4 h-14 items-center">
        <div className="relative text-[#58514c] justify-self-end self-center col-span-2">
          <button className="absolute left-0 ml-4 mt-3">
            <svg
              className=" h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
          <input
            className="border-2 border-[#cec7b5] bg-[#cec7b5] h-10 pl-10 pr-16 rounded-lg text-sm focus:outline-none active:ring-[#58514c] placeholder:text-[#58514c] hover:border-[#58514c] focus:border-[#58514c] active:border-[#58514c] "
            type="search"
            name="search"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            placeholder="Search"
          />
        </div>
        <div className=" text-black pl-10">Dashboard</div>
        <div className="justify-self-center">
          <img
            width={160}
            src="https://assets-global.website-files.com/5f9fe0fe191b5c5a04fb4605/5fa0110eb8716f4b2c12457e_Skybound-Wealth-Management-Logo-001.svg"
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#c4bfb2] h-[1px]">

      </div>
    </header>
  );
};

export default Header;
