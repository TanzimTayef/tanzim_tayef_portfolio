import React from 'react';

// import woman image
import tayefImg from '../assets/img/tayef.png';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container h-full mx-auto'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex flex-col items-center flex-1 lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, I'm Tanzim Tayef! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I'm Full Stack <br /> Web Developer.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              I have started new job in web development sector. I'm passionate about it. if you want to hire a professional web developer for your project or company. you can read my resume. and of course don't forget to give me feeback.
            </p>
            <a href="https://drive.google.com/file/d/1a6QL37EfKVa-fN1hMJp1QB5yLKbJdLC9/view" target="_blank">
            <button className='transition-all btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg'>
              Get Resume
            </button>
            </a>
           
          </div>
          <div className='items-end justify-end flex-1 hidden h-full lg:flex'>
            <img src={tayefImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
