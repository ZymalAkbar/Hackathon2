import Image from "next/image";

function Side() {
  return (
    <div className="flex-shrink-0 ml-10 min-h-screen w-full md:w-[423px] p-4 mt-4">
      {/* SIDE SECTION */}
      <div>
        <h6>
          <input
            type="text"
            placeholder="Search Your Keyword"
            className="border border-gray-300 border-r-[#FF9F0D] border-r-[60px] p-4 h-[70px] w-full md:w-[425px] ml-3 md:ml-0 mb-4 md:mb-[40px]"
          />
        </h6>
      </div>

      <div className="w-full md:w-[424px] h-auto md:h-[423px] flex flex-col mb-6 md:mb-[30px] items-center justify-center bg-white border border-gray-300 rounded-sm">
        {/* Profile Image */}
        <div className="w-[147.7px] h-[129.43px] rounded-full overflow-hidden">
          <Image
            alt="Profile Picture"
            loading="lazy"
            width={148}
            height={130}
            className="object-cover rounded-full"
            src="/man.png"
          />
        </div>

        {/* User Name and Rating */}
        <div className="text-center mt-[30px]" style={{ width: "135.64px", height: "29.23px" }}>
          <p className="font-bold text-[20px] leading-[28px]">Prince Miyako</p>
          <div className="flex items-center justify-center mt-2">
            {/* Star Rating Image */}
            <div className="relative w-24 h-5">
              <Image src="/review.png" alt="Stars Rating" layout="fill" objectFit="cover" />
            </div>
            <p className="text-sm ml-2">(1 Review)</p>
          </div>
        </div>

        {/* User Description */}
        <div className="text-center mt-[40px]" style={{ width: "321.52px", height: "75.15px" }}>
          <p className="font-normal text-[16px] leading-[24px]">
            This is a sample paragraph text describing the user or any additional details you want to include. Centered and styled according to your requirement.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-6">
          <div className="relative w-6 h-6">
            <Image src="/1.png" alt="Facebook" layout="fill" objectFit="contain" />
          </div>
          <div className="relative w-6 h-6">
            <Image src="/2.png" alt="Twitter" layout="fill" objectFit="contain" />
          </div>
          <div className="relative w-6 h-6">
            <Image src="/4.png" alt="Instagram" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-[423px] h-auto bg-white border border-gray-300 p-4 mb-[30px] flex flex-col">
        <h2 className="font-bold text-[20px] leading-[28px] mb-4">Recent Post</h2>
        <div className="flex flex-col space-y-4">
          {/* Post 1 */}
          <div className="flex items-start space-x-4">
            <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
              <Image alt="Post Image" loading="lazy" width={99} height={91.58} className="object-cover w-full h-full" src="/burger.png" />
            </div>
            <div>
              <p className="text-sm font-medium mb-2">June 22, 2020</p>
              <p className="font-normal text-[16px] leading-[24px]">Lorem ipsum dolor sit cing elit, sed do.</p>
            </div>
          </div>

          {/* Post 2 */}
          <div className="flex items-start space-x-4">
            <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
              <Image alt="Post Image" loading="lazy" width={99} height={91.58} className="object-cover w-full h-full" src="/chicken.png" />
            </div>
            <div>
              <p className="text-sm font-medium mb-2">June 23, 2020</p>
              <p className="font-normal text-[16px] leading-[24px]">Lorem ipsum dolor sit cing elit, sed do.</p>
            </div>
          </div>

          {/* Post 3 */}
          <div className="flex items-start space-x-4">
            <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
              <Image alt="Post Image" loading="lazy" width={99} height={91.58} className="object-cover w-full h-full" src="/cheese.png" />
            </div>
            <div>
              <p className="text-sm font-medium mb-2">June 24, 2020</p>
              <p className="font-normal text-[16px] leading-[24px]">Lorem ipsum dolor sit cing elit, sed do.</p>
            </div>
          </div>

          {/* Post 4 */}
          <div className="flex items-start space-x-4">
            <div className="w-[99px] h-[91.58px] rounded-[6px] overflow-hidden bg-gray-300">
              <Image alt="Post Image" loading="lazy" width={99} height={91.58} className="object-cover w-full h-full" src="/peeza.png" />
            </div>
            <div>
              <p className="text-sm font-medium mb-2">June 25, 2020</p>
              <p className="font-normal text-[16px] leading-[24px]">Lorem ipsum dolor sit cing elit, sed do.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[423px] h-auto bg-white mb-[30px] border border-gray-300 p-4 mt-4">
        <h2 className="font-bold text-[20px] leading-[28px] mb-4">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 border border-gray-200 rounded-md">Burger</span>
          <span className="px-3 py-1 border border-gray-200 rounded-md">Pizza</span>
          <span className="px-3 py-1 border border-gray-200 rounded-md">Sandwich</span>
          <span className="px-3 py-1 border border-gray-200 rounded-md">Pasta</span>
          <span className="px-3 py-1 border border-gray-200 rounded-md">Fries</span>
          <span className="px-3 py-1 border border-gray-200 rounded-md">Shake</span>
          <span className="px-3 py-1 border border-gray-200 rounded-md">Salad</span>
          <span className="px-3 py-1 border border-gray-200 rounded-md">Soup</span>
          <span className="px-3 py-1 border border-gray-200 rounded-md">Tacos</span>
          <span className="px-3 py-1 border border-gray-200 rounded-md">Burrito</span>
          <span className="px-3 py-1 border border-gray-200 rounded-md">Nachos</span>
          <span className="px-3 py-1 border border-gray-200 rounded-md">Wrap</span>
        </div>
      </div>

      <div className="w-full md:w-[423px] py-8 text-center border border-gray-300">
        <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
        <div className="flex justify-center gap-6">
          {/* Social Media Icons */}
          <div className="flex justify-center items-center bg-[#C4C4C4] p-3 rounded-full">
            <img alt="Facebook" src="/1.png" width={24} height={24} className="w-6 h-6" />
          </div>
          <div className="flex justify-center items-center bg-[#C4C4C4] p-3 rounded-full">
            <img alt="YouTube" src="/3.png" width={24} height={24} className="w-6 h-6" />
          </div>
          <div className="flex justify-center items-center bg-[#FF9F0D] p-3 rounded-full">
            <img alt="Instagram" src="/4.png" width={24} height={24} className="w-6 h-6" />
          </div>
          <div className="flex justify-center items-center bg-[#C4C4C4] p-3 rounded-full">
            <img alt="Twitter" src="/twitter-icon.png" width={24} height={24} className="w-6 h-6" />
          </div>
          <div className="flex justify-center items-center bg-[#C4C4C4] p-3 rounded-full">
            <img alt="Pinterest" src="/pinterest.png" width={24} height={24} className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Side;
