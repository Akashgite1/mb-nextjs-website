"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function ContactMe() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    title: "",
    user_email: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState("");

  // Email validation regex pattern
  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

  // Validate form fields
  useEffect(() => {
    const isValid =
      formData.user_name.trim() !== "" &&
      formData.title.trim() !== "" &&
      formData.user_email.trim() !== "" &&
      formData.message.trim() !== "" &&
      emailRegex.test(formData.user_email);

    setIsFormValid(isValid);
  }, [formData, emailRegex]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "user_email") {
      if (value.trim() === "") {
        setEmailError("");
      } else if (!emailRegex.test(value)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    }
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const loadingToast = toast.loading("Sending message...");

    try {
      if (!form.current) return;

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully! 🎉", { id: loadingToast });
      form.current.reset();
      setFormData({ user_name: "", title: "", user_email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again.", { id: loadingToast });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section
      className="p-6 bg-white/80 dark:bg-gray-900/80 shadow-xl rounded-2xl mt-10 border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">
        Contact Me for Collaboration/Podcast
      </h2>

      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            value={formData.user_name}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            value={formData.user_email}
            onChange={handleChange}
            required
            className={`mt-1 w-full rounded-lg border ${
              emailError
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
            } bg-transparent px-3 py-2 focus:ring-2 focus:outline-none`}
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid || isSending}
          className={`w-full flex items-center justify-center gap-2 font-medium py-2 rounded-lg transition-all duration-200 ${
            !isFormValid || isSending
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {isSending && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
              ></path>
            </svg>
          )}
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
    </motion.section>
  );
}
