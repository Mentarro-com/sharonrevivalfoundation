import React from 'react'

function Phone() {

    const phoneNumber="+917200800853"
  return (
    <div
      className="fixed bottom-[4vh] left-3 bg-gray-800 text-white w-14 h-14 flex z-50 justify-center items-center rounded-full cursor-pointer "
      >
      
      <a href={`tel:${phoneNumber}`} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path d="M6.62 10.79a15.091 15.091 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.27 1.12.27 2.33.41 3.57.41.55 0 1 .45 1 1v3.49c0 .55-.45 1-1 1C10.29 22 2 13.71 2 3.5 2 2.95 2.45 2.5 3 2.5h3.49c.55 0 1 .45 1 1 0 1.24.14 2.45.41 3.57.1.35.01.74-.27 1.02l-2.2 2.2z" />
      </svg>
    </a>
    </div>
  )
}

export default Phone