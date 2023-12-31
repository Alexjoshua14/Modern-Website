'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
      >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
        >
        <Image  
          src="/get-started.png"
          alt="get started"
          width={400}
          height={400}
          className="w-[90%] h-[90%] object-contain"
          />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'spring', 0.2, 1)}
        className="flex-[0.75] flex flex-col justify-center"
        >
        <TypingText title="| How Metaversus Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps 
              key={feature}
              number={index + 1}
              text={feature}
              />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
