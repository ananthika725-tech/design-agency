export default function Services() {
  return (
    <section className="py-20 px-8 text-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-12">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 shadow-lg rounded-xl bg-white">
          <h3 className="text-2xl font-semibold mb-3">UI/UX Design</h3>
          <p>Creating beautiful and user-friendly designs.</p>
        </div>

        <div className="p-6 shadow-lg rounded-xl bg-white">
          <h3 className="text-2xl font-semibold mb-3">Web Development</h3>
          <p>Building fast and responsive websites.</p>
        </div>

        <div className="p-6 shadow-lg rounded-xl bg-white">
          <h3 className="text-2xl font-semibold mb-3">Branding</h3>
          <p>Helping brands stand out in the market.</p>
        </div>
      </div>
    </section>
  );
}