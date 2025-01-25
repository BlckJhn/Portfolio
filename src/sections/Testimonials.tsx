import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Cards";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from '@/assets/icons/sparkle.svg';
import StarIcon from '@/assets/icons/star.svg';
import { Fragment } from "react";


const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager",
    text: "John was essential in turning our website into an effective marketing tool. His meticulous attention to detail and strong grasp of our brand were outstanding. We're extremely pleased with the outcome!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design",
    text: "It was a pleasure working with John. His frontend development skills brought our designs to life in ways we hadn't anticipated. The website has exceeded all our expectations",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ Chapter Cove",
    text: "John's talent for crafting smooth user experiences is unparalleled. Since the launch of the new design, our website has experienced a notable boost in conversions. We couldn't be more pleased.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ WeatherChrome Inc",
    text: "John is a full-stack expert. He took our complex product and turned it into an intuitive and engaging user interface. We're already receiving positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ JBR LIMITED",
    text: "John's work on our website has been outstanding. He's a skilled developer and an excellent communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
  <div className="py-16 lg:py-24 ">
     
    <div className="container">
    <SectionHeader
     eyebrow="Happy Clients"
     title="What Clients say about Me"
     descriptions="Don't just take my word for it. See what my clients have to say about my Work."/>


    <div className="mt-12 lg:mt-20 flex overflow-x-clip  py-4 -my-4 "  style={{
       maskImage: 'linear-gradient(to right, transparent, black 10%, black 80%, transparent)'
     }}>
      <div className="flex flex-none pr-8 gap-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]  ">
        {[...new Array(2)].fill(0).map((_, index) => (
        <Fragment key={index}>
           {testimonials.map ((testimonial) => (
      <Card key={testimonial.name} className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-6 transition duration-300 hover:text-emerald-600">
        <div className="flex gap-4 items-center">
          <div className="w-14 h-14 bg-gray-700 inline-flex rounded-full items center justify-center flex-shrink-0">
         <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full "/>
         </div>
         <div >
          <div className="font-semibold text-red-500">{testimonial.name}</div>
          <div className="text-sm text-white/40 hover:text-white">{testimonial.position}</div>
          </div>
          </div>
          <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
        </Card>
      ))};

        </Fragment>
        )
        
        )}
     
      </div>
      </div>
      </div>
      <div className='absolute  z-0 overflow-x-clip inset-0 [mask-image: linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
    
    <div 
    className='absolute inset-0 -z-30 opacity-5' 
    style={{
      backgroundImage: `url(${grainImage.src})`
      }}></div>
        
        <div className='w-[620px] h-[620px] hero-ring'></div>
        <div className='w-[820px] h-[820px] hero-ring'></div>
        <div className='w-[1020px] h-[1020px] hero-ring'></div>
        <div className='w-[1200px] h-[1200px] hero-ring'></div>

        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className='w-28 h-28 text-sky-500' />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className='w-12 h-12 text-sky-500' />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className='w-8 h-8 text-sky-500' />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className='w-8 h-8 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className='w-5 h-5 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className='w-10 h-10 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className='w-14 h-14 text-emerald-300/20' />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className='w-3 h-3 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className='w-2 h-2 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className='w-2 h-2 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>
    </div>
      </div>
  );
};
