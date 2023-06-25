'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex flex-col md:flex-row gap-4"
  >
    <Image
      src={imgUrl}
      alt={title}
      width={270}
      height={250}
      className="w-full h-[250px] md:w-[270px] rounded-[32px] object-cover"
    />
    <div
      className="w-full flex justify-between items-center"
    >
      <div
        className="flex-1 flex flex-col gap-2 max-w-[650px] md:ml-[62px]"
      >
        <h4
          className="font-normal text-[26px] text-white lg:text-[42px]"
        >
          {title}
        </h4>
        <p
          className="mt-[16px] font-normal text-[40px] text-secondary-white lg:text-[20px]"
        >
          {subtitle}
        </p>
      </div>
      <div
        className="hidden lg:flex items-center justify-center
                    w-[100px] h-[100px] rounded-full bg-transparent
                    border-[1px] border-white"
      >
        <Image
          src="arrow.svg"
          alt="arrow"
          width={80}
          height={80}
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
