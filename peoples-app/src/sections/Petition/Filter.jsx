import React, { useEffect, useState } from 'react'
import SearchBar from '@/components/SearchBar'
import PetitionTab from './PetitionTab'

const Filter = ({data, isLoading}) => {
  const [fileteredData, setFilteredData] = useState(data.data);
  const [filter,setFilter] = useState("under review");

  useEffect(() => {
    const tempdata = data.data.filter(item => {console.log(item); return item.issue_status === filter})
    setFilteredData([...tempdata]);
    // console.log(tempdata);
    // console.log(data.data);
  },[filter, data])

  
  return (
    <div className='max-container flex flex-col gap-4 p-4'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold '>Issue Addresal</h1>
        <SearchBar />
      </div>
      <PetitionTab data={fileteredData} isLoading={data.isLoading} setFilter={setFilter}/>
    </div>
  )
}

export default Filter