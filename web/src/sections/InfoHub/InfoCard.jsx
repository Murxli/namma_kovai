import { Button } from "@/components/ui/button"
import { MdOutlinePending } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import { MdOutlineDownloadDone } from "react-icons/md";
import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const InfoCard = ({info_title,info_dept,description,updatedAt}) => {
    const dateObject = new Date(updatedAt);
    const formattedDateString = dateObject.toLocaleDateString('en-GB');
    console.log(formattedDateString);
    return(
        <Accordion type="single" collapsible>
        {/* <p>{info_title}</p>
        <p>{info_dept}</p>
        <p>{description}</p> */}
        <AccordionItem value="item-1">

        <div className='w-full flex bg-slate-100 hover:bg-slate-200 rounded p-1 px-20  justify-between items-center hover:cursor-pointer'>
          <AccordionTrigger>
          <div className='flex flex-col'>
              <p className="font-bold pb-2">{info_title}</p>
              <p className="text-md">{formattedDateString}</p>
          </div>
          </AccordionTrigger>
             <AccordionContent className="bg-white rounded-lg p-2">
                <p className="text-s">{description}</p>
            </AccordionContent>
          <Button 
            variant="destructive" 
            size="lg"
            className="bg-green-600/80">
                <p className='flex gap-2 items-center'>{info_dept}</p>
          </Button>
        </div>
        </AccordionItem>
        </Accordion>
    )
}

export default InfoCard;