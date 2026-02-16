import React from "react";

const Contact = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      
     
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-rose-500/30 blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex flex-col md:flex-row items-center justify-center">

       
        <div className="flex-1 text-white md:pr-12">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Get in <span className="text-rose-500">Touch</span><br />
            With Us
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
            Have questions, suggestions, or just want to say hi?  
            Fill the form and we’ll get back to you as soon as possible.
          </p>
        </div>

        
        <div className="flex-1 mt-12 md:mt-0 w-full max-w-lg bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <form className="flex flex-col space-y-6">
            <div>
              <label className="text-white font-medium mb-2 block">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <div>
              <label className="text-white font-medium mb-2 block">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <div>
              <label className="text-white font-medium mb-2 block">Message</label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-rose-500 hover:bg-rose-600 transition py-3 rounded-full font-semibold text-lg text-white shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
