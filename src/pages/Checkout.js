import React from 'react'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import cactus from '../images/Cactus.jpg'
import Container from '../components/Container'
const Checkout = () => {
  return (
    <>
     <Container class1='checkout-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-7'>
                    <div className='checkout-left-data'>
                        <h3 className='website-name'>Happypot</h3>
                        <nav style={{"--bs-breadcrumb-divider": '>'}}>
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to='/Bag' className='text-dark total-price'>Bag</Link>
                            </li>
                             &nbsp; /
                            <li className="breadcrumb-item total-price active" aria-current="page">
                                Information
                            </li>
                            &nbsp; /
                            <li className="breadcrumb-item total-price active">
                                Shipping
                            </li>
                             &nbsp; /
                            <li className="breadcrumb-item total-price active " aria-current="page">
                                Payment
                            </li>
                          </ol>
                        </nav>
                        <h4 className='title total'>Contact information</h4>
                        <p className='user-details total'>
                            Demo User (Example@gmail.com)
                        </p>
                        <h4 className='mb-3'>Shipping Address</h4>
                        <form className='d-flex flex-wrap gap-15 justify-content-between'>
                            <div className='w-100'>
                                <select className='form-control form-select'>
                                    <option value='' selected disabled>
                                        Select Country
                                    </option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' placeholder='First Name' className='form-control' />
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' placeholder='Last Name' className='form-control' />
                            </div>
                            <div className='w-100'> 
                                <input type='text' placeholder='Address' className='form-control' />
                            </div>
                            <div className='w-100'> 
                                <input type='text' placeholder='Apartrment, suite, etc' className='form-control' />
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' placeholder='City' className='form-control' />
                            </div>
                            <div className='flex-grow-1'>
                                <select className='form-control form-select'>
                                    <option value='' selected disabled>
                                        Select State
                                    </option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' placeholder='Zipcode' className='form-control' />
                            </div>
                            <div className='w-100'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to='/bag' className='text-dark'>
                                        <BiArrowBack className='me-2' />
                                        Return to Bag
                                    </Link>
                                    <Link to='/bag' className='button'>
                                        Continue to Shipping
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='border-bottom py-4'>
                        <div className='d-flex mb-2 justify-content-between align-items-center'>
                            <div className='w-75 d-flex gap-15'>
                                <div className='w-25 position-relative'>
                                    <span style={{ top:'-10px', right:'-1px'}} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>
                                        1
                                    </span>
                                    <img src={cactus} className='img-fluid' alt='product-image' />
                                </div>
                                <div>
                                    <h5 className='total'>Cactus</h5>
                                    <p className='total-price'>serial number</p>
                                </div>
                            </div>
                            <div className='fex-grow-1'>
                                <h5 className='total'>Rs.250</h5>
                            </div>
                        </div>
                    </div>
                    <div className='border-bottom py-4'>
                      <div className='d-flex justify-content-between align-items-center'>
                        <p className='total'>Subtotal</p>
                        <p className='total-price'>Rs.1000</p>
                      </div>
                      <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-0 total'>Shipping</p>
                        <p className='mb-0 total-price'>Rs.1000</p>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center border-bottom py-4 '>
                        <h4 className='total'>Total</h4>
                        <h5 className='total-price'>Rs.1000</h5>
                    </div>
                </div>
            </div>
     </Container>
    </>
  )
}

export default Checkout