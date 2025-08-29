import React, { useState } from 'react'
import Header from './Header'

const Mehranpkg = () => {
  const [showForm, setShowForm] = useState(false) // ✅ state added

  return (
    <>
      <Header />
      <div>
        <section className="text-gray-600 bg-[#01133F] body-font">
          <div className="container px-5 py-24 mx-auto bg-[#01133F]">
            <div className="flex flex-col h-[200px] text-center">
              <img src="src/assets/Compounds/mpkg.png" alt="Mehran Package" />
            </div>

            {/* ✅ Button placed bottom-center */}
            <div className="flex justify-center mt-[550px]">
              <button
                onClick={() => setShowForm(true)} // ✅ open form
                className="py-2 px-8 text-white text-lg bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Apply Now
              </button>
            </div>

            {/* ✅ Show form when state is true */}
            {showForm && (
              <div className="mt-10">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScuqGzpVN3MT_41oCEXKei0-NobRv6m4dgkRQpsoWpDfTj6Ww/viewform?embedded=true"
                  className="w-full h-[90vh]"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Registration Form"
                >
                  Loading…
                </iframe>

                {/* ✅ Close button */}
                <div className="flex justify-center mt-5">
                  <button
                    onClick={() => setShowForm(false)} // ✅ close form
                    className="py-2 px-6 text-white bg-red-600 rounded hover:bg-red-700"
                  >
                    Close Form
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}

export default Mehranpkg
