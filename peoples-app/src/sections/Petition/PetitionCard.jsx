import React from 'react'
import Image from 'next/image';

import { Button } from "@/components/ui/button"
import { MdOutlinePending } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import { MdOutlineDownloadDone } from "react-icons/md";
import Link from 'next/link';


const PetitionCard = ({petitiondetail}) => {
  const {_id, issue_status : status} = petitiondetail;
  return (
    <Link className='' href={`/petitions/${_id}`} target='blank'>
      <div className='w-full  flex bg-slate-100 hover:bg-slate-200 rounded p-4 px-20 my-2 justify-between hover:cursor-pointer'>
          {/* <img src="comm.avif" alt="sample img" cl/> */}
          {/* <Image src={issue.images_list[0].imgURL} width={150} height={100} alt='sample img' className='rounded'/> */}
          <div className='flex flex-col'>
              <p>Ref: {petitiondetail._id}</p>
              <p>{petitiondetail.address}</p>
          </div>
          <Button 
            variant="destructive" 
            size="lg"
            className={` ${status=== "under review" ? "bg-red-600/80 hover:bg-red-600/80" : status === "work in progress" ? "bg-sky-600/80 hover:bg-sky-600/80" : "bg-green-600/80 hover:bg-sky-600/80"}`}>
              {status === "under review" ? <p className='flex gap-2 items-center'><MdOutlinePending />{status}</p> :
                status === "work in progress" ? <p className='flex gap-2 items-center'><MdConstruction/>{status}</p> :
                <p className='flex gap-2 items-center'><MdOutlineDownloadDone />{status}</p>
              }
          </Button>
      </div>
    </Link>
  )
}

export default PetitionCard