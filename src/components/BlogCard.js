import React from 'react'
import { Link } from 'react-router-dom'

export const BlogCard = () => {
  return (
      <div className='blog-card'>
        <div className='card-image'>
            <img src='images/Cactus.jpg' className='img-fluid w-100' alt='blog' />
        </div>
        <div className='blog-content'>
            <p className='date'>Aug 27, 2023</p>
            <h5 className='title'>Something goes here</h5>
            <p className='desc'>
               Example text
            </p>
            <Link to="/blog/:id" className='button'>
                Read More
            </Link>
        </div>
      </div>
    
  )
}
