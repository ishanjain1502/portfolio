import React from 'react'

const Footer = () => {
  return (
    <footer className=" text-white py-4 bg-black mx-auto px-2 backdrop-filter backdrop-blur-lg border-b border-gray-200 bg-opacity-20 w-full">
        <div className="container mx-auto px-4 text-center">
          © {new Date().getFullYear()} Ishan Jain. All rights reserved.
        </div>
      </footer>
  )
}

export default Footer