import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Shifa. Thank you for visiting my website. Feel free to take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about web development and I love to build things.
              I have a strong interest in fullstack development and
              I am always looking for ways to improve my skills.
              I also enjoy learning new technologies and exploring different tools and frameworks. If you have any questions or would like to connect with me,
              feel free to reach out to me on social media or through email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
