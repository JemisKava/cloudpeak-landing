import React from 'react'
import * as motion from 'motion/react-client'

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut' }} viewport={{ once: true }} className='py-10 px-6 border border-[#1c244c] shadow-custom-inset rounded-[32px] w-full'>
      {children}
    </motion.div>
  )
}

export default Card
