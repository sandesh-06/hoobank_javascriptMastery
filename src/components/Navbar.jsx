import { useState } from "react"
import {close, logo, menu} from '../assets'
import {navLinks} from '../constants'


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  // console.log(toggle)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
     <ul className="list-none hidden sm:flex justify-end items-center flex-1">  {/* usually the display is set to none, once the sm breakpoint is hit, the display:none is overwritten to display:flex */}
        {navLinks.map((nav, index)=>(
          <li key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length-1?'mr-0:':'mr-10'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* nav list for mobile devices */}
    <div className="sm:hidden flex flex-1 justify-end items-center">
      <img src={toggle  ? close: menu} alt="menu"
      className="w-[28px] h-[28px] object-contain cursor-pointer" 
      // onClick={()=> setToggle(!toggle)} - this is not a good practice to toggle the state
      onClick={()=>setToggle((prevToggle)=>!prevToggle)}
      />
      <div
      className={`${toggle?'flex':'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 rounded-xl sidebar w-1/2
      `}
      >
         <ul className="list-none flex flex-col justify-end items-center flex-1 "> 
        {navLinks.map((nav, index)=>(
          <li key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length-1?'mb-0:':'mb-4'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      </div>
    </div>
    </nav>

    
  )
}

export default Navbar