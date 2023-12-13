import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
const Resetpassword = () => {
  return (
    <>
     <Meta title={ 'Reset Password' } />
     <BreadCrumb title='Reset Password ' />
     <Container class1='login-wrapper home-wrapper-2 py-5'>
         <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-3'>Reset Password</h3>
                    <form action='' className='d-flex flex-column gap-15'>

                        <CustomInput type='password' name='password' placeholder='Password' />
                        <CustomInput type='password' name='confpassword' placeholder='Confirm Password' />

                        <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                            <button className='button border-0'>Ok</button>
                        </div>
                    </form>
                </div>
            </div>
         </div> 
     </Container>
    </>
  )
}

export default Resetpassword