import React from 'react'

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='py-10 px-6 border border-[#1c244c] shadow-custom-inset rounded-[32px]'>
      {children}
    </div>
  )
}

export default Card
