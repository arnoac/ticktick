"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaDiscord, FaXTwitter } from "react-icons/fa6"; // ✅ Icons

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");

    try {
      const response = await fetch("https://formspree.io/f/xnngzepj", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    }
  };

  return (
    <section className='relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#0B0C10] text-white text-center px-6'>
      {/* ✨ Subtle animated background particles */}
      <div className='absolute inset-0 z-0 overflow-hidden'>
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className='absolute w-1.5 h-1.5 bg-[#A3FF12] rounded-full opacity-20 animate-float'
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${6 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <motion.img
        src='/tickticklogo.png'
        alt='TickTick Logo'
        className='w-40 mb-8 z-10 drop-shadow-[0_0_15px_#A3FF12]'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Heading */}
      <motion.h1
        className='text-4xl md:text-6xl font-extrabold text-[#A3FF12] tracking-tight z-10'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Tokenizing the Future of Ownership
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className='max-w-xl text-gray-300 mt-4 mb-10 text-lg z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Fractional access to private companies, sports teams, and high-growth
        ventures. <br />
        Launching soon — join the revolution.
      </motion.p>

      {/* ✅ Form with success animation */}
      {!submitted ? (
        <motion.form
          onSubmit={handleSubmit}
          className='flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md z-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            required
            className='w-full sm:flex-1 px-4 py-3 rounded-full bg-black border border-gray-600 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#A3FF12] transition'
          />
          <button
            type='submit'
            className='bg-gradient-to-r from-[#A3FF12] to-[#85E800] text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 shadow-[0_0_15px_#A3FF12] transition'
          >
            Join the Waitlist
          </button>
        </motion.form>
      ) : (
        <motion.div
          className='z-10 mt-6 text-[#A3FF12] text-xl font-semibold'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ✅ Thanks for joining! You’re officially on the waitlist.
        </motion.div>
      )}

      {/* Footer */}
      <motion.footer
        className='mt-16 text-gray-500 text-sm z-10 flex flex-col items-center gap-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p>© {new Date().getFullYear()} TickTick.org — All rights reserved.</p>

        {/* 🌐 Social Icons */}
        <div className='flex gap-6'>
          <motion.a
            href='https://x.com/TickTickOrg'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.15 }}
            className='text-[#A3FF12] hover:text-[#C7FF5F] transition drop-shadow-[0_0_10px_#A3FF12]'
          >
            <FaXTwitter size={28} />
          </motion.a>

          <motion.a
            href='https://discord.gg/DKYhdz8vEd'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.15 }}
            className='text-[#A3FF12] hover:text-[#C7FF5F] transition drop-shadow-[0_0_10px_#A3FF12]'
          >
            <FaDiscord size={28} />
          </motion.a>
        </div>
      </motion.footer>
    </section>
  );
}
