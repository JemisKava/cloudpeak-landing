import { TestimonialCardProps } from '@/types'
import React from 'react'
import Card from './card'
import Image from 'next/image'

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialCardProps }) => {
  return (
    <Card className='pb-0 flex flex-col justify-between'>
      <p className='mx-1 mb-10 text-body-16 mt-[13px] leading-[28.8px]'>
        {testimonial.quote}
      </p>
      <div className='flex items-center justify-between px-6 py-7 border-t border-gray-600'>
        <div>
          <p className='text-body-16 text-neutral-1'>{testimonial.author.name}</p>
          <p className='text-body-14 text-neutral-2'>{testimonial.author.designation}</p>
        </div>
        <Image src={testimonial.author.avatarUrl} alt='user' height={60} width={60} className='rounded-2xl' />
      </div>
    </Card>
  )
}

export default TestimonialCard
