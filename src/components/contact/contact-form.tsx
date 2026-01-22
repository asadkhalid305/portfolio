"use client";

import { useState } from "react";
import clsx from "clsx";
import contactData from "@/constants/contact.json";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 md:p-10 bg-white/40 backdrop-blur-xl dark:bg-gray-900/40 rounded-3xl border border-white/20 dark:border-white/5 shadow-2xl transition-all duration-300">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
          {contactData.form.title}
        </h2>
        <p className="text-lg text-slate-600 dark:text-gray-400">
          {contactData.form.description}
        </p>
      </div>

      {status === "success" ? (
        <div className="p-10 text-center bg-emerald-50/50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl backdrop-blur-sm">
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            {contactData.success.title}
          </h3>
          <p className="text-slate-600 dark:text-gray-400 mb-8 text-lg">
            {contactData.success.description}
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold tracking-wide transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5"
          >
            {contactData.success.button}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-2.5"
              >
                {contactData.form.name.label}
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={contactData.form.name.placeholder}
                className="w-full px-5 py-4 rounded-2xl border border-white/20 dark:border-white/10 bg-white/50 dark:bg-black/20 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:bg-white/80 dark:focus:bg-black/40 transition-all duration-300 backdrop-blur-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-2.5"
              >
                {contactData.form.email.label}
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={contactData.form.email.placeholder}
                className="w-full px-5 py-4 rounded-2xl border border-white/20 dark:border-white/10 bg-white/50 dark:bg-black/20 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:bg-white/80 dark:focus:bg-black/40 transition-all duration-300 backdrop-blur-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-2.5"
            >
              {contactData.form.message.label}
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder={contactData.form.message.placeholder}
              className="w-full px-5 py-4 rounded-2xl border border-white/20 dark:border-white/10 bg-white/50 dark:bg-black/20 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:bg-white/80 dark:focus:bg-black/40 transition-all duration-300 resize-none backdrop-blur-sm"
            />
          </div>

          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-50 text-red-600 text-sm font-medium border border-red-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-circle"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
              {contactData.form.error}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className={clsx(
              "w-full py-4.5 bg-slate-900 text-white rounded-2xl font-bold text-lg uppercase tracking-wide shadow-xl transition-all duration-300 flex items-center justify-center gap-3 dark:bg-white dark:text-slate-900",
              status === "loading"
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-slate-800 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 dark:hover:bg-gray-100"
            )}
          >
            {status === "loading" ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
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
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {contactData.form.submit.sending}
              </>
            ) : (
              contactData.form.submit.default
            )}
          </button>
        </form>
      )}
    </div>
  );
}
