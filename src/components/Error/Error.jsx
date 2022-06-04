import React, { Children } from 'react'

const Error = ({children}) => {
  return (
    <div className='bg-red-200 text-center text-red-500 p-1 mx-5 rounded-md '>
        <p className=''>{children}</p>
    </div>
  )
}

export default Error