import Image from "next/image";

function Chef() {
    return ( <div>
              {/* Hero Section */}
              <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
                <Image
                  alt="Header Image"
                  src="/bgm.png" 
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Our Chef</h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 flex items-center gap-2">
                    <span className="text-white">Home</span>
                    <Image
                      src="/arrow.png"
                      alt="Arrow"
                      width={20}
                      height={20}
                      className="transform rotate-90"
                    />
                    <span className="text-[#FF9F0D]">Chef</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center py-11">
                <Image
                alt="Our Chefs"
                src="/chefs.png"
                height={1380}
                width={1320}
                />

              </div>
    </div> );
}

export default Chef;