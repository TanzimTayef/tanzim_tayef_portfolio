import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[700px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            My latest work
          </h2>
          <p className='subtitle'>
          I have already worked on three projects and I am updating them reqularly. Along with that I am trying to do more new projects. You can see my projects in detail if you want.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
