export default function Portfolio() {
  return (
    <section className="py-20 px-8 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Work</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-200 h-48 rounded-xl flex items-center justify-center">
          Project 1
        </div>

        <div className="bg-gray-200 h-48 rounded-xl flex items-center justify-center">
          Project 2
        </div>

        <div className="bg-gray-200 h-48 rounded-xl flex items-center justify-center">
          Project 3
        </div>
      </div>
    </section>
  );
}