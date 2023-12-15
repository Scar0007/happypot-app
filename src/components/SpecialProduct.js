import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import cactus from '../images/Cactus.jpg'
const SpecialProduct = () => {
  return (
    <div className='col-6 mb-3'>
        <div className='special-product-card'>
            <div className='d-flex justify-justify-content-between gap-15'>
                <div>
                    <img src={cactus} className='img-fluid' alt='cactus' />
                </div>
                <div className='special-product-content'>
                    <h5 className='brand'>Example</h5>
                    <h6 className='title'>Combo pack </h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className='price'>
                        <span className='red-p'>Rs250</span> &nbsp; <strike>Rs400</strike>
                    </p>
                    <div className='discount-till d-flex align-items-center gap-10'>
                        <p className='mb-0'>
                            <b>5</b> days
                        </p>
                        <div className='d-flex gap-10 alidn-items-center'>
                            <span className='badge rounded-circle p-3 bg-danger'>1</span>
                            <span className='badge rounded-circle p-3 bg-danger'>1</span>
                            <span className='badge rounded-circle p-3 bg-danger'>1</span>
                        </div>
                    </div>
                    <div className='prod-count my-3'>
                        <p>Products: 5</p>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <Link className='button'>Add to Bag</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct