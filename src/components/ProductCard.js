import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link,useLocation } from 'react-router-dom';
import wish from '../images/add-to-favorites.png'
import bag from '../images/bag.png'
import aelovera from '../images/Aelovera.jpg'
import cactus from '../images/Cactus.jpg'
import palm from '../images/palm.jpg'
const ProductCard = (props) => {
  const{ grid } = props;
  let location = useLocation(); 
 
  return (
    <>
    <div   
    className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"} `} 
    >
        <Link to=":id" className='product-card position-relative'>
            <div className='whislist-icon position-absolute'>
                <button className='border-0 bg-transparent'>
                    <img src={wish} alt='whishlist' />
                </button>
            </div>
            <div className='product-image'>
                <img src={aelovera} className='img-fluid' alt='product image' />
                <img src={palm} className='img-fluid' alt='product image' />
            </div>
            <div className='product-details'>
                <h6 className='Type'>Herb</h6>
                <h5 className='product-title'>
                    product desc goes here
                </h5>
                <ReactStars
                 count={5}
                 size={24}
                 value={3}
                 edit={false}
                 activeColor="#ffd700"
               />
                <p className={` description ${ grid === 12? "d-block" : "d-none" } `}>Descripton goes here</p>
                <p className='price'>Rs.100</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <button className='border-0 bg-transparent'>
                    <img src={bag} alt='addbag'/>
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src={bag} alt='addbag'/>
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src={bag} alt='addbag'/>
                    </button>
                </div>  
            </div>
        </Link>
    </div>
    
    </>
  )
}

export default ProductCard