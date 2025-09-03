import React from 'react'
import safety from "./safety.png";

const Safety = () => {
  return (
    <div>
      <section className="bg-[#01133F] body-font">
  <div className="container flex flex-col items-center mx-auto px-5 py-24 md:flex-row">
    <div className="flex flex-col items-center w-1/2 md:items-start lg:flex-grow">
     
      <h1 className="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">⏲ Don't Over Speed
        <br className="hidden lg:inline-block"/>
      </h1>
      <br />
        <h1 className="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">📲Don't Use Mobile Phone 
        <br className="hidden lg:inline-block"/>
      </h1>
      <br /> 
        <h1 className="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">𐃯 Don't Drink And Drive
        <br className="hidden lg:inline-block"/>
      </h1>
      <br />
        <h1 className="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">🎟 Fasten Seat Belt
        <br className="hidden lg:inline-block"/>
      </h1>
      <br />
        <h1 className="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">🚗 Maintain Gap
        <br className="hidden lg:inline-block"/>
      </h1>

      
      <div className="flex justify-center">
     
      </div>
    </div>
    <div className="w-5/6 w-full md:w-1/2 lg:max-w-lg">
      <img className="object-cover object-center rounded" alt="hero"  src={safety} />
    </div>
  </div>
</section>
    </div>
  )
}

export default Safety
