import Image from 'next/image';

const MenuRight: React.FC = () => {
  return (
    <section className="w-full min-h-full flex justify-center items-center pt-11 pb-11">
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 px-4">
        {/* Menu Content (Left Side) */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-700 border-b border-gray-300 pb-3 mb-4">
            Main Course
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

        {/* Image (Right Side) */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Image
            alt="Main Course"
            src="/main.png"
            width={500}  // Adjusted to zoom in on image
            height={400} // Adjusted height for a larger image
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default MenuRight;
