import React from 'react'
import Card from '../card'
import Image from 'next/image'
import * as motion from "motion/react-client"

const CoreFeatures = () => {
  return (
    <section className='max-w-screen-xl mx-auto px-[90px] sm:px-[45px]'>
      <div >

        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, ease: 'easeInOut' }} viewport={{ once: true, amount: 0.3 }} className='space-y-4 text-center mb-[60px]'>
          <h1 className='text-h2 text-neutral-1 sm:text-2xl'>How CloudPeak Works</h1>
          <p className='text-body-16 text-neutral-2 tracking-tighter sm:text-body-14'>Designed to Simplify Your Experience and Maximize the Benefits of CloudPeak&apos;s Innovative Features</p>
        </motion.div>

        <div>

          <div className='flex items-center md:flex-col md:gap-y-8 sm:flex-col sm:gap-y-8 gap-x-1'>

            <Card>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, ease: 'easeInOut' }} viewport={{ once: true, amount: 0.3 }} >
                <div className="relative w-full aspect-video">
                  <Image
                    src="/assets/chart.svg"
                    alt="chart"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </Card>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, ease: 'easeInOut' }} viewport={{ once: true, amount: 0.3 }} className='w-full'>
              <div className='ml-16 space-y-4 sm:ml-0'>
                <h2 className='text-h2-40 text-neutral-1'>Effortless Onboarding Process Fast.</h2>
                <p className='text-body-16 text-neutral-2'>Discover Our Streamlined and User-Friendly Onboarding Process, Designed to Get You Up and Running Quickly and Efficiently.</p>
                <button className="px-8 py-4 bg-primary hover:bg-[#0045DD] text-white font-medium rounded-lg shadow-lg transition-all group flex items-center gap-2">
                  Learn More
                  <Image
                    src="/assets/arrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default CoreFeatures
