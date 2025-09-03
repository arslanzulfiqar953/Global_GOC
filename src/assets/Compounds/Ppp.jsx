import React from 'react'
import { Link } from 'react-router-dom'
import mehran from "./Mehran.png";
import alto from "./Alto.png";
import jalto from "./JAlto.png";
import lshape from "./Lshape.webp";

const Ppp = ({ onVisitMehran }) => {
  return (
    <div>
      <section class="text-[#00337E] bg-[#01133f] body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Choose Your Package</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">✅ “Looking for safe and professional driving lessons? Try Global Driving School!”</p>
    </div>
    <div class="flex flex-wrap -m-4 ">
      <div class="xl:w-1/4 md:w-1/2 p-4 ">
        <div class="bg-[#1E2371] p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={mehran} alt="content"/>
          <h2 class="text-lg text-white font-medium title-font mb-4 text-[30px]">Mehran(Manual)</h2>
              <button onClick={onVisitMehran} class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link to="/mehran manual">  Click Here To Visit </Link></button>

        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-[#1E2371] p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={alto} alt="content"/>
          <h2 class="text-lg text-white font-medium title-font mb-4 text-[30px]">Alto(Automatic)</h2>
           <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link to="/alto auto">  Click Here To Visit </Link></button>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-[#1E2371] p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={jalto} alt="content"/>
          <h2 class="text-lg text-white font-medium title-font mb-4 text-[30px]">Alto(Manual)</h2>
        <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link to="/japan">  Click Here To Visit </Link></button>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-[#1E2371] p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={lshape} alt="content"/>
          <h2 class="text-lg text-white font-medium title-font mb-4 text-[25px]"><a href="#footers"> Driving Test Practice</a></h2>
        <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link to="/test">  Click Here To Visit </Link></button>

        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Ppp
