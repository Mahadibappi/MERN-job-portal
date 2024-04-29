/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { GoSearch } from "react-icons/go";
const Banner = () => {
  return (
    <div
      className="hero object-cover relative h-[550px]"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/colleague-talking-together-while-coming-back-from-work_1150-2994.jpg?t=st=1714370123~exp=1714373723~hmac=760723b25aaf70f6cabce4303c7bb2ab50f90094297e782762de280d984a62c8&w=1380)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg text-slate-100">
          <h1 className="mb-5 text-4xl font-semi-bold ">
            Find jobs in japan near me over 500+ companies offer jobs
          </h1>
          <div className="relative mt-12">
            <div className="absolute left-6 top-1 p-2 m-2 flex items-center">
              <GoSearch className="w-8 h-8" />
            </div>
            <input
              type="text"
              placeholder="Job Title or company"
              className="w-full py-5 px-6 rounded-lg bg-neutral-700 text-white text-xl text-center placeholder-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary "
            />

            <button className="absolute right-3 top-2 mt-2 mr-4 rounded-md py-2 px-3 bg-blue-600 ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
