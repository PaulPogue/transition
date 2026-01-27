// src/components/buttons/HeroSignup.jsx
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function HeroSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "Please enter a valid email.",
        confirmButtonColor: "#333",
      });
    }

    // 1️⃣ Build the payload
    const payload = {
      access_key: "f02bf9df-71e4-44fe-ac89-fb60f17e036f", // your Web3Forms access key
      email,
      subject: "New newsletter signup",
      message: `Please add ${email} to the newsletter list.`,
    };

    try {
      // 2️⃣ Send it off
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      // 3️⃣ Handle success / error
      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Thank You!",
          text: `Please watch your email, I'll be in touch.`,
          confirmButtonColor: "#333",
        });
        setEmail(""); // clear the field
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message || "Something went wrong. Please try again.",
        confirmButtonColor: "#333",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 pl-5 flex justify-left relative z-20"
    >
      <div className="flex w-full max-w-xl bg-white border border-gray-900 rounded-md overflow-hidden">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
        />
        <button
          type="submit"
          className="px-16 py-3 m-1 bg-[var(--firmBlue)] hover:bg-[color-mix(in_srgb,var(--firmBlue),black_15%)] text-white font-semibold rounded-md"
        >
          Let's Talk
        </button>
      </div>
    </form>
  );
}
