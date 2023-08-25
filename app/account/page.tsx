import React from 'react'
import Header from "@/components/Header"
import ProfileCard from '@/components/ProfileCard'


const Account = () => {
  return (
    <>
    <Header>
        <h1 className='text-2xl font-bold'>Account Settings</h1>
        <ProfileCard />
    </Header>
    </>
  )
}

export default Account