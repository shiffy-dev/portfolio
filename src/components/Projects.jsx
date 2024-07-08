



import React from 'react';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#1c3861]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Projects</p>
          <p className='py-4'>Check out some of my recent projects here</p>
        </div>

        <div 
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4' 
        
        >
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-betweennt-div bg-white text-black p-6 transition-transform transform hover:scale-105  bg-gif'>
            <div className='text-center'>
              <h3 className='text-xl font-semibold mb-4'>Project 1</h3>
              <p className='mb-4'>DBMS Project on Airline Booking System</p>
              <a
                href="https://drive.google.com/file/d/1iqJNXT35Rw1DxQmTEWQOIYn25oX9Xah2/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className='inline-block bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-600'
              >
                View Project
              </a>
            </div>
          </div>

          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center mx-auto content-betweennt-div bg-white text-white p-6 transition-transform transform hover:scale-105 bg-img'>
            <div className='text-center'>
              <h3 className='text-xl font-semibold mb-4'>Project 2</h3>
              <p className='mb-4'>Machine Learning project on prediction of car price.</p>
              <a
                href="https://colab.research.google.com/drive/1yCfJ0wQcGM93x4pwFaMk7GLhp3glRBFd"
                target="_blank"
                rel="noopener noreferrer"
                className='inline-block bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600'
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
