import React from "react";

const PetitionForm = ({ formRef, handleSubmit, form, handleChange }) => {
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mt-4 flex flex-col gap-4 p-4 rounded  "
    >
      <label className="flex flex-col">
        <span className="text-black font-medium mb-1 hidden">Your Name</span>
        <input
          required
          type="text"
          name="name"
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
          placeholder="What's your email address?"
          className="forminput"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-black font-medium mb-1 hidden">Phone Number</span>
        <input
          type="text"
          name=""
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your Phone number"
          className="forminput"
        />
      </label>
      <label className="flex flex-col ">
        <span className="text-black font-medium mb-4 hidden">Your Message</span>
        <textarea
          rows={7}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What you want to say?"
          className="forminput"
        />
      </label>

      {/* <button
        type="submit"
        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary"
      >
        {loading ? "Sending..." : "Send"}
      </button> */}
    </form>
  );
};

export default PetitionForm;
