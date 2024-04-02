"use client"
import React, { useState } from "react";

const UserInput = ({ content }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
     <div className="w-[100%] h-[60px] px-2 py-4 rounded-xl  border-grey-200 justify-start items-center gap-1.5 inline-flex">
        <div className="text-2xl font-normal font-['Roboto'] input-field">
          <input
            id="name"
            type="text"
            placeholder={content}
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow  border rounded w-full py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline pt-3"
          />
        </div>
      </div>
    </>
  );
};

export default UserInput;
