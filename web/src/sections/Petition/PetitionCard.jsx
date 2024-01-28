import React from 'react'
import Image from 'next/image';

import { Button } from "@/components/ui/button"
import { MdOutlinePending } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import { MdOutlineDownloadDone } from "react-icons/md";

const issue =  {
    _id: "65b55d99896e2d43dad85a8d",
    userId: "65b55d99896e2d43dad85a89",
    issue_type: "pothole",
    department: "electricity",
    name: "Alice Williams",
    phone_no: "6543210987",
    address: "321 North Road, Villagetown, Country",
    area: "Rural",
    description: "Small pothole on the village road",
    images_list: [
      {
        imgURL: "/comm.avif",
        _id: "65b55d99896e2d43dad85a97"
      }
    ],
    issue_status: "under review",
    _v: "23"
}



const PetitionCard = () => {
  return (
    <div className='w-full flex bg-slate-200 rounded p-4 px-20 my-2 justify-between hover:cursor-pointer'>
        {/* <img src="comm.avif" alt="sample img" cl/> */}
        {/* <Image src={issue.images_list[0].imgURL} width={150} height={100} alt='sample img' className='rounded'/> */}
        <div className='flex flex-col'>
            <p>Ref: {issue._id}</p>
            <p>{issue.address}</p>
        </div>
        <Button 
          variant="destructive" 
          className="bg-red-600/80 hover:bg-red-600/80">
            {issue.issue_status === "under review" ? <p className='flex gap-2 items-center'><MdOutlinePending />{issue.issue_status}</p> :
              issue.issue_status === "working" ? <p className='flex gap-2 items-center'><MdConstruction/>{issue.issue_status}</p> :
              <p className='flex gap-2 items-center'><MdOutlineDownloadDone />{issue.issue_status}</p>
            }
        </Button>
    </div>
  )
}

export default PetitionCard