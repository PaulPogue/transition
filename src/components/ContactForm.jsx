import React, { useState } from "react";
import Swal from "sweetalert2";
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
        icon: "success",
        title: "Message Sent",
        html: `<p class="swal2-text">Thank you — we’ll be in touch soon.</p>`,
        showConfirmButton: true,
        confirmButtonText: "OK",
        buttonsStyling: false, // let our classes take over
        background: "#ffffff",
        color: "#0f172a", // slate-900
        iconColor: "var(--firmBlue)",
        customClass: {
          popup: "swal2-site-popup",
          title: "swal2-site-title",
          htmlContainer: "swal2-site-html",
          confirmButton: "swal2-site-confirm",
        },
      }).then(() => {
        window.location.href = "/";
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send message. Please try again.",
        buttonsStyling: false,
        background: "#ffffff",
        color: "#0f172a",
        iconColor: "#dc2626",
        customClass: {
          popup: "swal2-site-popup",
          title: "swal2-site-title",
          htmlContainer: "swal2-site-html",
          confirmButton: "swal2-site-confirm",
        },
      });
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6 w-full">
      <h2
        className="font-bold tracking-tight text-3xl sm:text-4xl text-center leading-tight
   text-slate-900 md:text-white"
      >
        Send us a message
        <br />
        We'll be in touch
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
          rows="10"
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="flex
      items-center
      justify-center
      mx-auto
      whitespace-nowrap
      cursor-pointer
      rounded-lg 
      px-5 py-2 
      font-normal
      text-lg
      bg-[#ebf1ff] text-[var(--firmBlue)]
      transition-all duration-200 ease-out
      hover:-translate-y-0.5
      hover:shadow-lg
      focus:outline-none
      focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <FaPaperPlane className="mr-2 mt-1" />
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
