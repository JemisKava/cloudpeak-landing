import React from 'react'
import * as motion from "motion/react-client"
import { CORE_FEATURE_CARDS } from '@/constants'
import CoreFeature from '../core-feature'

const CoreFeatures = () => {
  return (
    <section className='max-w-screen-xl mx-auto px-[90px] sm:px-[25px]'>
      <div >

        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, ease: 'easeInOut' }} viewport={{ once: true, amount: 0.3 }} className='space-y-4 text-center mb-[60px]'>
          <h1 className='text-h2 text-neutral-1 sm:text-2xl'>How CloudPeak Works</h1>
          <p className='text-body-16 text-neutral-2 tracking-tighter sm:text-body-14'>Designed to Simplify Your Experience and Maximize the Benefits of CloudPeak&apos;s Innovative Features</p>
        </motion.div>

        <div className='flex flex-col gap-16'>

          {
            CORE_FEATURE_CARDS.map((data, key) => (
              <CoreFeature key={key} features={data} index={key} />
            ))}

        </div>

      </div>
    </section>
  )
}

export default CoreFeatures
