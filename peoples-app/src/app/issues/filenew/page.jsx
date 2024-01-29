'use client'
import React, { useRef, useState } from 'react'
import Navbar from '@/components/NavBar'
import PetitionForm from '@/sections/Petition/PetitionForm'

const page = () => {

    const formRef = useRef();
    const [form, setForm] = useState({
        userid:"",
        name: "",
        contact: "",
        description: "",
        department:"",
        issue_type:"",
        address:"",
        location:"",
        timestamp:""
      });
    
      const [loading, setLoading] = useState(false);
    
      const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
    
        setForm({
          ...form,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {}

  return (
    <div className='mt-28'>
        <section className='max-w-3xl mx-auto rounded-xl bg-slate-100 p-8 m-8'>
            <h2 className='text-2xl font-medium text-center'>File a New Issue</h2>
            <main>
                <PetitionForm formRef={formRef} handleChange={handleChange} handleSubmit={handleSubmit} form={form}/>
            </main>
        </section>
    </div>
  )
}

export default page