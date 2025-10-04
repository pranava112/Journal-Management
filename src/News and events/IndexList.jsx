import React from 'react'

// ✅ make sure you import the CSS

const IndexList = () => {
  return (
    <>
      <h1 className='sub_title text-center'>Index List</h1>

      <section className='IndexList'>
        
        <div className='issn_block'>
          <img src="/issn.jpg" alt="issn" id='img' className='issn_img' />
        </div>

        <div className='issn_block'>
          <img src="/img1.jpg" alt="img" className='issn_img' />
        </div>

        <div className='issn_block'>
          <img src="/img2.jpg" alt="img" className='issn_img' />
        </div>

        <div className='issn_block'>
          <img src="/img3.jpg" alt="img" className='issn_img' />
        </div>

        <div className='issn_block'>
          <img src="/img4.jpg" alt="img" className='issn_img' />
        </div>

        <div className='issn_block'>
          <img src="/img5.jpg" alt="img" className='issn_img' />
        </div>
      </section>
    </>
  )
}

export default IndexList
