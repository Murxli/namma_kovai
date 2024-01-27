'use client'
import { useState } from "react"

export const PetitionTypes = [
    {dept: "Highway", types:["Pathole, Traffic Light, Others"]}
]


const PetitionTab = () => {
  const [activeTab, setActiveTab] = useState("01")
  return (
    <div className='max-container'>
        {PetitionTypes[0].types.map(item => 
            <div></div>
        )}
    </div>
  )
}

export default PetitionTab