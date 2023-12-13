import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Container from '../components/Container';
const Privacypolicy = () => {
  return (
    <>
     <Meta title={ 'Privacy Policy' } />
     <BreadCrumb title='Privacy Policy' />
     <Container class1='policy-wrapper py-5 homw-wrpper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='policy'>
                    <h3>section-heading</h3>
                    <p>Some policy</p>
                </div>
            </div>
        </div>
     </Container>
    </>
  )
}

export default Privacypolicy