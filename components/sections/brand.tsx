import { COMPANIES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Brand = () => {
  return (
    <section className='flex flex-col items-center h-[220px] max-w-screen-xl mx-auto text-center'>
      <div className='text-neutral-2 text-body-18 mt-[93px] sm:text-body-16'>Trusted by thousands of companies worldwide</div>
      <div className='w-full flex items-center justify-around mt-12 flex-wrap gap-y-1'>
        {COMPANIES.map(({ path, alt, height, width }, key) => (
          <Image key={key} src={path} alt={alt} height={height} width={width} />
        ))}
      </div>
    </section>
  )
}

export default Brand  
