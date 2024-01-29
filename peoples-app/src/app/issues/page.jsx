'use client'
import React,{useEffect} from 'react'
import Navbar from '@/components/NavBar';
import useFetch from '@/hook/useFetch';
import AuthProvider from '@/context/AuthContext';
import IssueHistory from '../../sections/ClientIssues/IssueHistory';

const page = () => {
  return (
    <AuthProvider>
      <div >
        <Navbar page={'authed'}/>
        <div className=' mt-28 max-w-4xl'>
            <main className='flex'>
              <div></div>
              <div className=''>
                <IssueHistory />
              </div>
            </main>
        </div>
      </div>
    </AuthProvider>
  )
}

export default page