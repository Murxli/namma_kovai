'use client'
import React from 'react'
import Navbar from '@/components/NavBar';
import AuthProvider from '@/context/AuthContext';
import InfoComp from '@/sections/InfoHub/InfoComp';

const page = () => {

  return (
    <AuthProvider>
    <div>
      <Navbar page={'authed'}/>
      <div className='mt-28'>
          <InfoComp/>
      </div>
    </div>
    </AuthProvider>
  )
}

export default page