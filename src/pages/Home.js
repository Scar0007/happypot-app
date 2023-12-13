import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import { BlogCard } from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';
const Home = () => {
  return (
    <>
    <Container class1='home-wrapper-1 py-5'>
      <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative '>
              <img 
               src='images/Cactus.jpg'
               className='img-fluid rounded-3'
               alt='Cactus'
              />
              <div className='main-banner-content position-absolute'>
                <h4>Example Text</h4>
                <h5>Something</h5>
                <p>More Text</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
            <div className='small-banner position-relative'>
              <img 
               src='images/Aelovera.jpg'
               className='img-fluid rounded-3'
               alt='Cactus'
              />
              <div className='small-banner-content position-absolute'>
                <h4>Example Text</h4>
                <h5>Something</h5>
                <p>More Text</p>
              </div>
            </div>
            <div className='small-banner position-relative'>
              <img 
               src='images/Aelovera.jpg'
               className='img-fluid rounded-3'
               alt='Cactus'
              />
              <div className='small-banner-content position-absolute'>
                <h4>Example Text</h4>
                <h5>Something</h5>
                <p>More Text</p>
              </div>
            </div>
            <div className='small-banner position-relative'>
              <img 
               src='images/Aelovera.jpg'
               className='img-fluid rounded-3'
               alt='Cactus'
              />
              <div className='small-banner-content position-absolute'>
                <h4>Example Text</h4>
                <h5>Something</h5>
                <p>More Text</p>
              </div>
            </div>
            <div className='small-banner position-relative'>
              <img 
               src='images/Aelovera.jpg'
               className='img-fluid rounded-3'
               alt='Cactus'
              />
              <div className='small-banner-content position-absolute'>
                <h4>Example Text</h4>
                <h5>Something</h5>
                <p>More Text</p>
              </div>
            </div>
            <div className='small-banner position-relative'>
              <img 
               src='images/Aelovera.jpg'
               className='img-fluid rounded-3'
               alt='Cactus'
              />
              <div className='small-banner-content position-absolute'>
                <h4>Example Text</h4>
                <h5>Something</h5>
                <p>More Text</p>
              </div>
            </div>
            <div className='small-banner position-relative'>
              <img 
               src='images/Aelovera.jpg'
               className='img-fluid rounded-3'
               alt='Cactus'
              />
              <div className='small-banner-content position-absolute'>
                <h4>Example Text</h4>
                <h5>Something</h5>
                <p>More Text</p>
              </div>
            </div>
            <div className='small-banner position-relative'>
              <img 
               src='images/Aelovera.jpg'
               className='img-fluid rounded-3'
               alt='Cactus'
              />
              <div className='small-banner-content position-absolute'>
                <h4>Example Text</h4>
                <h5>Something</h5>
                <p>More Text</p>
              </div>
            </div>
            <div className='small-banner position-relative'>
              <img 
               src='images/Aelovera.jpg'
               className='img-fluid rounded-3'
               alt='Cactus'
              />
              <div className='small-banner-content position-absolute'>
                <h4>Example Text</h4>
                <h5>Something</h5>
                <p>More Text</p>
              </div>
            </div>
            </div>
          </div>
      </div>
    </Container>
    <Container class1='home-wrapper-2 py-5'>
      <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              {
                services?.map((i,j) => {
                  return (
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img src={i.image} alt='services' className='image-width' />
                      <div>
                        <h6>{ i.title }</h6>
                        <p className='mb-0'>{ i.tagline }</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
      </div>
    </Container>
     <Container class1='home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
              <div className='d-flex align-items-center'>
                 <div>
                  <h6>Indoor Plants</h6>
                  <p>10 Items</p>
                 </div>
                 <img src='images/palm.jpg' alt='plant' />
              </div>
              <div className='d-flex align-items-center'>
                 <div>
                  <h6>Outdoor Plants</h6>
                  <p>10 Items</p>
                 </div>
                 <img src='images/palm.jpg' alt='plant' />
              </div>
              <div className='d-flex align-items-center'>
                 <div>
                  <h6>Manures</h6>
                  <p>10 Items</p>
                 </div>
                 <img src='images/palm.jpg' alt='plant' />
              </div>
              <div className='d-flex align-items-center'>
                 <div>
                  <h6>Garden Supplies</h6>
                  <p>10 Items</p>
                 </div>
                 <img src='images/palm.jpg' alt='plant' />
              </div>
              <div className='d-flex align-items-center'>
                 <div>
                  <h6>Indoor Plants</h6>
                  <p>10 Items</p>
                 </div>
                 <img src='images/palm.jpg' alt='plant' />
              </div>
              <div className='d-flex align-items-center'>
                 <div>
                  <h6>Outdoor Plants</h6>
                  <p>10 Items</p>
                 </div>
                 <img src='images/palm.jpg' alt='plant' />
              </div>
              <div className='d-flex align-items-center'>
                 <div>
                  <h6>Manures</h6>
                  <p>10 Items</p>
                 </div>
                 <img src='images/palm.jpg' alt='plant' />
              </div>
              <div className='d-flex align-items-center'>
                 <div>
                  <h6>Gardening</h6>
                  <p>10 Items</p>
                 </div>
                 <img src='images/palm.jpg' alt='plant' />
              </div>
              
            </div>
          </div>
        </div>
     </Container>
     <Container class1='featured-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
     </Container>
     <Container class1='famous-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/palm.jpg' className='img-fluid' alt='plant' />
              <div className='famous-content position-absolute'>
              <h5 className='text-dark'>Sample Text</h5>
              <h6 className='text-dark'>Green Home</h6>
              <p className='text-dark'>Rs300</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/cactus.jpg' className='img-fluid' alt='plant' />
              <div className='famous-content position-absolute'>
              <h5>Sample Text</h5>
              <h6>Green Home</h6>
              <p>Rs300</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/palm.jpg' className='img-fluid' alt='plant' />
              <div className='famous-content position-absolute'>
              <h5 className='text-dark'>Sample Text</h5>
              <h6 className='text-dark'>Green Home</h6>
              <p className='text-dark'>Rs300</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/cactus.jpg' className='img-fluid' alt='plant' />
              <div className='famous-content position-absolute'>
              <h5>Sample Text</h5>
              <h6>Green Home</h6>
              <p>Rs300</p>
              </div>
            </div>
          </div>
          
        </div>
     </Container>
     <Container class1='special-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Special Products</h3>
          </div>
        </div>
        <div className='row'>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />

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
     <Container class1='marque-wrapper py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee  className='d-flex'>
                <div>
                I can be a React component, multiple React components, or just some text.
                </div>
              </Marquee>
            </div>
          </div>
        </div>
     </Container>
     <Container class1='blog-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Latest Blogs</h3>
          </div>
         <div className='row'>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
         </div>
        </div>
     </Container>    
    </>
  )
};

export default Home;