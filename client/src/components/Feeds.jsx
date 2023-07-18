import React from 'react'
import {BsCardImage,BsFillCameraVideoFill} from 'react-icons/bs'
import {BiSolidMicrophone} from 'react-icons/bi'
import Post from './Post'
import './Feeds.css'

function Feeds() {
  return (
    <div className='feeds'>
      <div className='feeds--post'>
        <div className="feed--input">
          <textarea name="" id="" cols="30" rows="10" placeholder='whats on your mind'></textarea>
          <div className="feeds--icons">
              <BsCardImage/>
              <BsFillCameraVideoFill/>
              <BiSolidMicrophone/>
          </div>
        </div>
        <button className='button--post'>Post</button>
      </div>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Feeds