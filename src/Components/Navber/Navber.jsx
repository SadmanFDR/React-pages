import React from 'react'

const Navber = () => {
  return (
    <>
<nav className='py-5 bg-slate-400'>
   <div className="main_row mx-14 flex justify-between align items-center">
      <div className="logo">
         <h1 className='font-semibold border-x-lime-950 text-4xl'>Logo</h1>
      </div>
      <ul className='flex gap-6'>
         <li><a className='text-2xl' href="/">Home</a></li>
         <li><a className='text-2xl' href="/Blog">Blog</a></li>
         <li><a className='text-2xl' href="/About">About</a></li>
         <li><a className='text-2xl' href="/Help">Help</a></li>
      </ul>
      <form action="">
         <input className='p-3 rounded-lg outline-none' type="search" placeholder='Search'/>
      </form>
   </div>
</nav>
    </>
  )
}

export default Navber