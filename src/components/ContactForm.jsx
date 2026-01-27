import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaEnvelope } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f02bf9df-71e4-44fe-ac89-fb60f17e036f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Message Sent",
        text: "Thank you, I'll be in touch soon!",
        icon: "success",
        confirmButtonColor: "#333",
      }).then(() => {
        window.location.href = "/";
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Failed to send message. Please try again.",
        icon: "error",
        confirmButtonColor: "#333",
      });
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6 w-full">
      <h2 className="flex justify-center items-center text-3xl  font-bold mb-6">
        <FaEnvelope className="w-8 h-8 mr-3" />
        Send a Message
      </h2>

      <div>
        <input
          type="text"
          className="w-full p-3 border rounded bg-white text-black"
          placeholder="* Name"
          name="name"
          required
        />
      </div>

      <div>
        <input
          type="email"
          className="w-full p-3 border rounded bg-white text-black"
          placeholder="* Email"
          name="email"
          required
        />
      </div>

      <div>
        <input
          type="text"
          className="w-full p-3 border rounded bg-white text-black"
          placeholder="Phone"
          name="phone"
        />
      </div>

      <div>
        <input
          className="w-full p-3 border rounded bg-white text-black"
          placeholder="Preferred Contact Method"
          name="contactmethod"
        />
      </div>

      <div>
        <textarea
          name="message"
          className="w-full p-3 border rounded bg-white text-black"
          placeholder="* What would you like to talk about?"
          rows="5"
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="inline-flex whitespace-nowrap hover:opacity-70 bg-none text-gray-200 border-1 ring ring-white hover:ring-offset-.5 font-medium rounded-lg text-lg px-5 py-2 text-center me-2"
        >
          <FaPaperPlane className="mr-2 mt-1" />
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
