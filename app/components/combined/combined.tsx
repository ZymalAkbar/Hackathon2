import Image from 'next/image';

const CombinedComponent = () => {
  return (
    <>
      {/* Pick Section */}
      <div className="relative w-full h-[480px] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-[-1]">
          <Image
            alt="background"
            src="/background.png"
            layout="fill"
            objectFit="cover"
            priority
          />
          {/* Overlay to add opacity to the background image */}
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        {/* Content Section */}
        <div className="text-white flex flex-col md:flex-row md:m-[80px] md:mt-[160px] gap-6 md:gap-0">
          {/* First Item */}
          <div className="flex flex-col items-center">
            <div className="md:ml-[135px] ml-[140px] md:mt-0 mt-[20px]">
              <Image
                alt="cap-pic"
                src="/cap.png"
                width={120}
                height={120}
              />
            </div>
            <p className="font-bold text-[24px] leading-[32px] text-[#FFFFFF] text-center md:text-left my-6">
              Professional Chefs
            </p>
            <p className="font-bold text-[40px] leading-[48px] text-[#FFFFFF] text-center md:text-left my-6">
              420
            </p>
          </div>

          {/* Second Item */}
          <div className="flex flex-col items-center">
            <div className="md:ml-[135px] ml-[140px]">
              <Image
                alt="juice-icon"
                src="/juice.png"
                width={120}
                height={120}
              />
            </div>
            <p className="font-bold text-[24px] leading-[32px] text-[#FFFFFF] text-center md:text-left my-6">
              Professional Chefs
            </p>
            <p className="font-bold text-[40px] leading-[48px] text-[#FFFFFF] text-center md:text-left my-6">
              320
            </p>
          </div>

          {/* Third Item */}
          <div className="flex flex-col items-center">
            <div className="md:ml-[135px] ml-[140px]">
              <Image
                alt="spoon-icon"
                src="/spoon.png"
                width={120}
                height={120}
              />
            </div>
            <p className="font-bold text-[24px] leading-[32px] text-[#FFFFFF] text-center md:text-left my-6">
              Professional Chefs
            </p>
            <p className="font-bold text-[40px] leading-[48px] text-[#FFFFFF] text-center md:text-left my-6">
              30+
            </p>
          </div>

          {/* Fourth Item */}
          <div className="flex flex-col items-center">
            <div className="md:ml-[135px] ml-[140px]">
              <Image
                alt="pizza-icon"
                src="/pizza.png"
                width={120}
                height={120}
              />
            </div>
            <p className="font-bold text-[24px] leading-[32px] text-[#FFFFFF] text-center md:text-left my-6">
              Professional Chefs
            </p>
            <p className="font-bold text-[40px] leading-[48px] text-[#FFFFFF] text-center md:text-left my-6">
              220
            </p>
          </div>
        </div>
      </div>

      {/* Chef Section */}
      <div className="bg-black h-[80vh] w-full flex flex-col justify-center items-center px-0">
        {/* Chef Section Title */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[#FF9F0D] font-greatVibes text-center mb-4 sm:mb-6">
              Chefs
            </h1>
            <div className="text-base font-bold text-white sm:text-lg md:text-[48px] flex gap-2 text-center justify-center mb-10">
              <p><span className="text-[#FF9F0D]">Me</span>et our Chef</p>
            </div>
          </div>
        </div>

        {/* Chef Cards */}
        <div className="md:mt-[5px] md:px-32">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {/* Chef Card 1 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl border-4 border-transparent hover:border-purple-600">
              <div className="relative flex-1">
                <Image
                  alt="Tahmina Rumi"
                  src="/chef1.png"
                  width={312}
                  height={400}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 w-[200px] bg-white p-4 text-black">
                  <h3 className="text-sm font-bold">Tahmina Rumi</h3>
                  <p className="text-xs">Chef</p>
                </div>
              </div>
            </div>

            {/* Chef Card 2 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl border-4 border-transparent hover:border-purple-600">
              <div className="relative flex-1">
                <Image
                  alt="Jorina Begum"
                  src="/chef2.png"
                  width={312}
                  height={400}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 w-[200px] bg-white p-4 text-black">
                  <h3 className="text-sm font-bold">Jorina Begum</h3>
                  <p className="text-xs">Chef</p>
                </div>
              </div>
            </div>

            {/* Chef Card 3 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl border-4 border-transparent hover:border-purple-600">
              <div className="relative flex-1">
                <Image
                  alt="M. Mohammad"
                  src="/chef3.png"
                  width={312}
                  height={400}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 w-[200px] bg-white p-4 text-black">
                  <h3 className="text-sm font-bold">M. Mohammad</h3>
                  <p className="text-xs">Chef</p>
                </div>
              </div>
            </div>

            {/* Chef Card 4 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl border-4 border-transparent hover:border-purple-600">
              <div className="relative flex-1">
                <Image
                  alt="Munna Kathy"
                  src="/chef4.png"
                  width={312}
                  height={400}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 w-[200px] bg-white p-4 text-black">
                  <h3 className="text-sm font-bold">Munna Kathy</h3>
                  <p className="text-xs">Chef</p>
                </div>
              </div>
            </div>
          </div>

          {/* See More Button */}
          <div className="flex justify-center mt-6">
            <button className="px-[30px] py-3 rounded-[25px] border-[1px] border-[#FF9F0D] text-white text-lg focus:outline-none">
              See More
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="bg-black text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-amber-500 text-3xl font-greatVibes mb-2">Testimonials</h2>
          <h3 className="text-4xl font-bold mb-12">What our clients are saying</h3>

          {/* Testimonial Card */}
          <div className="bg-white text-black p-8 rounded-lg relative">
            <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 z-10">
              <Image
                alt="profile"
                src="/profile.png"
                width={80}
                height={80}
                className="rounded-full border-4 border-white"
              />
            </div>
            <div className=' flex items-center justify-center'>
              <Image
              src="/Quotes.png"
              alt='img'
              height={50}
              width={50}
              />

            </div>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <div className="flex justify-center mb-4">
              <p className="font-bold text-xl">Alamin Hassan</p>
            </div>
            <div className="flex justify-center">
              <p className="italic text-gray-500">Food Specialist</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CombinedComponent;
