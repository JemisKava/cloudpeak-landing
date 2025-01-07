import { FEATURE_CARDS } from '@/constants'
import React from 'react'
import { FeatureCard } from '../feature-card'

const Features = () => {
  return (
    <section className='pt-[130px] px-[30px] mt-8'>
      <div className='max-w-screen-xl mx-auto h-screen text-center'>
        <div className='flex flex-col gap-y-4 mx-60 sm:mx-0 md:mx-0 items-center'>
          <h1 className='text-h2 text-neutral-1'>
            Get Connected Fast
          </h1>
          <p className='text-body-16 text-neutral-2'>
            Explore Our Inspirational Journey, Values, and Commitment to Providing Exceptional SaaS Solutions That Empower Your Business
          </p>
        </div>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-1 sm:grid-cols-1 p-6 mt-[60px] ">
          {FEATURE_CARDS.map((cardProps, index) => (
            <FeatureCard key={index} {...cardProps} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features
