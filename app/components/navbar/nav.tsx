import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="flex flex-col items-center p-4 bg-black relative">
        <div className="flex items-center justify-between w-full">
          <span className="text-yellow-500 font-bold text-lg flex-grow text-center">
            Food<span className="text-white">tuck</span>
          </span>
          <div className="md:hidden">
            <button aria-label="Toggle menu">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden md:flex flex-row items-center justify-around w-full p-2 ">
          <div className="flex items-center space-x-4">
            <Link className="cursor-pointer text-white" href="/">
              Home
            </Link>
            <Link className="text-white" href="/menu">
              Menu
            </Link>
            <Link className="text-white" href="/blog">
              Blog
            </Link>
            <Link className="text-white" href="/blogpage">
              Pages
            </Link>
            <Link className="text-white" href="/chef">
            Our Chefs
            </Link>
            <Link className="text-white" href="/shop">
            Shop
            </Link>
            <Link className="text-white" href="/contact">
            Contact
            </Link>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-4 pr-10 py-2 rounded-full bg-black border border-yellow-500 text-white focus:outline-none"
              />
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
