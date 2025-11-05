import nutImage from '../assets/nut.svg';
import cylinderImage from '../assets/cylinder.svg';
import noodleImage from '../assets/noodle.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
// import { IoRocketOutline } from 'react-icons/io5';

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="pt-30 pb-20 md:pt-12 md:pb-16 bg-gradient-to-l from-[#021938] via-[#3FA7DE]  to-[#E8F7FF] overflow-x-clip"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center">
          {/* Logo y texto */}
          <div className="md:w-[552px] flex flex-col items-center md:items-start">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#021938] mt-4 leading-snug drop-shadow-sm">
              Sitios Web, Correos Corporativos, Hosting y Marketing para impulsar tu
              {/* <br /> */}
              <span className="text-[#41A9F0] drop-shadow-[0_0_3px_rgba(255,255,255,5)]"> presencia digital.</span>
            </h2>

            {/* <button className="bg-[#021938] mt-[30px] text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 tracking-tight w-[90%] md:w-auto cursor-pointer hover:bg-[#46AAE1] hover:text-[#021938] hover:scale-105 active:scale-95 transition-all duration-300">
              <p>Empezar ahora</p>
              <IoRocketOutline className="text-xl" />
            </button> */}
          </div>

          {/* Animaciones decorativas */}
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={nutImage}
              alt="Nut Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 mix-blend-luminosity opacity-70"
              animate={{ translateY: [-30, 30] }}
              transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            />
            <motion.img
              src={cylinderImage}
              width={220}
              height={220}
              alt="Cylinder image"
              className="hidden md:block -top-8 -left-32 md:absolute mix-blend-luminosity opacity-70"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage}
              width={220}
              height={220}
              alt="Noodle image"
              className="hidden lg:block absolute top-[524px] left-[448px] mix-blend-luminosity opacity-70"
              style={{
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
