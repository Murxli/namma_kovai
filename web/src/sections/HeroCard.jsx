import React from 'react'
import Image from 'next/image'

export const pages = [
    {name: "Petition", link:"/petitions", image:"/comp.avif"},
    {name: "InfoHub", link:"/infohub", image:"/infohub.avif"},
    {name: "Community", link:"/community", image:"/comm.avif"},
    {name: "Map", link:"/maop", image:"/map.avif"},

]

const HeroCards = () => {
  return (
    <section className='w-full grid grid-cols-2 lg:grid-cols-4 max-container'>
        {pages.map(item =>  
            <a href={item.link} key={item.name} className='my-12'>
                <div className='rounded p-4 bg-teal-400/60 w-fit flex flex-col justify-center m-auto h-full hover:scale-125 transition-all'>
                    <Image src={item.image} alt={item.name} width={200} height={200} className='object-cover'/>
                    <p className='text-center inline-block pt-2'>{item.name}</p>
                </div>
            </a>
        )}

    </section>
  )
}

export default HeroCards