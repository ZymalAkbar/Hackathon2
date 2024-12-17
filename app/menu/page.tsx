import Image from 'next/image';
import { FC } from 'react';
import MenuLeft from '../components/menuleft/page';
import MenuRight from '../components/menuright/page';


const Menu: FC = () => {
  return (
<div>
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Menu</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 flex items-center gap-2">
            <span className="text-white">Home</span>
            <Image
              src="/arrow.png"
              alt="Arrow"
              width={20}
              height={20}
              className="transform rotate-90"
            />
            <span className="text-[#FF9F0D]">Menu</span>
          </p>
        </div>
      </div>
    
      <div className="pt-8">
        <MenuLeft />
        <MenuRight />
      </div>
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
          <div className="flex flex-col items-center ">
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

      {/* DESSERT */}
      
          <section className="w-full flex justify-center items-center mt-8">
            <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 px-4">
              {/* Image */}
              <div className="flex-1 flex justify-center md:justify-start">
                <Image
                  alt="dessert"
                  src="/dessert.png"
                  width={500}  
                  height={400} 
                  className="rounded-lg shadow-lg"
                  priority
                />
              </div>
      
              {/* Menu Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-semibold text-gray-700 border-b border-gray-300 pb-3 mb-4">
                  Dessert
                </h2>
                <ul className="text-gray-600 space-y-6">
                  <li className="flex justify-between text-lg">
                    <div>
                      <h3 className="font-bold">Alder Grilled Chinook Salmon</h3>
                      <p className="text-sm">Toasted French bread topped with romano, cheddar</p>
                      <p className="text-xs text-gray-500">560 CAL</p>
                    </div>
                    <span className="text-orange-500 font-bold">32$</span>
                  </li>
                  <li className="flex justify-between text-lg">
                    <div>
                      <h3 className="font-bold">Berries and Creme Tart</h3>
                      <p className="text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
                      <p className="text-xs text-gray-500">700 CAL</p>
                    </div>
                    <span className="text-orange-500 font-bold">43$</span>
                  </li>
                  <li className="flex justify-between text-lg">
                    <div>
                      <h3 className="font-bold">Tormentoso Bush Pizza Pintage</h3>
                      <p className="text-sm">Ground cumin, avocado, peeled and cubed</p>
                      <p className="text-xs text-gray-500">1000 CAL</p>
                    </div>
                    <span className="text-orange-500 font-bold">14$</span>
                  </li>
                  <li className="flex justify-between text-lg">
                    <div>
                      <h3 className="font-bold">Spicy Vegan Potato Curry</h3>
                      <p className="text-sm">Spreadable cream cheese, crumbled blue cheese</p>
                      <p className="text-xs text-gray-500">560 CAL</p>
                    </div>
                    <span className="text-orange-500 font-bold">35$</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
      
    {/* DRINKS */}

<section className="w-full min-h-full flex justify-center items-center pt-11 pb-11">
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 px-4">
        {/* Menu Content (Left Side) */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-700 border-b border-gray-300 pb-3 mb-4">
            Drinks
          </h2>
          <ul className="text-gray-600 space-y-6">
            <li className="flex justify-between text-lg">
              <div>
                <h3 className="font-bold">Alder Grilled Chinook Salmon</h3>
                <p className="text-sm">Toasted French bread topped with romano, cheddar</p>
                <p className="text-xs text-gray-500">560 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">32$</span>
            </li>
            <li className="flex justify-between text-lg">
              <div>
                <h3 className="font-bold">Berries and Creme Tart</h3>
                <p className="text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-xs text-gray-500">700 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">43$</span>
            </li>
            <li className="flex justify-between text-lg">
              <div>
                <h3 className="font-bold">Tormentoso Bush Pizza Pintage</h3>
                <p className="text-sm">Ground cumin, avocado, peeled and cubed</p>
                <p className="text-xs text-gray-500">1000 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">14$</span>
            </li>
            <li className="flex justify-between text-lg">
              <div>
                <h3 className="font-bold">Spicy Vegan Potato Curry</h3>
                <p className="text-sm">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-xs text-gray-500">560 CAL</p>
              </div>
              <span className="text-orange-500 font-bold">35$</span>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex justify-center md:justify-start">
          <Image
            alt="Drinks"
            src="/drinks.png"
            width={500} 
            height={400} 
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
</div>
    
  );
};

export default Menu;

