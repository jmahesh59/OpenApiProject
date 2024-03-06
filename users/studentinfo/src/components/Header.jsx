import { Link, useLocation } from 'react-router-dom'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useSelector ,useDispatch} from 'react-redux';
import { toogleTheme} from '../store/themeSlice'
function Header() {
   const {pathname} = useLocation();
   const {theme }=useSelector((state)=>state.theme);
   const dispatch = useDispatch();
   
   console.log(theme)
  
  return (
    <nav className=''>
      <div className='flex justify-between p-3 items-center shadow  md:shadow-lg '>
          <div className="border p-3 rounded-lg bg-slate-100 ml-6 items-center pl-5 pr-5">
            <span className='text-lg font-bold text-amber-500'>My</span>
            <span className='text-blue-400'>Club</span>
          </div>
          <div className="">
              <ul className='flex gap-7 text-lg '>
              <Link to='/'>
                <li className={`hover:text-amber-500 cursor-pointer ${pathname === '/' ? 'underline text-amber-500' : ''}`}>
                  Home
                </li>
              </Link>
              <Link to='/about'>
                <li className={`hover:text-amber-500 cursor-pointer ${pathname === '/about' ? 'underline underline-offset-1 text-amber-500' : ''}`}>
                  About
                </li>
              </Link>
              </ul>
          </div>
          <div className="mr-5 cursor-pointer" >
           <button className='w-12 h-10 hidden sm:inline'  onClick={()=>dispatch(toogleTheme())}>
              {theme==="light"?(<FaMoon/>):(<FaSun/>)}  
            </button>
          </div>
       </div>
    </nav>
  )
}

export default Header
