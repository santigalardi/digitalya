import nutImage from '../assets/nut.svg';
import cylinderImage from '../assets/cylinder.svg';
import noodleImage from '../assets/noodle.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import cloudbg from '../assets/digitalya/cloudbg.webp';

const HeroNextSteps = () => {
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
      className="relative pt-30 pb-20 md:pt-10 md:pb-16 bg-gradient-to-l from-[#3FA7DE]  to-[#E8F7FF] overflow-x-clip"
    >
      <div
        className="absolute inset-0 w-full h-full opacity-35 mix-blend-overlay pointer-events-none select-none"
        style={{
          backgroundImage: `url(${cloudbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row">
          {/* Logo y texto */}
          <div className="md:w-[552px] flex flex-col items-center md:items-start space-y-0">
            <h2 className="text-4xl text-center md:text-start md:text-7xl font-bold tracking text-[#021938] mt-4 leading-snug drop-shadow-sm mb-8">
              Gracias por llegar hasta
              {/* <br /> */}
              <span className="text-[#3FA7DE] drop-shadow-[0_0_1px_rgba(255,255,255,0.8)]"> acá.</span>
            </h2>

            <p className="text-[#021938]/80 text-base md:text-2xl leading-relaxed max-w-xl text-center md:text-left mb-12">
              Queremos contarte sobre nuestro servicio de <b>desarrollo web</b> y por qué podría servirte. También
              queremos contarte la dinámica de lo que será la <b>reunión</b>, que esperamos puedas agendarnos.
            </p>

            {/* Botones CTA */}
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

export default HeroNextSteps;
