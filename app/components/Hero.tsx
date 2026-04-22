export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          PixelCraft Studio
        </h1>
        <p className="text-xl mb-6">
          We design modern digital experiences
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
          View Our Work
        </button>
         {/* Stats section with gradients */}
        <div className="grid grid-cols-3 gap-8 mt-16">
          <div className="p-6 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg">
            <p className="text-3xl font-bold">150+</p>
            <p className="text-sm opacity-90">Projects Completed</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg">
            <p className="text-3xl font-bold">50+</p>
            <p className="text-sm opacity-90">Happy Clients</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 shadow-lg">
            <p className="text-3xl font-bold">8+</p>
            <p className="text-sm opacity-90">Years Experience</p>
          </div>
           </div>
      </div>
    </section>
  );
}
