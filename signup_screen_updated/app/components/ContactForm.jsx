"use client";
import React, { useState } from "react";
import UserInput from "./UserInput";
import Button from "./Button";
import Links from "./Links";
// import {vector} from '../../public/assets/Signup_Vector.png';
// import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center px-4 sm:px-8">
      <div className=" w-full sm:block image-container"/>
      <form
        onSubmit={handleSubmit}
        className="w-[100%] max-w-lg ml-8 mt-8 bg-white bg-opacity-65 shadow-md rounded-lg pl-4 px-4 pb-2 "
      >
        <div className="grid pt-3 mt-2">
          <div className="sm:col-start-2 mt-2">
            <UserInput
              name="name"
              value={formData.name}
              onChange={handleChange}
              content={"Username"}
            />
            <UserInput
              name="email"
              value={formData.email}
              onChange={handleChange}
              content={"Email"}
            />
            <UserInput
              name="password"
              value={formData.password}
              onChange={handleChange}
              content={"Password"}
            />
            <UserInput
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              content={"Confirm Password"}
            />
          </div>
        </div>
        <div className="mt-5">
          <Button title={"Sign Up"} />
        </div>

        <h3 className="text-gray-900 text-md pt-4 pl-3 sm:text-base">
          Just some details to get you in!
        </h3>

        <div className="flex items-center justify-center text-xs sm:text-sm mt-4">
          <h1 className="text-gray-700 mr-2">Already Registered?</h1>
          <Links className="text-blue-500" text={"Sign In"} />
        </div>
        <div className="flex items-center justify-center mt-4 text-xs sm:text-sm space-x-4">
          <Links text={"Conditions"} />
          <Links text={"Support"} />
          <Links text={"Customer Care"} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
