export default function Contact() {
  return (
    <section className="py-20 px-8 text-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-10">Contact Us</h2>

      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 border rounded-lg"
          rows={5}
        />
        <button className="bg-blue-600 text-white p-3 rounded-lg">
          Send Message
        </button>
      </form>
    </section>
  );
}