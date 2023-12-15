import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';
import { FaHeartCirclePlus } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import cactus from '../images/Cactus.jpg'
import Container from '../components/Container';
const SingleProduct = () => {
  const props = {
    width: 600, height: 500, zoomWidth: 600,
    img: "https://eskipaper.com/images/flowers-plants-nature-1.jpg"
  };
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  const [orderedProduct, setorderedProduct] = useState(true)
  return (
    <>
     <Meta title={ 'Product Name' } />
     <BreadCrumb title='Product Name' />
     <Container class1='single-product-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-6'>
                  <div className='main-product-image'>
                    <div><ReactImageZoom {...props} /></div>
                  </div>
                  <div className='other-product-images d-flex flex-wrap gap-15'>
                    <div><img src='https://eskipaper.com/images/flowers-plants-nature-1.jpg' className='img-fluid' /></div>
                    <div><img src='https://eskipaper.com/images/flowers-plants-nature-1.jpg' className='img-fluid' /></div>
                    <div><img src='https://eskipaper.com/images/flowers-plants-nature-1.jpg' className='img-fluid' /></div>
                    <div><img src='https://eskipaper.com/images/flowers-plants-nature-1.jpg' className='img-fluid' /></div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='main-product-details'>
                    <div className='border-bottom'>
                      <h3 className='title'>Aelovera</h3>
                    </div>
                    <div className='border-bottom py-3'>
                      <p className='price'>250 Rs</p>
                      <div className='d-flex align-items-center gap-10'>
                              <ReactStars
                                count={5}
                                size={24}
                                value='4'
                                edit={false}
                                activeColor="#ffd700"
                              />
                              <p className='mb-0 t-reviews'>( 5 reviews )</p>
                      </div>
                      <a className='review-btn'  href='#review'>Write a Review</a>
                    </div>
                    <div className='py-3'>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Type :</h3> <p className='product-data'>Medicinal</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Placement :</h3> <p className='product-data'>Outdoor / Indoor</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Category :</h3> <p className='product-data'>Plant</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Tags :</h3> <p className='product-data'>Medicinal</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Availability :</h3> <p className='product-data'>In Stock</p>
                      </div>
                      <div className='d-flex gap-10 flex-column mt-2 mb-4'>
                        <h3 className='product-heading'>Size :</h3> 
                        <div className='d-flex flex-wrap gap-15'>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>
                            Baby
                          </span>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>
                            Small
                          </span>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>
                            Large
                          </span>
                        </div>
                      </div>
                      <div className='d-flex gap-15 align-items-center flex-row mt-2 mb-3'>
                        <h3 className='product-heading'>Quantity :</h3> 
                        <div className=''>
                          <input 
                            type='number'
                            min={1}
                            max={10}
                            className='form-control'
                            style={{"width": "70px"}}
                          />
                        </div>
                        <div className='d-flex align-items-center gap-30 ms-5'>
                            <button className='button border-0' type='submit'>Add to Cart</button>
                            <button className='button signup '>Buy Now</button>
                        </div>
                      </div>
                      <div className='d-flex align-items-center gap-15'>
                        <div>
                          <a href='# '><FaHeartCirclePlus className='fs-5 me-2' /> Add to Wishlist</a>
                        </div>
                      </div>
                      <div className='d-flex gap-10 flex-column my-3'>
                        <h3 className='product-heading'>Shipping & Returns :</h3> 
                        <p className='product-data'>
                          <b>Shipping Details</b>
                        </p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-3'>
                        <h3 className='product-heading'>Product Link :</h3> 
                        <p className='product-data'>
                          <a href='javascript: void(0);' 
                           onClick={()=>{copyToClipboard("https://eskipaper.com/images/flowers-plants-nature-1.jpg")}}>
                            Copy Product Link
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
     </Container>
     <Container class1='description-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                <h4>Description</h4>
                    <div className='bg-white p-3'>
                      <p >
                          Some description goes here
                      </p>
                    </div>  
                </div>
            </div>
     </Container>
     <Container class1='reviews-wrapper home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                  <h3 id='review'>Reviews</h3>
                  <div className='review-inner-wrapper'>
                    <div className='review-head d-flex justify-content-between align-items-end'>
                        <div>
                            <h4 className='mb-2'>Customer Reviews</h4>
                            <div className='d-flex align-items-center gap-10'>
                              <ReactStars
                                count={5}
                                size={24}
                                value='4'
                                edit={false}
                                activeColor="#ffd700"
                              />
                              <p className='mb-0'>Based on 5 reviews</p>
                            </div>
                        </div>
                        {orderedProduct && (
                         <div>
                             <a className='text-dark text-decoration-underline' href='#review'>
                                Write a review
                             </a>
                         </div>
                        )}
                    </div>
                    <div className='review-form py-4'>
                      <h4>Write a Review</h4>
                     <form className='d-flex flex-column gap-15'>
                       <div>
                        <ReactStars
                                count={5}
                                size={24}
                                value=''
                                edit={true}
                                activeColor="#ffd700"
                              />
                       </div>
                       <div>
                         <textarea
                     className='w-100 form-control'
                     cols='30'
                     rows='4'
                     placeholder='Comments'
                    >
                         </textarea>
                       </div>
                       <div className='d-flex justify-content-end'>
                         <button className='button border-0'>Submit Review</button>
                       </div>
                     </form>
                    </div>
                    <div className='reviews mt-4'>
                      <div className='review'>
                         <div className='d-flex align-items-center gap-10'>
                          <h6 className='mb-0'>Some Username</h6>
                          <ReactStars
                                count={5}
                                size={24}
                                value='4'
                                edit={false}
                                activeColor="#ffd700"
                              />
                         </div>
                          <p className='mt-3'>
                            review content goes here
                          </p>
                      </div>
                      <div className='review'>
                         <div className='d-flex align-items-center gap-10'>
                          <h6 className='mb-0'>Some Username</h6>
                          <ReactStars
                                count={5}
                                size={24}
                                value='4'
                                edit={false}
                                activeColor="#ffd700"
                              />
                         </div>
                          <p className='mt-3'>
                            review content goes here
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
     </Container>
     <Container class1='popular-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
          <div className='row'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          </div>
        </div>
     </Container>
    </>
  )
}

export default SingleProduct