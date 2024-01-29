import React from 'react'
import { useRouter } from 'next/navigation';

import { useRef, useState,useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

const LoginForm = () => {
const formRef = useRef();
  const router = useRouter();
  const authData = useAuth();


  const [form, setForm] = useState({
    email: "",
    password: "",
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

  useEffect(()=>{
    console.log(authData.currentUser);
      if(authData.currentUser){
        router.push('/');
      }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(e);
    try {
      await authData.loginWithEP(form.email, form.password);
      setForm({
        name: "",
        email: "",
        password: "",
      });
      router.push('/')

    ;
    } catch (error) {
    //   setError('failed to create account')
      console.log(error);
    }

  };
  return (
    <div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col gap-4 px-4 py-2 rounded  "
      >
        <label className="flex flex-col">
          <span className="text-black font-medium mb-4 hidden">Your email</span>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Type your email address?"
            className="forminput"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-black font-medium mb-1 hidden">Password</span>
          <input
            type="password"
            name="password"
            value={form.name}
            onChange={handleChange}
            placeholder="Type your password"
            className="forminput"
          />
        </label>
       
        <button
          type="submit"
          className="bg-emerald-400 py-3 px-8 rounded-md outline-none w-fit text-black font-bold shadow-md shadow-primary"
        >
          {loading ? "Loggin In..." : "Login"}
        </button>
      </form>
      <p className='px-4 text-emerald-600'>Don't Have an Account? <a href="/register" className='text-sky-600'>Sign up here</a></p>

    </div>
  )
}

export default LoginForm