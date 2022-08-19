import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <a href={item.liveSite} target="_blank" className="">
          <img className="rounded-2xl transition  lg:hover:scale-110" src={item.image} alt="" />
        </a>
      </div>
      <h3 className="text-2xl font-semibold capitalize mb-2">{item.name}</h3>
      <div className="mb-3">
        <a
          href={item.clientSite}
          target="_blank"
          className="hover:underline  hover:text-accent cursor-pointer font-bold text-xl mr-4"
        >
          Client Site
        </a>
        <a
          href={item.serverSite}
          target="_blank"
          className="hover:underline  hover:text-accent cursor-pointer font-bold text-xl "
        >
          Server Site
        </a>
      </div>
      <p className="text-base max-w-md">
       {item.description}
      </p>
    </div>
  );
};

export default Project;
