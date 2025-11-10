import nutImage from '../assets/nut.svg';
import cylinderImage from '../assets/cylinder.svg';
import noodleImage from '../assets/noodle.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { IoChatbubblesOutline } from 'react-icons/io5';

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
      className="pt-30 pb-20 md:pt-10 md:pb-16 bg-gradient-to-l from-[#3FA7DE]  to-[#E8F7FF] overflow-x-clip"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center">
          {/* Logo y texto */}
          <div className="md:w-[552px] flex flex-col items-center md:items-start">
            <h2 className="text-4xl md:text-5xl font-bold tracking text-[#021938] mt-4 leading-snug drop-shadow-sm mb-8">
              Desarrollo Web y Marketing para Marcas que quieren
              {/* <br /> */}
              <span className="text-[#3FA7DE] drop-shadow-[0_0_1px_rgba(255,255,255,0.8)]"> crecer.</span>
            </h2>

            <p className="text-[#021938]/80 text-base md:text-lg leading-relaxed max-w-xl text-center md:text-left mb-12">
              No estás solo en el mundo digital. Diseñamos{' '}
              <b>sitios web que conectan, campañas publicitarias que venden</b> y te damos <b>soporte real 24/7 </b>{' '}
              para que tu marca crezca sin límites.
            </p>

            {/* CTA */}
            <div className="w-full md:w-4/7">
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#021938] text-white px-4 py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight w-full cursor-pointer
               transition-all
               shadow-[0_0_0_0_#3FA7DE]
               hover:shadow-[3px_3px_2px_0px_#00DDFF] transform hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                Contanos qué necesitás
                <IoChatbubblesOutline className="m-1 ml-3" />
              </button>
            </div>
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
