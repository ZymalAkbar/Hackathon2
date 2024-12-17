import Image from "next/image";
import Side from "../components/side/page";

function Blog() {
  return (
    <div className="flex justify-center items-start w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[600px] lg:h-[700px] ">
      <Image
        alt="Header Image"
        src="/bgm.png"  // Ensure this path is correct and the image is in the public folder
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0 "
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Blog List</h1>
        <p className="text-sm md:text-base lg:text-lg mt-2 flex items-center gap-2">
          <span className="text-white">Home</span>
          <Image
            src="/arrow.png"  // Ensure this path is correct as well
            alt="Arrow"
            width={20}
            height={20}
            className="transform rotate-90"
          />
          <span className="text-[#FF9F0D]">Blog</span>
        </p>
      </div>
    </div>
      {/* BLOG SECTION */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center justify-center space-y-12 max-w-4xl mx-auto">
          {/* Blog-1 */}
          <div className="w-full md:w-[700px] flex flex-col md:mt-[30px] mt-[50px] bg-white">
            <div className="relative w-full h-[300px] md:h-[400px]">
              <div className="absolute top-0 left-0 bg-[#FF9F0D] text-white px-4 py-2 text-sm font-normal">14-Feb-2022</div>
              <Image 
                alt="Blog Image" 
                src="/taco.png"
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 right-0 bottom-0"
              />
            </div>
            <div className="p-4">
              <div className="flex mt-6 items-center text-[14px] md:text-[16px] font-normal leading-[24px] text-gray-500">
                <span className="mr-2">14-Feb-2022</span>
                <span className="mx-2">|</span>
                <span>3</span>
                <span className="mx-2">|</span>
                <span>Admin</span>
              </div>
              <h2 className="mt-4 text-[16px] md:text-[18px] font-semibold leading-[24px] text-black">
                10 Reasons To Do A Digital Detox Challenge
              </h2>
              <hr className="my-4 border-gray-300" />
              <p className="text-[14px] md:text-[16px] font-normal leading-[24px] text-gray-500">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...
              </p>
              <button className="mt-6 flex border-[1px] border-[#FF9F0D] p-2 rounded-md items-center text-[14px] md:text-[16px] font-normal leading-[24px] text-[#FF9F0D]">
                Read More
              </button>
            </div>
          </div>

          {/* Blog-2 */}
          <div className="w-full md:w-[700px] flex flex-col md:mt-[30px] mt-[50px] bg-white">
            <div className="relative w-full h-[300px] md:h-[400px]">
              <div className="absolute top-0 left-0 bg-[#FF9F0D] text-white px-4 py-2 text-sm font-normal">14-Feb-2022</div>
              <Image 
                alt="Blog Image" 
                src="/peeza.png" 
                layout="fill" 
                objectFit="cover" 
                className="absolute top-0 left-0 right-0 bottom-0"
              />
            </div>
            <div className="p-4">
              <div className="flex mt-6 items-center text-[14px] md:text-[16px] font-normal leading-[24px] text-gray-500">
                <span className="mr-2">14-Feb-2022</span>
                <span className="mx-2">|</span>
                <span>3</span>
                <span className="mx-2">|</span>
                <span>Admin</span>
              </div>
              <h2 className="mt-4 text-[16px] md:text-[18px] font-semibold leading-[24px] text-black">
                10 Reasons To Do A Digital Detox Challenge
              </h2>
              <hr className="my-4 border-gray-300" />
              <p className="text-[14px] md:text-[16px] font-normal leading-[24px] text-gray-500">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...
              </p>
              <button className="mt-6 flex border-[1px] border-[#FF9F0D] p-2 rounded-md items-center text-[14px] md:text-[16px] font-normal leading-[24px] text-[#FF9F0D]">
                Read More
              </button>
            </div>
          </div>

          {/* Blog-3 */}
          <div className="w-full md:w-[700px] flex flex-col md:mt-[30px] mt-[50px] bg-white">
            <div className="relative w-full h-[300px] md:h-[400px]">
              <div className="absolute top-0 left-0 bg-[#FF9F0D] text-white px-4 py-2 text-sm font-normal">
                14-Feb-2022
              </div>
              <Image 
                alt="Blog Image"
                src="/soup.png"
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 right-0 bottom-0"
              />
            </div>
            <div className="p-4">
              <div className="flex mt-6 items-center text-[14px] md:text-[16px] font-normal leading-[24px] text-gray-500">
                <span className="mr-2">14-Feb-2022</span>
                <span className="mx-2">|</span>
                <span>3</span>
                <span className="mx-2">|</span>
                <span>Admin</span>
              </div>
              <h2 className="mt-4 text-[16px] md:text-[18px] font-semibold leading-[24px] text-black">
                10 Reasons To Do A Digital Detox Challenge
              </h2>
              <hr className="my-4 border-gray-300" />
              <p className="text-[14px] md:text-[16px] font-normal leading-[24px] text-gray-500">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...
              </p>
              <button className="mt-6 flex border-[1px] border-[#FF9F0D] p-2 rounded-md items-center text-[14px] md:text-[16px] font-normal leading-[24px] text-[#FF9F0D]">
                Read More
              </button>
            </div>
          </div>

          {/* Blog-4 */}
          <div className="w-full md:w-[700px] flex flex-col md:mt-[30px] mt-[50px] bg-white mx-auto">
            <div className="relative w-full h-[300px] md:h-[400px]">
              <div className="absolute top-0 left-0 bg-[#FF9F0D] text-white px-4 py-2 text-sm font-normal">
                14-Feb-2022
              </div>
              <Image
                alt="Blog Image"
                src="/sw.png" 
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 right-0 bottom-0"
              />
            </div>
            <div className="p-4">
              <div className="flex mt-6 items-center text-[14px] md:text-[16px] font-normal leading-[24px] text-gray-500">
                <span className="mr-2">14-Feb-2022</span>
                <span className="mx-2">|</span>
                <span className="mr-2">3</span>
                <span className="mx-2">|</span>
                <span>Admin</span>
              </div>
              <h2 className="mt-4 text-[16px] md:text-[18px] font-semibold leading-[24px] text-black">
                10 Reasons To Do A Digital Detox Challenge
              </h2>
              <hr className="my-4 border-gray-300" />
              <p className="text-[14px] md:text-[16px] font-normal leading-[24px] text-gray-500">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...
              </p>
              <button className="mt-6 flex border-[1px] border-[#FF9F0D] p-2 rounded-md items-center text-[14px] md:text-[16px] font-normal leading-[24px] text-[#FF9F0D]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
     <div>
        <Side/>
     </div>
    </div>

  );
}

export default Blog;
