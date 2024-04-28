import React from 'react'
import LoadingGif from '../images/mern-blog-assets-main/Bean Eater@1x-1.0s-200px-200px.gif'

const Loader = () => {
  return (
    <div className='loader'>
        <div className="loader__image">
            <img src={LoadingGif} alt="" />
        </div>
    </div>
  )
}

export default Loader
