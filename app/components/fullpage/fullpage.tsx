import Image from 'next/image';

const FullPageComponent = () => {
  return (
    <div>
      {/* Home Page Section */}
      <div className="w-full h-screen bg-[#0D0D0DF2] relative flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            alt="Home Background"
            fetchPriority="high"
            layout="fill"
            objectFit="cover"
            src="/home-bg.png"
            className="opacity-50 z-[-1]"
          />
        </div>
        <div className="flex gap-[20px] md:gap-[80px] justify-center items-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="absolute top-[191px] left-[242px] w-[25.28px] h-[492px] ">
              <Image
                alt="lines and icons"
                src="/icon.png" 
                width={25.28}
                height={492}
              />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start md:gap-[180px] md:flex-row text-center">
            <div className="md:mt-[160px] flex flex-col items-center md:w-[472px] md:h-[356px]">
              <p className="text-[32px] text-[#FF9F0D] font-greatVibes">Its Quick &amp; Amusing!</p>
              <h1 className="font-bold text-[30px] md:text-[60px] leading-[68px] text-[#FFFFFF]">
                <span className="text-orange-400">Th</span>e Art of speed food Quality
              </h1>
              <p className="md:w-[418px] md:h-[48px] leading-[24px] text-[14px] md:text-base text-[#FFFFFF] md:mt-5 md:my-0 my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
              </p>
              <h5 className="md:w-[165px] w-[120px] rounded-[30px] md:h-[80px] bg-[#FF9F0D] flex justify-center items-center md:py-3 h-[50px] md:mt-[20px]">
                <p className="text-[#E0DFDF] font-normal text-[16px] leading-[24px]">See Menu</p>
              </h5>
            </div>

            <div className="text-white md:h-[670px] md:mt-[110px] mt-[30px] md:mr-0 mr-[10px]">
              <Image
                alt="heropic"
                width={624}
                height={624}
                src="/sideimage.png"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="flex flex-col md:flex-row gap-[40px] md:h-[800px] bg-black justify-center items-center min-h-[70vh]">
        <div className="text-black md:ml-[200px] md:my-0 my-[40px] ml-0 md:mt-[80px] text-center flex flex-col justify-center">
          <p className="md:w-[91px] md:h-[40px] font-greatVibes text-3xl md:ml-0 ml-[130px] leading-[40px] text-[#FF9F0D] mb-8 whitespace-nowrap">
            About us
          </p>
          <h2 className="font-bold md:text-[48px] text-[30px] md:ml-0 ml-[50px] md:w-[446px] leading-[56px] text-[#FFFFFF]">
            <span className="text-[#FF9F0D]">We</span> Create the best foody product
          </h2>
          <p className="text-[#FFFFFF] font-normal md:text-[16px] text-[12px] md:leading-[24px] w-[300px] md:ml-0 ml-[50px] md:w-[526px] md:my-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
            fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
            mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <div className="flex flex-col items-start ml-[50px] md:ml-0">
            <p className="text-white my-[15px] md:text-[16px] text-[12px] flex items-center">
              <Image src={"/check.png"} alt="checkmark" width={16} height={12} className="inline-block mr-2" />
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <p className="text-white my-[15px] md:text-[16px] text-[12px] flex items-center">
              <Image src={"/check.png"} alt="checkmark" width={16} height={12} className="inline-block mr-2" />
              Quisque diam pellentesque bibendum non dui volutpat fringilla
            </p>
            <p className="text-white my-[15px] md:text-[16px] text-[12px] flex items-center">
              <Image src="/check.png" alt="checkmark" width={16} height={12} className="inline-block mr-2" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <h5 className="md:w-[165px] w-[140px] rounded-[30px] md:h-[80px] bg-[#FF9F0D] md:ml-0 ml-[60px] flex justify-center items-center md:py-3 h-[50px] md:mt-[20px]">
            <p className="text-[#E0DFDF] font-normal text-[16px] leading-[24px]">See Menu</p>
          </h5>
        </div>

        <div className="flex md:mr-[60px] md:m-0 m-[10px] gap-[25px] md:mt-[50px] flex-col text-white items-center justify-center">
          <div>
            <Image
              alt="hero-egg"
              width={660}
              height={330}
              src="/egg.webp"
              className="rounded-[6px]"
            />
          </div>
          <div className="flex gap-[25px] md:mb-0 mb-[60px] justify-center">
            <div>
              <Image
                alt="pic1"
                loading="lazy"
                width={322}
                height={194}
                src="/pic2.png"
                className="rounded-[6px]"
              />
            </div>
            <div>
              <Image
                alt="pic2"
                loading="lazy"
                width={322}
                height={194}
                src="/pic1.png"
                className="rounded-[6px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Food Category Section */}
      <div className="bg-black min-h-[60vh] w-full flex justify-center items-center px-0 py-8">
        <div className="text-center w-full max-w-full">
          <p className="text-[#FF9F0D] leading-[40px] font-normal text-[32px] mb-6 whitespace-nowrap font-greatVibes">
            Food Category
          </p>
          <p className="font-bold text-[30px] leading-[56px] text-[#FFFFFF] my-[20px]">
            <span className="text-[#FF9F0D]">Ch</span>oose Food Item
          </p>
          <div className="flex justify-center gap-[30px]">
            <div className="relative">
              <Image
                src="/p1.png"
                alt="categ1"
                width={305}
                height={328}
                className="w-full h-auto"
              />
              <div className="font-bold absolute top-2 left-2 text-[18px] leading-[26px] text-[#FF9F0D] bg-[#FFFFFF] text-sm px-2 py-1 rounded-[6px]">
                Save 30%
              </div>
            </div>
            <div>
              <Image
                src="/p2.png"
                alt="categ2"
                width={305}
                height={328}
                className="w-full h-auto"
              />
            </div>
            <div>
              <Image
                src="/p3.png"
                alt="categ3"
                width={305}
                height={328}
                className="w-full h-auto"
              />
            </div>
            <div>
              <Image
                src="/p4.png"
                alt="categ4"
                width={305}
                height={328}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Choose Us Section */}
      <div className="bg-black min-h-[70vh] w-full flex justify-center items-center px-0 py-8">
        <div
          className="w-full bg-cover bg-center flex flex-col md:ml-[100px] justify-center items-center md:flex-row md:mt-[100px]"
          style={{ backgroundImage: "url('assets/background.svg')" }}
        >
          <div>
            <div className="flex md:mr-[100px] flex-col gap-3">
              <div className="flex flex-col md:flex-row gap-1">
                <div>
                  <Image
                    alt="paratha"
                    src="/paratha.png"
                    width={362}
                    height={356}
                    className="p-[20px]"
                  />
                </div>
                <div>
                  <Image
                    alt="burger"
                    src="/burger.png"
                    width={281}
                    height={231}
                    className="md:mt-[80px]"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div>
                  <Image
                    alt="chicken"
                    src="/chicken.png"
                    width={244}
                    height={306}
                    className="md:w-[224px] w-[210px] md:ml-0 ml-[110px]"
                  />
                </div>
                <div>
                  <Image
                    alt="cheese"
                    src="/cheese.png"
                    width={221}
                    height={226}
                    className="md:w-[221px] w-[200px] md:ml-0 ml-[30px]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <Image
                      alt="b"
                      src="/b.png"
                      width={161}
                      height={168}
                      className="md:ml-0 ml-[20px]"
                    />
                  </div>
                  <div>
                    <Image
                      alt="salad"
                      src="/salad.png"
                      width={161}
                      height={168}
                      className="md:ml-0 ml-[20px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:mt-[40px]">
            <p className="text-[#FF9F0D] font-greatVibes  md:w-[175px] md:ml-0 ml-[100px] md:mt-0 mt-[70px] text-[30px] md:h-[40px] font-normal md:text-[32px] leading-[40px] mb-8 whitespace-nowrap">
              Why Choose us
            </p>
            <h2 className=" text-white font-bold text-[20px] md:ml-0 ml-[70px] md:text-[48px] leading-[56px] md:w-[433px] md:h-[112px] whitespace-nowrap">
              <span className='text-[#FF9F0D]'>Ex</span>tra ordinary taste 
              <br />
              And Experienced
            </h2>
            <p className="font-normal text-[12px] md:text-[16px] leading-[24px] text-[#FFFFFF] md:w-[526px] w-[300px] md:ml-0 ml-[40px] md:h-[120px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <div className="flex my-[20px] md:gap-0 gap-[45px] md:ml-0 ml-[10px] md:mx-0 mx-[10px] md:my-[40px] md:bg-none bg-[#FF9F0D] md:p-0 p-[10px]">
              <div className="flex flex-col">
                <p className="bg-[#FF9F0D] md:w-[102px] md:h-[100px] rounded-[6px] md:mr-[30px]">
                  <Image
                    alt="hamburger-icon"
                    src="/Hamburger.png"
                    width={56}
                    height={56}
                    className="md:m-[20px]"
                  />
                </p>
                <p className="font-normal text-[18px] leading-[26px] md:ml-2">Fast Food</p>
              </div>
              <div className="flex flex-col">
                <p className="bg-[#FF9F0D] md:w-[102px] md:h-[100px] rounded-[6px] md:mr-[30px]">
                  <Image
                    alt="cookie-icon"
                    src="/Cookie.png"
                    width={56}
                    height={56}
                    className="md:m-[20px]"
                  />
                </p>
                <p className="font-normal md:ml-6 text-[18px] leading-[26px]">Lunch</p>
              </div>
              <div className="flex flex-col">
                <p className="bg-[#FF9F0D] md:w-[102px] md:h-[100px] rounded-[6px] md:mr-[30px]">
                  <Image
                    alt="dinner-icon"
                    src="/wine.png"
                    width={56}
                    height={56}
                    className="md:m-[20px]"
                  />
                </p>
                <p className="font-normal text-[18px] leading-[26px] md:ml-8">Dinner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageComponent;
