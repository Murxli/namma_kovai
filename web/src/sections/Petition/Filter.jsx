import React from 'react'
import SearchBar from '@/components/SearchBar'
import PetitionTab from './PetitionTab'

const Filter = () => {
  return (
    <div className='max-container flex flex-col gap-4 p-4'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold '>Issue Addresal</h1>
        <SearchBar />
      </div>
      <PetitionTab />
    </div>
  )
}

export default Filter