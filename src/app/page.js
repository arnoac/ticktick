"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaChartLine,
  FaCoins,
  FaExchangeAlt,
  FaPercent,
  FaRocket,
  FaUsers,
  FaVoteYea
} from "react-icons/fa";
import {
  FaArrowRightArrowLeft,
  FaDiscord,
  FaDollarSign,
  FaWallet,
  FaXTwitter
} from "react-icons/fa6";
import { TbBrandCoinbase } from "react-icons/tb";

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
      } else alert("Something went wrong. Please try again later.");
    } catch {
      alert("Network error. Please try again later.");
    }
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <main className='bg-gradient-to-b from-[#0B0C10] to-[#141617] text-white overflow-hidden font-sans'>
      {/* 🌐 Navbar */}
      <nav className='flex justify-between items-center px-6 md:px-16 py-6 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800/60'>
        <div className='flex items-center gap-2'>
          <img src='/logo.png' alt='TickTick Logo' className='w-10' />
          <span className='font-bold text-lg text-[#A3FF12]'>TickTick</span>
        </div>
        <div className='hidden md:flex gap-10 text-gray-300 text-sm'>
          {["How It Works", "Markets", "$TICK Token", "Roadmap"].map((link) => (
            <a
              key={link}
              href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
              className='hover:text-[#A3FF12] transition'
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* 🌟 Hero Section */}
      <section className='relative flex flex-col items-center justify-center text-center px-6 py-32 md:py-40'>
        <Particles
          id='tsparticles'
          className='absolute inset-0 z-0'
          options={{
            fullScreen: { enable: false },
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true
              },
              modes: { repulse: { distance: 100, duration: 0.4 } }
            },
            particles: {
              color: { value: "#A3FF12" },
              links: {
                color: "#A3FF12",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: true,
                speed: 0.6,
                straight: false
              },
              number: { value: 60, density: { enable: true, area: 800 } },
              opacity: { value: 0.4 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } }
            },
            detectRetina: true
          }}
        />
        <motion.h1
          className='text-5xl md:text-7xl font-extrabold text-white tracking-tight max-w-4xl leading-tight'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Trade <span className='text-[#A3FF12]'>Sentiment</span> on Innovation
        </motion.h1>
        <motion.p
          className='text-gray-300 text-lg mt-6 max-w-2xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Speculate on how the world feels about private companies, sports
          teams, and cultural trends — powered by USDC on Base, with gasless
          trading.
        </motion.p>
        <div className='flex flex-col sm:flex-row gap-4 mt-10 z-10'>
          <a
            href='#waitlist'
            className='bg-gradient-to-r from-[#A3FF12] to-[#85E800] text-black font-semibold px-8 py-3 rounded-full hover:opacity-90 shadow-[0_0_15px_#A3FF12] transition'
          >
            Join Waitlist
          </a>
          <a
            href='/TickTick_Litepaper_v1.1.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='border border-[#A3FF12] text-[#A3FF12] font-semibold px-8 py-3 rounded-full hover:bg-[#A3FF12]/10 transition'
          >
            View Litepaper
          </a>
        </div>
      </section>

      {/* 🏦 Trust Bar */}
      <section className='flex justify-center items-center gap-10 text-gray-400 text-sm py-4 border-y border-gray-800/50 bg-black/30 backdrop-blur-sm'>
        {[
          { name: "USDC", icon: <FaDollarSign size={20} /> },
          { name: "Base", icon: <TbBrandCoinbase size={20} /> }
        ].map(({ name, icon }) => (
          <div
            key={name}
            className='flex items-center gap-2 text-gray-400 hover:text-[#A3FF12] transition'
          >
            {icon}
            <span className='uppercase tracking-widest'>{name}</span>
          </div>
        ))}
      </section>

      {/* ⚙️ How It Works */}
      <section className='py-20 bg-black/40 backdrop-blur-sm text-center'>
        <motion.h2
          id='howitworks'
          className='text-3xl md:text-4xl font-bold text-[#A3FF12] mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6'>
          {[
            {
              title: "Deposit",
              icon: <FaWallet size={36} className='text-[#A3FF12] mb-4' />,
              desc: "Add USDC via Coinbase or connected wallet. Start trading sentiment instantly."
            },
            {
              title: "Trade Sentiment",
              icon: <FaExchangeAlt size={36} className='text-[#A3FF12] mb-4' />,
              desc: "Go long or short on how people feel about emerging companies and trends."
            },
            {
              title: "Withdraw Anytime",
              icon: (
                <FaArrowRightArrowLeft
                  size={36}
                  className='text-[#A3FF12] mb-4'
                />
              ),
              desc: "Redeem your USDC or transfer sentiment positions anytime — all on Base."
            }
          ].map(({ title, icon, desc }) => (
            <motion.div
              key={title}
              className='p-8 rounded-2xl bg-gradient-to-b from-[#101010] to-[#0B0C10] border border-gray-800 shadow-[0_0_20px_rgba(163,255,18,0.1)] hover:shadow-[0_0_25px_rgba(163,255,18,0.2)] transition'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className='flex flex-col items-center text-center'>
                {icon}
                <h3 className='text-xl font-semibold text-[#A3FF12] mb-2'>
                  {title}
                </h3>
                <p className='text-gray-300 text-sm'>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📈 Sentiment Markets */}
      <section id='markets' className='py-24 bg-black/40 text-center'>
        <motion.h2
          className='text-4xl font-bold text-[#A3FF12] mb-16'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Trending Sentiment Markets
        </motion.h2>

        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {[
            { name: "$SPACEX", change: "+4.8%", desc: "Aerospace Sentiment" },
            { name: "$OPENAI", change: "+7.1%", desc: "AI Sentiment" },
            { name: "$RAIDERS", change: "+2.3%", desc: "Sports Sentiment" }
          ].map((asset, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className='glass relative overflow-hidden p-6 rounded-2xl border border-gray-700 hover:border-[#A3FF12] transition'
            >
              <div className='flex justify-between items-center mb-2'>
                <h3 className='text-2xl font-bold text-[#A3FF12]'>
                  {asset.name}
                </h3>
                <span className='text-sm font-semibold text-[#A3FF12]'>
                  {asset.change}
                </span>
              </div>
              <p className='text-gray-400 mb-4'>{asset.desc}</p>
              <div className='absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#A3FF12]/40 to-transparent animate-[pulse_3s_ease-in-out_infinite]' />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🪙 $TICK Token */}
      <section
        id='ticktoken'
        className='py-24 bg-black/40 backdrop-blur-sm text-center'
      >
        <motion.h2
          className='text-3xl md:text-4xl font-bold text-[#A3FF12] mb-6'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The $TICK Token
        </motion.h2>

        <motion.p
          className='text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          $TICK is the utility token of the TickTick ecosystem — powering fee
          discounts, staking rewards, and governance across sentiment markets.
        </motion.p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6'>
          {[
            {
              title: "Fee Discounts",
              icon: <FaPercent size={40} className='text-[#A3FF12] mb-4' />,
              desc: "Reduce trading fees by paying with $TICK.",
              detail: "Earn up to 50% off on sentiment trades."
            },
            {
              title: "Staking Rewards",
              icon: <FaCoins size={40} className='text-[#A3FF12] mb-4' />,
              desc: "Stake $TICK to earn USDC rewards from trading activity.",
              detail: "Flexible staking, paid in USDC."
            },
            {
              title: "Governance",
              icon: <FaVoteYea size={40} className='text-[#A3FF12] mb-4' />,
              desc: "Vote on new sentiment markets and platform changes.",
              detail: "Shape the future of speculation."
            }
          ].map(({ title, icon, desc, detail }) => (
            <motion.div
              key={title}
              className='p-8 rounded-2xl bg-gradient-to-b from-[#111] to-[#0B0C10] border border-gray-800 shadow-[0_0_20px_rgba(163,255,18,0.1)] hover:shadow-[0_0_25px_rgba(163,255,18,0.25)] transition'
              whileHover={{ scale: 1.03 }}
            >
              <div className='flex flex-col items-center text-center'>
                {icon}
                <h3 className='text-xl font-semibold text-[#A3FF12] mb-2'>
                  {title}
                </h3>
                <p className='text-gray-300 text-sm mb-3'>{desc}</p>
                <p className='text-gray-500 text-xs italic'>{detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧭 Roadmap */}
      <section
        id='roadmap'
        className='py-24 bg-black/40 backdrop-blur-sm text-center relative overflow-hidden'
      >
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0c10] to-black opacity-70'></div>

        <motion.h2
          className='text-3xl md:text-4xl font-bold text-[#A3FF12] mb-16 relative z-10'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Roadmap
        </motion.h2>

        <div className='relative max-w-4xl mx-auto px-6 z-10'>
          <div className='absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#A3FF12]/60 to-transparent rounded-full'></div>

          {[
            {
              quarter: "Q2 2026",
              title: "Private Beta Launch",
              desc: "Invite-only trading for early investors to test sentiment market mechanics.",
              icon: <FaRocket />
            },
            {
              quarter: "Q3 2026",
              title: "Public App Launch",
              desc: "Retail traders can speculate on verified sentiment markets using USDC on Base.",
              icon: <FaUsers />
            },
            {
              quarter: "Q1 2027",
              title: "Sports & Culture Markets",
              desc: "Introducing tokenized sentiment for sports teams, influencers, and media brands.",
              icon: <FaChartLine />
            },
            {
              quarter: "Q3 2027",
              title: "Governance & DAO Rollout",
              desc: "Implementation of $TICK-based voting and decentralized treasury control.",
              icon: <FaVoteYea />
            }
          ].map(({ quarter, title, desc, icon }, i) => (
            <motion.div
              key={quarter}
              className={`relative flex flex-col md:flex-row items-center gap-6 mb-20 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#A3FF12] rounded-full shadow-[0_0_12px_rgba(163,255,18,0.8)] z-0' />
              <div className='flex items-center justify-center w-14 h-14 rounded-full bg-[#101010] border border-gray-700 shadow-[0_0_15px_rgba(163,255,18,0.3)] text-[#A3FF12] text-2xl relative z-10'>
                {icon}
              </div>
              <div className='bg-gradient-to-b from-[#111] to-[#0B0C10] border border-gray-800 rounded-2xl p-6 md:w-[45%] text-left shadow-[0_0_25px_rgba(163,255,18,0.05)] hover:shadow-[0_0_30px_rgba(163,255,18,0.2)] transition relative z-10'>
                <h3 className='text-[#A3FF12] font-semibold text-lg'>
                  {quarter}
                </h3>
                <p className='text-white font-bold text-xl mt-2 mb-2'>
                  {title}
                </p>
                <p className='text-gray-400 text-sm leading-relaxed'>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📬 Waitlist */}
      <section
        id='waitlist'
        className='py-24 px-6 md:px-16 bg-[#0C0C11] text-center'
      >
        <motion.h2
          className='text-4xl font-bold text-[#A3FF12] mb-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Join the Waitlist
        </motion.h2>
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className='flex flex-col sm:flex-row justify-center items-center gap-3 max-w-lg mx-auto'
          >
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              required
              className='w-full px-4 py-3 rounded-full bg-black border border-gray-600 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#A3FF12]'
            />
            <button
              type='submit'
              className='bg-gradient-to-r from-[#A3FF12] to-[#85E800] text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 shadow-[0_0_10px_#A3FF12]'
            >
              Sign Up
            </button>
          </motion.form>
        ) : (
          <p className='text-[#A3FF12] mt-6 font-semibold'>
            ✅ Thanks for joining! You’re officially on the waitlist.
          </p>
        )}
      </section>

      {/* 🧩 Footer */}
      <footer className='text-gray-500 text-sm py-10 border-t border-gray-800 flex flex-col items-center gap-6 bg-black/40 backdrop-blur-sm'>
        <div className='flex items-center gap-2'>
          <img src='/logo.png' alt='TickTick Logo' className='w-8' />
          <span className='text-[#A3FF12] font-semibold'>TickTick.org</span>
        </div>
        <div className='flex gap-6'>
          <a
            href='https://x.com/TickTickOrg'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#A3FF12] hover:text-[#C7FF5F] transition'
          >
            <FaXTwitter size={26} />
          </a>
          <a
            href='https://discord.gg/DKYhdz8vEd'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#A3FF12] hover:text-[#C7FF5F] transition'
          >
            <FaDiscord size={26} />
          </a>
        </div>
        <p>© {new Date().getFullYear()} TickTick — All Rights Reserved.</p>
      </footer>
    </main>
  );
}
