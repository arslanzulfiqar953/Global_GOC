import React from 'react'
import who from "./who.png";

const Who = () => {
  return (
    <div id="Who">
      <section className="text-gray-600 bg-[#000F30] body-font">
  <div className="container flex flex-col items-center mx-auto px-5 py-24 md:flex-row">
    <div className="flex flex-col items-center w-1/2 md:items-start lg:flex-grow">
      <h1 className="mb-4 text-3xl font-medium text-white title-font sm:text-4xl"> Who We Are?
      </h1>
      <p className="mb-8 leading-relaxed text-[white]">🚗 “We are a team of certified instructors dedicated to building safe and confident drivers.”
<br /><br />
🚦 “At Global Driving School, we combine experience with modern techniques to make learning easy and effective.”
<br /><br />
🌍 “We are passionate about promoting safe driving habits and helping learners achieve independence on the road.”
<br /><br />
🛣️ “Global Driving School is where beginners become confident drivers and drivers become experts.”
<br /><br />
🎯 “We are committed to guiding every student with patience, professionalism, and care.”</p>
      <div className="flex justify-center">
      </div>
    </div>
    <div className="md:w-1/2 lg:max-w-lg">
      <img className="object-cover object-center rounded" alt="hero" src={who}/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Who
