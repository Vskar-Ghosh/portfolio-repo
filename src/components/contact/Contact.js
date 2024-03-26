import React, { useState } from "react";
import Title from "../home/Title";
import { FiSend } from "react-icons/fi";
import axios from "axios";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // error messages
  const [errClientName, seterrClientName] = useState(false);
  const [errEmail, seterrEmail] = useState(false);
  const [errMessages, seterrMessages] = useState(false);
  // success message
  const [successMessage, setSuccessMessage] = useState("");

  // email validation start here
  const Emailvalidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/[a+b^b=c]/);
  };

  const handleName = (e) => {
    setClientName(e.target.value);
    seterrClientName(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    seterrEmail(false);
  };

  const handleMessage = (e) => {
    setMessages(e.target.value);
    seterrMessages(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      seterrClientName(true);
    }
    if (!email) {
      seterrEmail(true);
    } else {
      if (!Emailvalidation(email)) {
        seterrEmail(true);
      }
    }
    if (!messages) {
      seterrMessages(true);
    }

    if (clientName && email && Emailvalidation(email) && messages) {
      axios.post("https://getform.io/f/20ae695f-a06f-4f76-8f94-b78d108430b4", {
        name: clientName,
        email: email,
        messages: messages,
      });
      setSuccessMessage(
        `Hello dear ${clientName}, Your messages has been sent successfully. Thank you for your time`
      );
      setClientName("");
      setEmail("");
      setMessages("");
    }
  };
  return (
    <div>
      <Title title="Get" subtitle="in Touch" />
      <div className=" p-6 flex justify-between gap-20">
        <div className=" w-1/2">
          <p className=" flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            Address:
            <span className=" bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center  justify-center">
              Dhaka, Bangladesh
            </span>
          </p>
          <p className=" flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            Phone:
            <span className=" bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center  justify-center">
              +8801754854694
            </span>
          </p>
        </div>
        <div className=" w-1/2">
          <p className=" flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            Email:
            <span className=" bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center  justify-center">
              vaskar.ghosh.99.23@gmail.com
            </span>
          </p>
          <p className=" flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            Freelance:
            <span className=" bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center  justify-center">
              Available
            </span>
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <Title title="Send" subtitle="Message" />
        {/* from section start from here */}
        {successMessage ? (
          <p className=" text-center text-base font-titleFont p-20 text-designColor">
            {successMessage}{" "}
          </p>
        ) : (
          <form
            id="form"
            action="https://getform.io/f/20ae695f-a06f-4f76-8f94-b78d108430b4"
            method="POST"
            className="p-6 flex flex-col gap-6"
          >
            <div className="w-full flex gap-10 justify-between">
              <input
                onChange={handleName}
                value={clientName}
                className={` ${
                  errClientName
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                type="text"
                placeholder="Full Name"
              />

              <input
                onChange={handleEmail}
                value={email}
                className={` ${
                  errEmail
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                type="email"
                placeholder="Email Address"
              />
            </div>
            <textarea
              onChange={handleMessage}
              value={messages}
              className={` ${
                errMessages
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
              } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300 resize-none`}
              cols="15"
              rows="2"
              placeholder="Your Message"
            ></textarea>
            <button
              onClick={handleSend}
              className="  text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200"
            >
              Send Message{" "}
              <span className=" mt-1 text-designColor">
                <FiSend />
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
