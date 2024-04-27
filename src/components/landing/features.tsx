"use client"

import { useAuth } from '@clerk/nextjs'
import { Check, CheckCheck, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Features = (props: Props) => {
  const { isSignedIn } = useAuth();
  return (
    <div className="w-full   paddingX">
      <div className="max-w-screen-xl my-20 mx-auto flex flex-col md:flex-row gap-10 justify-between items-center">
      <div className="flex flex-col gap-6 flex-1">
        <h2 className='text-2xl md:text-[40px] leading-[48px] tracking-wider font-semibold text-gray-100'>Manage your social media <span className='text-[#F56565] italic'> at scale.</span></h2>
        <p className='para'>Struggling to juggle multiple social media platforms and see real results? We get it! Our all-in-one platform takes the complexity out of social media management.  </p>
        <div className='flex gap-3 items-base'>
            <div className='flex items-center gap-1'>
                <span><Check  className='mb-1' color='#F56565' size={19} /></span>
                <span className='text-gray-100 text-[12px] tracking-wide font-light'>Start Free Trial</span>
            </div>
            <div className='flex items-center gap-1'>
                <span><Check  className='mb-1' color='#F56565' size={19} /></span>
                <span className='text-gray-100 text-[12px] tracking-wide font-light'>No  Card Required</span>
            </div>
            <div className='flex items-center gap-1'>
                <span><Check  className='mb-1' color='#F56565' size={19} /></span>
                <span className='text-gray-100 text-[12px] tracking-wide font-light'>Cancel anytime</span>
            </div>
        </div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
        <button className="border w-max backdrop-blur-sm border-gray-500 border-opacity-50 py-3 px-4 md:py-2 md:px-6 flex justify-center items-center gap-1 hover:gap-2 transition-all ease-in-out duration-200 rounded-full font-semibold tracking-wide hover:border-opacity-70 hover:text-gray-200 "><span>Get Started</span> <span><ChevronRight color="#F56565" size={20} strokeWidth={3} className=""/></span></button>
        </Link>
      </div>
      <div className='flex-1 flex justify-center items-center rounded-lg overflow-hidden'>
        <Image src={'/assests/smd.jpg'} width={600} height={600} alt='social' className='rounded-lg'/>

      </div>
       
      </div>
    </div>
  )
}

export default Features