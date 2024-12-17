import Image from "next/image";
import Link from 'next/link';

function Page() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        {/* Background Image */}
        <Image
          alt="Header Image"
          src="/bgm.png"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute inset-0"
        />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">404 Error</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 flex items-center gap-2">
            <span className="text-white">Home</span>
            <Image
              src="/arrow.png" 
              alt="Arrow"
              width={20}
              height={20}
              className="transform rotate-90"
            />
            <span className="text-[#FF9F0D]">404</span>
          </p>
        </div>
      </div>

      <section className="p-10 relative bg-white pt-36 flex flex-col items-center">
        <div className="w-[630px] text-center">
          <h3 className="text-[96px] font-bold text-[#FF9F0D] mb-6">404</h3>
          <p className="font-bold text-[32px] mb-4">Oops! Looks like something went wrong</p>
          <p className="text-[18px] mb-4">Page cannot be found! We&apos;ll have it figured out in no time.</p>
          <p className="text-[18px] mb-6">Meanwhile, check out these fresh ideas:</p>

          
          <Link href="/">
            <button className="bg-[#FF9F0D] text-white text-[18px] font-bold px-6 py-2 rounded hover:bg-[#e8890b]">
              Go Back to Home
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Page;
