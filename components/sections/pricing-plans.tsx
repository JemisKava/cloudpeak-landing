import React from 'react'
import * as motion from "motion/react-client"
import { PLANS } from '@/constants'
import { PricingPlanCard } from '../pricing-plans-cards'
import Card from '../card'

const PricingAndPlans = () => {
  return (
    <section className=' max-w-screen-xl mx-auto md:px-[90px] sm:px-[25px]'>
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, ease: 'easeInOut' }} viewport={{ once: true, amount: 0.3 }} className='space-y-4 text-center mt-[120px] mb-[40px]'>
        <h1 className='text-h2 text-neutral-1 sm:text-2xl'>How CloudPeak Works</h1>
        <p className='text-body-16 text-neutral-2 tracking-tighter sm:text-body-14'>Designed to Simplify Your Experience and Maximize the Benefits of CloudPeak&apos;s Innovative Features</p>
      </motion.div>

      <div>
        <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px]'>
          {
            PLANS.map((plan, key) => (
              <Card key={key} className='p-8 flex flex-col gap-10'>
                <PricingPlanCard.Header title={plan.title} description={plan.description} popular={plan.popular} />
                <PricingPlanCard.Price amount={plan.price} frequency={plan.frequency} />
                <PricingPlanCard.FeatureList features={plan.features} />
                <PricingPlanCard.Button text={plan.buttonText} />
              </Card>

            ))
          }
        </div>
      </div>
    </section>
  )
}

export default PricingAndPlans
