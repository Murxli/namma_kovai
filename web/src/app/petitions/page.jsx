'use client'
import React from 'react'
import Navbar from '@/components/NavBar';
import Filter from '@/sections/Petition/Filter';
import useFetch from '@/hook/useFetch';
import AuthProvider from '@/context/AuthContext';

const page = () => {

  const petitionData = useFetch("http://localhost:3001/issues/Road-Transport");
  console.log(petitionData);
  return (
    <AuthProvider>
    <div>
      <Navbar page={'authed'}/>
      <div className='mt-28'>
          <Filter data={petitionData}/>
      </div>
    </div>
    </AuthProvider>
  )
}

export default page