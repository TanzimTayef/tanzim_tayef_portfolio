import React from "react";
import { Link } from "react-scroll";

// import img
import Image from "../assets/img/heroImg.png";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-24 xl:flex-row">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Tanzim Tayef
              </h2>
              <p className="mb-4 text-accent">Full-Stack Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
               <span className="font-bold"> Expertise:</span> HTML5, CSS3, Bootstrap, Tailwind,
                Firebase, ExpressJS, MongoDB, CURD, JWT. <br/>
               <span className="font-bold"> Comfortable:</span> React
                Hooks Form, React Query and Stripe. Familiar: React Native,
                Typescript. <br/>
               <span className="font-bold"> Tools:</span> Github, Netlify, Heroku, Figma, Stack
                Overflow.
                <br />
                <br />
                I passed SSC from dowarabazar gov't model high school with 2019. and now i am studying in second year of HSC.
              </p>
            </div>
          <Link to='contact'>
          <button  className="transition-all btn btn-md bg-accent hover:bg-secondary-hover">
              Contact me
            </button>
          </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
