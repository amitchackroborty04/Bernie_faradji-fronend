import React from 'react'
import Banner from './_components/Banner'
import QualityProcess from './_components/QualityProcess'

const page = () => {
  return (
    <div>
      <Banner 
       heading="About Us"
        description="At Bubblecar, we believe everyone deserves a fair chance to win. Our platform is built with trusted systems, real-time updates, and user-focused design to ensure every raffle feels exciting, engaging, and easy to participate in.
Join our growing community and experience the thrill of winning with [Your Raffle Brand]. Your next big win could be just one ticket away."
        imageSrc="/about.png"
      />
      <QualityProcess/>
        
    </div>
  )
}

export default page
