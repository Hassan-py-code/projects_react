

import React from 'react'
import logo from "../assets/code.jpg"


export default function Navbar() {
  return (
     
      <nav className='sticky top-0 z-50 py-3
      backdrop-blur-lg border-b border-neutral-700/80'>
       
        <div className='container px-4 mx-auto relative text-sm'>
            
            <div className='flex justify-center items-center'>

                <div className='flex justify-center flex-shrink-0'>
                      <img src={logo} alt="" />
                </div>

            </div>

        </div>

      </nav>
      

  )
}
