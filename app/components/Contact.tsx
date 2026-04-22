"use client";

export default function Contact() {
  return (
    <section className="py-20 px-8 text-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-10">Contact Us</h2>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 border rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 border rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-3 border rounded-lg"
          rows={5}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
