import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'
import home from '../images/home.png'
import heart from '../images/heart.png'
import user from '../images/user.png'
import bag from '../images/bag.png'
import menubar from '../images/menu.png'
const Header = () => {
  return (
   <>
   <header className='header-top-strip py-3'>
    <div className='container-xxl'>
      <div className='row'>
         <div className='col-6'>
          <p className='text-white mb-0'>
            <a className='text-white' 
            href='mailto:infohappypot@gmail.com'>
              Mail Us: infohappypot@gmail.com
              </a>
          </p>
         </div>
         <div className='col-6'>
          <p className='text-end text-white mb-0'>
             Call Us: <a className='text-white' href='tel:+91 7503172761'>
              +91 7503172761
              </a>
          </p>
         </div>
      </div>
    </div>

   </header>
   
   <header className='header-upper py-3'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-2 header-upper-links '>
          <h2>
            <Link className='text-white d-flex align-items-center gap-10'>
              <img src={home} alt='Home' />
              <p className='mb-0'>Happypot</p>
            </Link>
          </h2>
        </div>
        <div className='col-5'>
        <div className="input-group">
         <input type="text" 
            className="form-control py-2" 
            placeholder="Search Products Here..." 
            aria-label="Search Products Here..." 
            aria-describedby="basic-addon2" 
          />
            <span className="input-group-text p-3" id="basic-addon2">
              <BsSearch className='fs-6' />
              </span>
       </div> 
        </div>
        <div className='col-5'>
          <div className='header-upper-links d-flex align-items-center justify-content-between'>
            <div>
              <Link to='/wishlist' className='text-white d-flex align-items-center gap-10'>
              <img src={heart} alt='Wishlist' />
              <p className='mb-0'>
                Wishlist <br /> Favourites
              </p>
              </Link>
            </div>
            <div>
              <Link to='/login' className='text-white d-flex align-items-center gap-10'>
              <img src={user} alt='User' />
              <p className='mb-0'>
                Log In <br /> My Account
              </p>
              </Link>
            </div>
            <div>
              <Link to='/bag' className='text-white d-flex align-items-center gap-10'>
              <img src={bag} alt='Bag' />
              <div className='d-flex flex-column gap-10'>
                <span className='badge bg-white text-dark'>0</span>
                <p className='mb-0'>Rs.500</p>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   </header>

   <header className='header-bottom py-3'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='menu-bottom d-flex align-items-center gap-30'>
            <div>
             <div className="dropdown">
               <button 
                className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                type="button" 
                id='dropdownMenuButton1'
                data-bs-toggle="dropdown" 
                aria-expanded="false"
               >
                <img src={menubar} alt='Menu'/>
                 <span className='me-5 d-inline-block'>Shop Categories</span>
                 
               </button>
               <ul className="dropdown-menu">
                 <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                 <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                 <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
               </ul>
             </div>
             
            </div>
            <div className='menu-links'>
              <div className='d-flex align-items-center gap-15'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/product'>Our Store</NavLink>
                <NavLink to='/rent'>Rent</NavLink>
                <NavLink to='/gardening-services'>Gardening Services</NavLink>
                <NavLink to='/blogs'>Blogs</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </header>

   </>
  )
}

export default Header