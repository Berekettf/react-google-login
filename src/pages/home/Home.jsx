import React from 'react'
import Encrypt from '../../components/encrypt/Encrypt'
import Decrypt from '../../components/decrypt/Decrypt'
import './home.css'

const Home = () => {
  return (
    <div className='homecontainer'>
      <div className='home'>
      <Encrypt/>
      <Decrypt/>
      </div>
    </div>
  )
}

export default Home
