import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full flex  flex-col items-center justify-center lg:p-24 md:p-12 p-6 '>
      <div className='max-w-[680px]'>
        {children}
      </div>
    </div>
  )
}

export default Container