import React from 'react'
import Homebg from '../../assets/compounds/GDSBG.png'; 

const Home = () => {
  return (
    <div id="home" className="overflow-hidden w-screen h-screen">
      <div
        className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-[2000ms] ease-in-out transform hover:scale-125"
        style={{
          backgroundImage: `url(${Homebg})`,
        }}
      >
        {/* Content goes here */}
      </div>
    </div>
  )
}

export default Home
