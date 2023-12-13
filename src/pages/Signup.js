import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
const Signup = () => {
  return (
    <>
     <Meta title={ 'Sign Up' } />
     <BreadCrumb title='Sign Up ' /> 
     <Container class1='login-wrapper home-wrapper-2 py-5'>
         <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-4'>Sign Up</h3>
                    <form action='' className='d-flex flex-column gap-15'>
                        <CustomInput type='name' name='Name' placeholder='Name' />
                        <CustomInput type='tel' name='mobile' placeholder='Mobile Number' />
                        <CustomInput type='email' name='email' placeholder='Email' />
                        <CustomInput  type='password' name='password' placeholder='Password' />
                        <div className='mt-2 d-flex flex-column justify-content-center align-items-center gap-15'>
                            <button className='button border-0' type='submit'>Sign Up</button>
                            <Link to='/login' className=''>Already a customer?</Link>
                        </div>
                    </form>
                </div>
            </div>
         </div>
     </Container>
    </>
  )
}

export default Signup