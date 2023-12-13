import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import cactus from '../images/Cactus.jpg'

import Container from '../components/Container';
const GardeningServices = () => {
  return (
    <>
     <Meta title={ 'Gardening Services' } />
     <BreadCrumb title='Gardening Services' />
     <Container class1='services-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <h3 className='d-flex justify-content-center mb-5'>Services</h3>
          <div className='col-3'>
            <div className='services position-relative'>
              <img src={cactus} className='img-fluid' alt='plant' />
              <div className='services-content position-absolute'>
                <h3>Home Garden Set-up</h3>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='services position-relative'>
              <img src={cactus}className='img-fluid' alt='plant' />
              <div className='services-content position-absolute'>
                <h3>Landscape Design</h3>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='services position-relative'>
              <img src={cactus} className='img-fluid' alt='plant' />
              <div className='services-content position-absolute'>
                <h3>Mali on Door Maintenance</h3>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='services position-relative'>
              <img src={cactus} className='img-fluid' alt='plant' />
              <div className='services-content position-absolute'>
                <h3>Landscape Maintenance</h3>
              </div>
            </div>
          </div>
          
        </div>
     </Container>
     <Container class1='packages-wrapper home-wrapper-2 py-5'>
          <div className='row'>
           <h3 className='d-flex justify-content-center mb-5'>Maintenance Packages</h3>
           <div className='col-4'>
            <div className='service-card'>
                    <div className='d-flex align-items-center justify-content-center card-heading'>
                        <h4>Silver</h4>
                    </div>
                    <div className='package-content py-3'>
                        <ul className='ps-0'>
                            <li>3 Months Package</li>
                            <li>Pest Control</li>
                            <li>Health Check</li>
                            <li>Gaumuthra Spray</li>
                            <li>Clean Up</li>
                            <li>2 Bags of Vermicompost</li>
                        </ul>
                    </div>
                    <div className=' d-flex align-items-center justify-content-center pb-3'>
                       <Link className='button'>Add to Bag</Link>
                    </div>
            </div>
           </div>
           <div className='col-4'>
            <div className='service-card '>
                    <div className='d-flex align-items-center justify-content-center card-heading'>
                        <h4>Gold</h4>
                    </div>  
                    <div className='package-content py-3'>
                    <ul className='ps-0'>
                            <li>6 Months Package</li>
                            <li>Pest Control</li>
                            <li>Health Check</li>
                            <li>Gaumuthra Spray</li>
                            <li>Clean Up</li>
                            <li>2 Bags of Vermicompost</li>
                            <li>Vegetable Seeds</li>
                            <li>One time repotting</li>
                        </ul>
                    </div>  
                    <div className=' d-flex align-items-center justify-content-center pb-3'>
                       <Link className='button'>Add to Bag</Link>
                    </div>
            </div> 
           </div>
           <div className='col-4'>
            <div className='service-card'>
                    <div className='d-flex align-items-center justify-content-center card-heading'>
                        <h4>Platinum</h4>
                    </div>
                    <div className='package-content py-3'>
                     <ul className='ps-0'>
                            <li>12 Months Package</li>
                            <li>Pest Control</li>
                            <li>Health Check</li>
                            <li>Gaumuthra Spray</li>
                            <li>Clean Up</li>
                            <li>2 Bags of Vermicompost</li>
                            <li>Vegetable Seeds</li>
                            <li>Flowering Seeds</li>
                            <li>One time repotting</li>
                            <li>Mechanical Gardening Kit</li>
                        </ul>
                    </div>  
                    <div className=' d-flex align-items-center justify-content-center pb-3'>
                       <Link className='button'>Add to Bag</Link>
                    </div> 
            </div>
           </div>                   
          </div>
     </Container>
    </>
  )
}

export default GardeningServices