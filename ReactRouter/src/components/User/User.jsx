import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams();
  return (
    <div className='max-w-screen-xl mx-auto h-screen'>
        <div className='bg-gray-500 flex justify-center h-20 items-center'>
            <h1 className='text-4xl text-white text-semibold'>User : {id}</h1>
        </div>
    </div>
  )
}

export default User