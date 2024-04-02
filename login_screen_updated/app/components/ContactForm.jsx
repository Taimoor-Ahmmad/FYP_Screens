"use client";
import React, { useState } from "react";
import UserInput from "./UserInput";
import Button from "./Button";
import Links from "./Links";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

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
      <div className=" w-full sm:block image-container" />
      <form
        onSubmit={handleSubmit}
        className="w-[100%]  max-w-lg ml-8 mt-10 bg-white bg-opacity-65 shadow-lg rounded-lg pl-4 px-4 pt-10"
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
        <h3 className="text-gray-900 text-md pt-4 pl-3 sm:text-base">
          Glad to see you back!
        </h3>
        <div className="mt-5">
          <Button title={"Login"} />
        </div>


        <div className="flex justify-center space-x-5 mt-5 pb-5">
          <button>
            <FaGoogle color="purple" />
          </button>
          <button>
            <FaFacebook color="blue" />
          </button>
          <button>
            <FaGithub color="black" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
