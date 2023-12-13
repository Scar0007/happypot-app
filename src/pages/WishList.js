import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Container from '../components/Container';
import cactus from '../images/Cactus.jpg'
import cross from '../images/close.png'

const WishList = () => {
  return (
    <>
     <Meta title={ 'Wishlist' } />
     <BreadCrumb title='Wishlist ' />
     <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-3'>
                <div className='wishlist-card position-relative'>
                    <img src={cross} 
                     alt='cross' 
                     className='position-absolute cross img-fluid' 
                    />
                    <div className='wishlist-card-image'>
                        <img src={cactus} className='img-fluid w-100' alt='cactus' />
                    </div>
                    <div className='py-3 px-3'>
                     <h5 className='title'>Cactus</h5>
                     <h6 className='price'>Rs 250</h6>
                    </div>
                </div>
            </div>
            <div className='col-3'>
                <div className='wishlist-card position-relative'>
                    <img src={cross} 
                     alt='cross' 
                     className='position-absolute cross img-fluid' 
                    />
                    <div className='wishlist-card-image'>
                        <img src={cactus} className='img-fluid w-100' alt='cactus' />
                    </div>
                    <div className='py-3 px-3'>
                     <h5 className='title'>Cactus</h5>
                     <h6 className='price'>Rs 250</h6>
                    </div>
                </div>
            </div>
            <div className='col-3'>
                <div className='wishlist-card position-relative'>
                    <img src={cross} 
                     alt='cross' 
                     className='position-absolute cross img-fluid' 
                    />
                    <div className='wishlist-card-image'>
                        <img src={cactus} className='img-fluid w-100' alt='cactus' />
                    </div>
                    <div className='py-3 px-3'>
                     <h5 className='title'>Cactus</h5>
                     <h6 className='price'>Rs 250</h6>
                    </div>
                </div>
            </div>
            <div className='col-3'>
                <div className='wishlist-card position-relative'>
                    <img src={cross}  
                     alt='cross' 
                     className='position-absolute cross img-fluid' 
                    />
                    <div className='wishlist-card-image'>
                        <img src={cactus} className='img-fluid w-100' alt='cactus' />
                    </div>
                    <div className='py-3 px-3'>
                     <h5 className='title'>Cactus</h5>
                     <h6 className='price'>Rs 250</h6>
                    </div>
                </div>
            </div>
          </div>
     </Container>
    </>
  )
}

export default WishList