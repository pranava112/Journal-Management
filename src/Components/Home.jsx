import './Home.css'

import React from 'react'

const Home = () => {
  return (
    <>
    <section className='home'>
      <div className='container'>
        <img src="/pic 1.jpg" alt="img" />
        <img src="/pic 2.jpg" alt="img" />
        <img src="/pic 3.jpg" alt="img" />
        
        <section className='data'>
          <div className='author'>
        <h2>Author Guidelines</h2>
        <p>The <b>International journal Management Science and Business Conclave</b> welcomes the submission of manuscripts that meet the general criteria of significance and scientific excellence.</p>
        <p>Papers must be submitted with the understanding that they have not been published elsewhere (except in )</p>
      </div>

      <div  className='indexes'>
        <h2>Indexed In</h2>
        <ul type='none'>
          <li>Academic Journals Database.</li>
          <li>Academic Keys.</li>
          <li>Academic OneFile - Agriculture Collection.</li>
        </ul>
      </div>
        </section>

      </div>
      
      
    </section>
    </>
  )
}

export default Home