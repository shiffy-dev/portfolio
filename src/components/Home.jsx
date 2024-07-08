import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full bg-[#0a192f] flex items-center justify-center text-white '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto text-center text-white mt-20'>
        <p className="text-pink-600 text-[25px]">Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] pt-2'>Shifa Yashfeen</h1>
        <p className="text-[#8892b0] pl-10 pr-10 justify-center pt-5 text-[25px]"> A final-year Computer Science Engineering student at BITS Pilani Dubai Campus. 
          Passionate about technology and innovation, I'm dedicated to mastering the art of software development 
          and creating impactful solutions. Currently, I'm working on front-end development.</p>
          

        <div className='flex justify-center mt-8'>
          <a href="#projects">
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Projects
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
                
              </span>
            </button>
          </a>
            
        </div>
      </div>
    </div>
  );
};

export default Home;




