import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import {Helmet} from "react-helmet";
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard'
import Container from '../components/Container';
const OurStore = () => {
  const [grid, setGrid] = useState(4);
 
  return (
    <>
     <Meta title={ 'Our Store' } />
     <BreadCrumb title='Our Store' />
     <Container class1='store-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-3'>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Shop By Categories</h3>
              <div>
                <ul className='ps-0'>
                  <li>Indoor Plants</li>
                  <li>Outoor Plants</li>
                  <li>Flowering Plants</li>
                  <li>Non-flowering Plants</li>
                  <li>Climber Plants</li>
                  <li>Gardening Accesories</li>
                  <li>Gardening Services</li>
                  <li>Plants on Rent</li>
                </ul>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Filter By</h3>
              <h5 className='sub-title'>Availability</h5>
              <div>
              <div className='form-check'>
                <input  
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id=''
                />
                <label className='form-check-label' htmlFor='' >
                  In Stock(1)
                </label>
              </div>
              <div className='form-check'>
                <input  
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id=''
                />
                <label className='form-check-label' htmlFor='' >
                  Out of Stock(0)
                </label>
              </div>
              </div>
              <h5 className='sub-title'>Price</h5>
              <div className='d-flex align-items-center gap-10'>
               <div className="form-floating">
                 <input type="email" 
                  class="form-control" 
                  id="floatingInput" 
                  placeholder="From " />
                 <label htmlFor="floatingInput">From</label>
               </div>
               <div className="form-floating">
                 <input type="email" 
                  class="form-control" 
                  id="floatingInput" 
                  placeholder="To" />
                 <label htmlFor="floatingInput">To</label>
               </div>
              </div>
              <h5 className='sub-title'>Size</h5>
              <div className=''>
               <div className='form-check'>
                <input  
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='color-1'
                />
                <label className='form-check-label' htmlFor='color-1' >
                  S(2)
                </label>
               </div> 
               <div className='form-check'>
                <input  
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='color-2'
                />
                <label className='form-check-label' htmlFor='color-2' >
                  M(2)
                </label>
               </div>
               <div className='form-check'>
                <input  
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='color-3'
                />
                <label className='form-check-label' htmlFor='color-3' >
                  L(2)
                </label>
               </div>
              </div> 
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Product Tags</h3>
              <div>
                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Herb
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Shrub
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Climber
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Creeper
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Bush
                  </span>
                </div>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Shop By Categories</h3>
            </div>
          </div>
          <div className='col-9'>
            <div className='filter-sort-grid mb-4'>
             <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center gap-10'>
                <p className='mb-0 d-block' style={{width:"100px"}}>Sort By:</p>
                <select name='' className='form-control form-select' id=''>
                  <option value='manual'>Featured</option>
                  <option value='best-selling' >Best Selling</option>
                  <option value='title-ascending'>Alphabetically, A-Z</option>
                  <option value='title-descending'>Alphabetically, Z-A</option>
                  <option value='price-ascending'>Price, low to high</option>
                  <option value='price-descending'>Price, high to low</option>
                </select>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <p className='totalproducts mb-0'>20 Products</p>
                <div className='d-flex align-items-center gap-10 grid'>
                   <img onClick={()=>{
                    setGrid(3)
                   }} src='images/gr3.png' className='d-block img-fluid' alt='' />
                   <img onClick={()=>{
                    setGrid(4)
                   }} src='images/gr1.png' className='d-block img-fluid' alt='' />
                   <img onClick={()=>{
                    setGrid(6)
                   }} src='images/gr4.png' className='d-block img-fluid' alt='' />
                    <img onClick={()=>{
                    setGrid(12)
                   }} src='images/gr2.png' className='d-block img-fluid' alt='' />
                </div>
              </div>
             </div>
            </div>
            <div className='products-list pb-5'>
              <div className='d-flex flex-wrap gap-10'>
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />

              </div>
            </div>
          </div>
        </div>
     </Container>
    </>
  )
}

export default OurStore
