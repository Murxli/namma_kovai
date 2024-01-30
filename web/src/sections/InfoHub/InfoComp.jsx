import React, { useEffect, useState } from 'react'
import SearchBar from '@/components/SearchBar'
import useFetch from '@/hook/useFetch';
import InfoCard from './InfoCard';
import { Button } from "@/components/ui/button";
import {useRouter} from "next/navigation"

const InfoComp = () => {
  const router = useRouter()
  const Data = useFetch("http://localhost:3001/infos");
  console.log(Data.data);
  const infos = Data.data;
  return (
    <div className='max-container flex flex-col gap-4 p-4'>
      <div className='flex justify-between items-baseline'>
        <h1 className='text-2xl font-bold '>Infomation Hub</h1>
        <Button className="2-20 bg-emerald-500 hover:bg-emerald-600 mt-4" 
        onClick = { () => {router.push('/infohub/filenew')}}
        >
            New Information
        </Button>
        <SearchBar />
      </div>
      {infos.map((item)=>
        <InfoCard key={item.id} {...item}/>
      )}
      {/* <PetitionTab data={fileteredData} isLoading={data.isLoading} setFilter={setFilter}/> */}
    </div>
  )
}

export default InfoComp