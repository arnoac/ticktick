import { motion } from "framer-motion";
import Head from "next/head";

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>TickTick | Coming Soon</title>
        <meta
          name='description'
          content='TickTick is building the future of tokenized private equity and sports ownership.'
        />
      </Head>

      <section className='relative min-h-screen flex flex-col justify-center items-center bg-[#21211f] overflow-hidden text-white text-center px-6'>
        {/* 🔹 Animated Background */}
        <motion.div
          className='absolute inset-0 z-0 pointer-events-none'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Glowing candlestick light effect */}
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#c1e32820_0%,transparent_60%)] animate-pulse'></div>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,#c1e32815_0%,transparent_70%)] animate-pulse-slow'></div>

          {/* Subtle blockchain grid */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-slow-pan"></div>
        </motion.div>

        {/* Logo */}
        <motion.img
          src='/logo.png'
          alt='TickTick Logo'
          className='w-32 mb-6 z-10'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Headline */}
        <motion.h1
          className='text-4xl md:text-6xl font-extrabold text-[#c1e328] mb-4 z-10'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          The Future of Private Markets
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className='max-w-xl text-gray-300 mb-8 text-lg z-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          TickTick is building a blockchain-based platform that tokenizes access
          to private companies and sports franchises. <br />
          Launching soon — stay tuned.
        </motion.p>

        {/* Notify Form */}
        <motion.form
          action='https://formspree.io/f/YOUR_FORM_ID'
          method='POST'
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
            className='w-full sm:flex-1 px-4 py-3 rounded-full bg-black border border-gray-600 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#c1e328] transition'
          />
          <button
            type='submit'
            className='bg-[#c1e328] text-black font-semibold px-6 py-3 rounded-full hover:bg-lime-400 transition'
          >
            Notify Me
          </button>
        </motion.form>

        {/* Footer */}
        <motion.footer
          className='mt-16 text-gray-500 text-sm z-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          © {new Date().getFullYear()} TickTick.org — All rights reserved.
        </motion.footer>
      </section>
    </>
  );
}
