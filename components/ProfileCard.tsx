"use client"

import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/navigation'
import { toast } from "react-hot-toast";

const ProfileCard = () => {
  const { user } = useUser()
  const router = useRouter()

  if (!user) {
    router.push('/')
    toast.error("Please Login to access page.")
    return null;  
  }

  return (
    <div className="
        m-10
    ">
        <div className='
            flex
            my-10
            flex-row 
            gap-x-10
            justify-center
            bg-neutral-100
            p-10
        '>
            <div className='text-black'>
                <p className='text-5xl pt-0 font-extrabold pb-5'>
                    ₹0 for 3 months of Premium
                </p>
                <p className='pb-5 font-semibold text-lg'>
                    Enjoy ad-free music listening, offline playback, and more. Cancel anytime.
                </p>
                <Button className='w-[200px] bg-black text-white'>
                    Get 3 month For  ₹0 
                </Button>
                <p className='pt-10 pb-5 font-normal'>
                    Individual plan only. ₹119/month after.
                    Terms and conditions apply. Open only to users who haven&apos;t already tried Premium. Offer ends 12/09/23.
                </p>
            </div>
            <div className='
                w-[400px]
                h-[300px]
                relative
                hidden xl:block
            '>
                <Image
                    className='rounded-lg'
                    src={"/images/spotifyoffer.jpg"}
                    fill
                    alt='Offer 3 month free'
                />
            </div>
        </div>
        <div>
            <h4>Account Information</h4>
            <div className='m-10'>
                <table className=''>
                    <tr className='my-10'>
                        <td className='pr-10'>
                            Email
                        </td>
                        <td>
                            {user?.email}
                        </td>
                    </tr>
                    <tr className='my-10'>
                        <td className='pr-10'>
                            Phone Number
                        </td>
                        <td>
                            {user?.phone || "+91 999999999"} 
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard