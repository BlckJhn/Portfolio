import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import  ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';


export const HeroSection = () => {
  return ( 
  <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>

    <div className="container">
      <div className=' flex flex-col items-center '>
      <Image src={memojiImage} className='w-[100px] h-[100px]' alt='Looking behind a screen'/>
      <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
        <div className='bg-green-500 w-[10px] h-[10px] rounded-full relative'> 
          <div className='bg-green-500 absolute inset-0 animate-ping-large rounded-full'></div>
        </div>
        <div className='text-sm font-medium'>Open to New Project Opportunities
        </div> 
      </div>
      </div>
       <div className='max-w-lg mx-auto '>
      <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide font-extrabold '>Crafting Remarkable User Experiences</h1>
      <p className='mt-4 text-center text-white/60 md:text-lg'>
      I specialize in turning design concepts into efficient, high-performing web applications. With a focus on transforming ideas into dynamic, functional solutions, I'm excited to connect and discuss your next project
      </p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
      <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-red-950/60 hover:text-white transition duration-300'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className='w-4 h-4' />
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span>😎</span>
            <span className='font-semibold'>Let's Connect</span>
          </button>
  </div>
  </div>
  </div>
  );
};
