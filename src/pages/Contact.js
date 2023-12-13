import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import{ BiPhoneCall, BiInfoCircle } from 'react-icons/bi';
import Container from '../components/Container';
const Contact = () => {
  return (
    <>
     <Meta title={ 'Contact Us' } />
     <BreadCrumb title='Contact Us' />
     <Container class1='contact-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d636.7613963477928!2d78.60482832734057!3d25.46945781330975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1699172518998!5m2!1sen!2sin" 
            width="600"
            height="450" 
            className='border-0 w-100' 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title'>Contact</h3>
                <form className='d-flex flex-column gap-15'>
                  <div>
                   <input type='text' className='form-control' placeholder='Name' />
                  </div>
                  <div>
                   <input type='email' className='form-control' placeholder='Email' />
                  </div>
                  <div>
                   <input type='tel' className='form-control' placeholder='Mobile Number' />
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
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Get in touch with us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex align-items-center gap-15'>
                      <AiOutlineHome className='fs-5' />
                      <address className='mb-0'>Hno : 1242 Pichhor,Jhansi, Uttar Pradesh</address>
                    </li>
                    <li className='mb-3 d-flex align-items-center gap-15'>
                      <BiPhoneCall className='fs-5' />
                      <a href='tel:+91 7503172761'>+91 7503172761</a>
                    </li>
                    <li className='mb-3 d-flex align-items-center gap-15'>
                      <AiOutlineMail className='fs-5' />
                      <a href='mailto:infohappypot@gmail.com'>infohappypot@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex align-items-center gap-15'>
                      <BiInfoCircle className='fs-5' />
                      <p className='mb-0'>Monday - Sunday 8 AM - 6 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
     </Container>
    </>
  )
}

export default Contact