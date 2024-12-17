import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full mt-0"> 
      <div className="flex flex-col md:flex-row justify-between items-center bg-black px-4 md:px-16 py-8 md:py-12">
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl md:text-4xl font-semibold text-center md:text-left">
            <span className="text-[#FF9F0D]">St</span>ill You Need Our Support?
          </h2>
          <p className="text-sm md:text-base font-light text-center md:text-left mt-4">
            Don&apos;t wait, make a smart &amp; logical quote here. It&apos;s pretty easy.
          </p>
        </div>
        <div className="flex mt-6 md:mt-0">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-2 px-4 rounded-l-md focus:outline-none"
          />
          <button className="text-[#FF9F0D] bg-white py-2 px-4 rounded-r-md">
            Subscribe Now
          </button>
        </div>
      </div>
      <hr className="border-[#FF9F0D] mx-4 md:mx-16" />
      <div className="max-w-screen-xl mx-auto py-8 md:py-12 px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
        <div>
          <h2 className="mb-6 text-xl font-semibold">About Us</h2>
          <p className="text-sm text-gray-300">
            Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car services in major cities worldwide.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="bg-[#FF9F0D] flex items-center justify-center w-[77px] h-[71px] rounded">
              <Image
                src="/clock.png" 
                alt="Clock Icon"
                width={30}
                height={30}
              />
            </div>
            <div>
              <p className="text-sm font-semibold">Opening Hours</p>
              <p className="text-xs">Mon - Sat (8:00 - 6:00)</p>
              <p className="text-xs">Sunday - Closed</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-xl font-semibold">Useful Links</h2>
          <ul className="space-y-4 text-gray-300">
            <li><a href="#" className="hover:text-white hover:underline">About</a></li>
            <li><a href="#" className="hover:text-white hover:underline">News</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Partner</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Team</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Menu</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-xl font-semibold">Help?</h2>
          <ul className="space-y-4 text-gray-300">
            <li><a href="#" className="hover:text-white hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Reporting</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Documentation</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Support Policy</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Privacy</a></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-xl font-semibold">Recent Post</h2>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <Image
                src="/img1.png" 
                alt="Post Image"
                width={80}
                height={80}
              />
              <div>
                <p className="text-xs text-gray-400">20 Feb 2022</p>
                <p className="text-sm text-gray-200">Keep Your Business</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Image
                src="/img2.png" 
                alt="Post Image"
                width={80}
                height={80}
              />
              <div>
                <p className="text-xs text-gray-400">20 Feb 2022</p>
                <p className="text-sm text-gray-200">Keep Your Business</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Image
                src="/img3.png" 
                alt="Post Image"
                width={80}
                height={80}
              />
              <div>
                <p className="text-xs text-gray-400">20 Feb 2022</p>
                <p className="text-sm text-gray-200">Keep Your Business</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#4F4F4F] py-6 px-4 md:flex md:justify-between md:items-center text-center md:text-left">
        <span className="text-sm text-gray-300">Copyright © 2022 Ayeman. All Rights Reserved.</span>
        <div className="flex justify-center md:justify-end gap-4 mt-4 md:mt-0">
          <div className="bg-white w-9 h-9 flex items-center justify-center rounded">
            <Image
              src="/1.png" 
              alt="Facebook"
              width={24}
              height={24}
            />
          </div>
          <div className="bg-white w-9 h-9 flex items-center justify-center rounded">
            <Image
              src="/2.png" 
              alt="Twitter"
              width={24}
              height={24}
            />
          </div>
          <div className="bg-white w-9 h-9 flex items-center justify-center rounded">
            <Image
              src="/3.png" 
              alt="YouTube"
              width={24}
              height={24}
            />
          </div>
          <div className="bg-white w-9 h-9 flex items-center justify-center rounded">
            <Image
              src="/4.png" 
              alt="Instagram"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
