import Image from "next/image";

function Contact() {
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
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Sign up page</h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 flex items-center gap-2">
                    <span className="text-white">Home</span>
                    <Image
                      src="/arrow.png"
                      alt="Arrow"
                      width={20}
                      height={20}
                      className="transform rotate-90"
                    />
                    <span className="text-[#FF9F0D]">sign up</span>
                  </p>
                </div>
              </div>
            {/* SIGN UP SECTION */}
            <form className="max-w-md mx-auto p-6 border rounded-lg shadow-lg shadow-yellow-400 py-11 my-11">
      <div className="mb-4">
        <label className="block mb-2 font-medium">Name</label>
        <input
          type="text"
          name="name"
          className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          name="email"
          className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          name="password"
          className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
          placeholder="Enter your password"
        />
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          name="rememberMe"
          className="mr-2"
        />
        <span>Remember me?</span>
      </div>
      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
      >
        Sign Up
      </button>
      <p className="text-center mt-4">
        <a className="text-yellow-500" href="/forgot-password">
          Forgot password?
        </a>
      </p>
      <div className="text-center mt-8">
      <p className="text-2xl" >or</p>

      {/* Sign in with Google Button */}
      <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-between hover:bg-gray-200">
        <span>Sign in with Google</span>
        <img 
          src="/Google.png"  
          alt="Google logo"
          className="h-6 w-6 ml-2"
        />
      </button>

      {/* Sign in with Apple Button */}
      <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-between hover:bg-gray-200">
        <span >Sign in with Apple</span>
        <img 
          src="/Apple.png"  
          alt="Apple logo"
          className="h-6 w-6 ml-2"
        />
      </button>
    </div>
    </form>
          
    </div> );
}

export default Contact;