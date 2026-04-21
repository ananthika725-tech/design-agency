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
      </div>
    </section>
  );
}