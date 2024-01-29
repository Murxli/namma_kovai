"use client";
import React, { useEffect, useRef, useState } from "react";
// import { useAuth } from "../contexts/AuthContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
    const {signupWithEP, signInWithGoogle, currentUser} = useAuth();
  const formRef = useRef();
  const router = useRouter()
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    phone_no: "",
    address: "",
    area: "",
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
    console.log(currentUser);
      if(currentUser){
        router.push('/');
      }
  }, [])

  useEffect(() => console.log(form), [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(e);
    try {
      await signupWithEP(form.email, form.password);
      setForm({
        name: "",
        email: "",
        password: "",
      });
      router.push('/login')

    ;
    } catch (error) {
      setError('failed to create account')
      console.log(error);
    }

  };
  return (
    <div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col gap-4 p-4 rounded  "
      >
        <title>Register</title>
        <label className="flex flex-col">
          <span className="text-black font-medium mb-1 hidden">Your Name</span>
          <input
            required
            type="text"
            name="userName"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="forminput"
          />
        </label>

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
          <span className="text-black font-medium mb-1 hidden">
            Phone Number
          </span>
          <input
            required
            type="number"
            name="phone_no"
            minLength={10}
            maxLength={10}
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your Phone number"
            className="forminput"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-black font-medium mb-1 hidden">Address</span>
          <input
            type="text"
            name="address"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your Address"
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
        <label className="flex flex-col">
          <span className="text-black font-medium mb-1 hidden">Password</span>
          <input
            type="password"
            name="password"
            value={form.name}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="forminput"
          />
        </label>
        <button
          type="submit"
          className="bg-emerald-400 py-3 px-8 rounded-md outline-none w-fit text-black font-bold shadow-md shadow-primary"
        >
          {loading ? "Signing Up..." : "SignUP"}
        </button>
      </form>
      <p>Already Have an Account? <a href="/login">Login Instead</a></p>
    </div>
  );
};

export default RegisterForm;
