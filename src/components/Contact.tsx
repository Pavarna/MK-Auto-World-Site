import { useState } from "react";

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Send to Formspree via Fetch
    console.log(
      "Sending to:",
      `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
    );
    const response = await fetch(
      `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`,
      {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      }
    );

    if (response.ok) {
      setIsSubmitted(true);
      form.reset();
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        {/* Contact Info */}
        <div className="md:w-1/3 space-y-8">
          <h2 className="text-3xl font-bold text-brandBlue">Get in Touch</h2>
          <div>
            <p className="text-gray-500">Call Us</p>
            <a
              href="tel:+1234567890"
              className="text-2xl font-bold text-blue-600 hover:underline"
            >
              +91 86107 35933
            </a>
          </div>
          <div>
            <p className="text-gray-500">Follow Us</p>
            <a
              href="https://www.instagram.com/mk.autoworld/"
              className="text-xl font-semibold flex items-center gap-2 hover:text-pink-600 transition"
            >
              <span>Instagram: @mk.autoworld</span>
            </a>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">Prefer a faster response?</p>
            <a
              href="https://wa.me/918610735933?text=Hi MK Auto World, I am looking for spare parts."
              className="text-green-600 font-bold flex items-center justify-center gap-2"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl animate-bounce">
            <h3 className="text-2xl font-bold">Query Received!</h3>
            <p>Our team will contact you on your business email shortly.</p>
          </div>
        ) : (
          <div className="md:w-2/3 bg-brandLight p-10 rounded-2xl shadow-inner">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-brandBlue-700 ml-1"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="e.g. Manav Samant"
                    required
                    className="p-3 rounded-lg border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-brandBlue outline-none bg-white text-gray-900"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-brandBlue-700 ml-1"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    required
                    className="p-3 rounded-lg border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-brandBlue outline-none bg-white text-gray-900"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-brandBlue-700 ml-1"
                >
                  Parts Inquiry <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Please include Brand, Model, and Year (e.g. BMW 3 Series 2018 Brake Pads)"
                  className="w-full p-3 rounded-lg border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-brandBlue outline-none bg-white text-gray-900"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brandBlue text-brandBlue py-4 rounded-lg font-bold hover:bg-blue-900 transition shadow-lg mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
