import Image from "next/image";

function Shop() {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Our Shop</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 flex items-center gap-2">
            <span className="text-white">Home</span>
            <Image
              src="/arrow.png"
              alt="Arrow"
              width={20}
              height={20}
              className="transform rotate-90"
            />
            <span className="text-[#FF9F0D]">Shop</span>
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 pt-10">
        <div className="w-full md:w-[70%] lg:w-[75%]">
          <div className="flex md:ml-0 ml-[40px] justify-between items-center mb-6 text-black">
            <div className="flex flex-col md:flex-row items-center space-x-4">
              <span className="text-lg font-medium">Sort By:</span>
              <select className="w-[236px] h-[46px] bg-white border border-gray-300 text-black px-4 rounded-md">
                <option>Newest</option>
              </select>
            </div>
            <div className="md:flex md:flex-row hidden items-center space-x-4">
              <span className="text-lg font-medium">Show:</span>
              <select className="w-[236px] h-[46px] bg-white border border-gray-300 text-black px-4 rounded-md">
                <option>Default</option>
              </select>
            </div>
          </div>

          {/* Products */}
          <section className="text-black bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Product 1 */}
              <div className="text-center">
                <Image
                  alt="Product Image 1"
                  src="/no1.png"
                  width={400}
                  height={200}
                  className="object-cover"
                  loading="lazy"
                />
                <p className="mt-4 text-black text-lg font-medium">Fresh Lime</p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <p className="text-[#FF9F0D] text-lg font-semibold">$38.00</p>
                  <p className="text-gray-500 line-through">$45.00</p>
                </div>
              </div>

              {/* Product 2 */}
              <div className="text-center">
                <Image
                  alt="Product Image 2"
                  src="/no2.png"
                  width={400}
                  height={200}
                  className="object-cover"
                  loading="lazy"
                />
                <p className="mt-4 text-black text-lg font-medium">Orange Juice</p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <p className="text-[#FF9F0D] text-lg font-semibold">$28.00</p>
                  <p className="text-gray-500 line-through">$35.00</p>
                </div>
              </div>

              {/* Product 3 */}
              <div className="text-center">
                <Image
                  alt="Product Image 3"
                  src="/no3.png"
                  width={400}
                  height={200}
                  className="object-cover"
                  loading="lazy"
                />
                <p className="mt-4 text-black text-lg font-medium">Mango Smoothie</p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <p className="text-[#FF9F0D] text-lg font-semibold">$40.00</p>
                  <p className="text-gray-500 line-through">$50.00</p>
                </div>
              </div>

              {/* Product 4 */}
              <div className="text-center">
                <Image
                  alt="Product Image 4"
                  src="/no4.png"
                  width={400}
                  height={200}
                  className="object-cover"
                  loading="lazy"
                />
                <p className="mt-4 text-black text-lg font-medium">Apple Cider</p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <p className="text-[#FF9F0D] text-lg font-semibold">$25.00</p>
                  <p className="text-gray-500 line-through">$30.00</p>
                </div>
              </div>

              {/* Product 5 */}
              <div className="text-center">
                <Image
                  alt="Product Image 5"
                  src="/no5.png"
                  width={400}
                  height={200}
                  className="object-cover"
                  loading="lazy"
                />
                <p className="mt-4 text-black text-lg font-medium">Berry Blast</p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <p className="text-[#FF9F0D] text-lg font-semibold">$32.00</p>
                  <p className="text-gray-500 line-through">$40.00</p>
                </div>
              </div>

              {/* Product 6 */}
              <div className="text-center">
                <Image
                  alt="Product Image 6"
                  src="/no6.png"
                  width={400}
                  height={200}
                  className="object-cover"
                  loading="lazy"
                />
                <p className="mt-4 text-black text-lg font-medium">Pineapple Punch</p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <p className="text-[#FF9F0D] text-lg font-semibold">$38.00</p>
                  <p className="text-gray-500 line-through">$45.00</p>
                </div>
              </div>

              {/* Product 7 */}
              <div className="text-center">
                <Image
                  alt="Product Image 7"
                  src="/no7.png"
                  width={400}
                  height={200}
                  className="object-cover"
                  loading="lazy"
                />
                <p className="mt-4 text-black text-lg font-medium">Strawberry Blast</p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <p className="text-[#FF9F0D] text-lg font-semibold">$35.00</p>
                  <p className="text-gray-500 line-through">$42.00</p>
                </div>
              </div>

              {/* Product 8 */}
              <div className="text-center">
                <Image
                  alt="Product Image 8"
                  src="/no8.png"
                  width={400}
                  height={200}
                  className="object-cover"
                  loading="lazy"
                />
                <p className="mt-4 text-black text-lg font-medium">Citrus Kick</p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <p className="text-[#FF9F0D] text-lg font-semibold">$27.00</p>
                  <p className="text-gray-500 line-through">$33.00</p>
                </div>
              </div>

              {/* Product 9 */}
              <div className="text-center">
                <Image
                  alt="Product Image 9"
                  src="/no9.png"
                  width={400}
                  height={200}
                  className="object-cover"
                  loading="lazy"
                />
                <p className="mt-4 text-black text-lg font-medium">Ginger Zing</p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <p className="text-[#FF9F0D] text-lg font-semibold">$31.00</p>
                  <p className="text-gray-500 line-through">$39.00</p>
                </div>
              </div>

              {/* Product 10 */}
              <div className="text-center">
                <Image
                  alt="Product Image 10"
                  src="/no4.png"
                  width={400}
                  height={200}
                  className="object-cover"
                  loading="lazy"
                />
                <p className="mt-4 text-black text-lg font-medium">Watermelon Crush</p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <p className="text-[#FF9F0D] text-lg font-semibold">$30.00</p>
                  <p className="text-gray-500 line-through">$37.00</p>
                </div>
              </div>

              {/* Product 11 */}
              <div className="text-center">
                <Image
                  alt="Product Image 11"
                  src="/no5.png"
                  width={400}
                  height={200}
                  className="object-cover"
                  loading="lazy"
                />
                <p className="mt-4 text-black text-lg font-medium">Peach Bliss</p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <p className="text-[#FF9F0D] text-lg font-semibold">$34.00</p>
                  <p className="text-gray-500 line-through">$41.00</p>
                </div>
              </div>

              {/* Product 12 */}
              <div className="text-center">
                <Image
                  alt="Product Image 12"
                  src="/no6.png"
                  width={400}
                  height={200}
                  className="object-cover"
                  loading="lazy"
                />
                <p className="mt-4 text-black text-lg font-medium">Kiwi Lime</p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <p className="text-[#FF9F0D] text-lg font-semibold">$29.00</p>
                  <p className="text-gray-500 line-through">$35.00</p>
                </div>
              </div>

              {/* Product 13 */}
              <div className="text-center">
                <Image
                  alt="Product Image 13"
                  src="/no7.png"
                  width={400}
                  height={200}
                  className="object-cover"
                  loading="lazy"
                />
                <p className="mt-4 text-black text-lg font-medium">Tropical Blast</p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <p className="text-[#FF9F0D] text-lg font-semibold">$33.00</p>
                  <p className="text-gray-500 line-through">$40.00</p>
                </div>
              </div>

              {/* Product 14 */}
              <div className="text-center">
                <Image
                  alt="Product Image 14"
                  src="/no8.png"
                  width={400}
                  height={200}
                  className="object-cover"
                  loading="lazy"
                />
                <p className="mt-4 text-black text-lg font-medium">Papaya Zing</p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <p className="text-[#FF9F0D] text-lg font-semibold">$37.00</p>
                  <p className="text-gray-500 line-through">$44.00</p>
                </div>
              </div>

              {/* Product 15 */}
              <div className="text-center">
                <Image
                  alt="Product Image 15"
                  src="/no9.png"
                  width={400}
                  height={200}
                  className="object-cover"
                  loading="lazy"
                />
                <p className="mt-4 text-black text-lg font-medium">Grape Fusion</p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <p className="text-[#FF9F0D] text-lg font-semibold">$36.00</p>
                  <p className="text-gray-500 line-through">$42.00</p>
                </div>
              </div>

            </div>
          </section>

          {/* Pagination Section */}
          <div className="flex justify-center mt-8 pb-10">
      <button className="text-[#FF9F0D] text-xl cursor-pointer">
        &lt;
      </button>
      <div className="flex items-center space-x-2">
        <span className="text-black hover:bg-[#FF9F0D] rounded px-4 text-lg">1</span>
        <span className="text-white bg-[#FF9F0D] text-lg px-4 py-1 rounded">2</span>
        <span className="text-black px-4 hover:bg-[#FF9F0D] rounded text-lg">3</span>
      </div>
      <button className="text-[#FF9F0D] text-xl cursor-pointer">
        &gt;
      </button>
          </div>
        </div>

      {/* Sidebar Section*/}
    
      <div className="w-full md:w-[30%] lg:w-[25%] bg-white p-6">
      <div className="flex items-center space-x-2 mb-6">
        <input
          placeholder="Search Product"
          className="w-[248px] h-[46px] bg-[#FF9F0D1A] text-black px-4 rounded-md placeholder-gray-500"
          type="text"
        />
        <button className="bg-[#FF9F0D] md:w-[200px] p-2">
          <span className="text-white">Q</span>
        </button>
      </div>

      <h2 className="font-bold text-[20px] leading-[28px] mb-4">Category</h2>
      <div className="space-y-2 mb-6">
        {['Sandwiches', 'Burger', 'Chicken Chup', 'Drink', 'Pizza', 'Non Veg', 'Uncategorized'].map((category) => (
          <div key={category} className="flex items-center">
            <input id={category} className="mr-2" type="checkbox" />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>

      <img
        alt="Category"
        width="248"
        height="286"
        className="mb-6"
        src="/salt.png"
      />

      <div className="mb-6">
        <h3 className="font-bold text-[20px] leading-[28px] mb-2">Filter By Price</h3>
        <div className="border-t-2 border-[#FF9F0D] mb-2"></div>
        <p className="text-sm">From $0 to $8000</p>
        <button className="bg-[#FF9F0D] text-white px-4 py-2 mt-2 rounded-md">Filter</button>
      </div>

      <h3 className="font-bold text-[20px] leading-[28px] mb-4">Latest Products</h3>
      <div className="space-y-4">
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="flex space-x-4">
            <img
              alt="Product"
              loading="lazy"
              width="72"
              height="65"
              decoding="async"
              className="w-[72px] h-[65px] object-cover"
              src="/vector.png"
            />
            <div>
              <p className="text-lg font-medium">Pizza</p>
              <div className="flex items-center space-x-1">
                <img className="w-[9.84px] h-[9px]" src="/star.png" alt="star" />
                <img className="w-[9.84px] h-[9px]" src="/star.png" alt="star" />
                <img className="w-[9.84px] h-[9px]" src="/star.png" alt="star" />
              </div>
              <p className="text-[#FF9F0D]">$45</p>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-8">Popular Tags</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Sandwiches', 'Burgers', 'Chicken', 'Pizza', 'Drinks', 'Non Veg', 'Snacks'].map((tag) => (
              <span
                key={tag}
                className="bg-white text-slate-500 px-6 py-2 text-lg font-semibold hover:bg-[#e68906] transition duration-300 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
      


        </div>
        </div>
     );
}

export default Shop;