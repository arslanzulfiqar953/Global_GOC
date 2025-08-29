import React from 'react'

const Suggestion = () => {
  return (
    <div id="Suggest" className='bg-[#000F30]'>
      <section className="relative text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col mb-12 w-full text-center">
      <h1 className="mb-4 text-2xl font-medium text-white title-font sm:text-3xl">Suggestion Box</h1>
      <p className="mx-auto leading-relaxed text-base text-white lg:w-2/3">Keep up the great work in making driving safe, easy, and professional for everyone</p>
    </div>
    <div className="mx-auto md:w-2/3 lg:w-1/2">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-white">Name</label>
            <input type="text" id="name" name="name" className="py-1 px-3 w-full text-base text-gray-700 leading-8 bg-gray-100 bg-opacity-50 border-gray-300 transition-colors duration-200 ease-in-out outline-none rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-white">Email & Contact</label>
            <input type="email" id="email" name="email" className="py-1 px-3 w-full text-base text-gray-700 leading-8 bg-gray-100 bg-opacity-50 border-gray-300 transition-colors duration-200 ease-in-out outline-none rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-white">Suggestion</label>
            <textarea id="message" name="message" className="py-1 px-3 w-full h-32 text-base text-gray-700 leading-6 bg-gray-100 bg-opacity-50 border-gray-300 transition-colors duration-200 ease-in-out outline-none rounded border focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 resize-none"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto py-2 px-8 text-white text-lg bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded">Submit</button>
        </div>
        <div className="p-2 pt-8 mt-8 w-full text-center border-t border-black">
          
          
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Suggestion

