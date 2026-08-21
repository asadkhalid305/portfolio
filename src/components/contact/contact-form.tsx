"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import contactData from "@/constants/contact.json";
import { Confetti, type ConfettiRef } from "@/components/ui/confetti";
import { ShineBorder } from "@/components/ui/shine-border";
import { isRealisticEmail } from "@/utils/email-validation";

async function fetchFormStartedAt() {
  const response = await fetch("/api/contact", { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Unable to initialize the contact form");
  }

  const data = (await response.json()) as { formStartedAt?: string };
  if (!data.formStartedAt) {
    throw new Error("Missing contact form timestamp");
  }

  return data.formStartedAt;
}

export default function ContactForm() {
  const confettiRef = useRef<ConfettiRef>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
    formStartedAt: "",
  });
  const [emailError, setEmailError] = useState("");

  const isEmailValid = isRealisticEmail(formData.email);

  useEffect(() => {
    let active = true;

    void fetchFormStartedAt()
      .then((formStartedAt) => {
        if (!active) return;
        setFormData((previous) => ({
          ...previous,
          website: "",
          formStartedAt,
        }));
      })
      .catch((error) => {
        if (!active) return;
        console.error("Error initializing form:", error);
        setStatus("error");
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (
      status !== "success" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      void confettiRef.current?.fire({
        colors: ["#0A66C2", "#4FA3F7", "#071C36", "#FFFFFF"],
        particleCount: 72,
        spread: 62,
        startVelocity: 28,
        origin: { x: 0.5, y: 0.38 },
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [status]);

  const handleRestart = async () => {
    setStatus("idle");

    try {
      const formStartedAt = await fetchFormStartedAt();
      setFormData((previous) => ({
        ...previous,
        website: "",
        formStartedAt,
      }));
    } catch (error) {
      console.error("Error reinitializing form:", error);
      setStatus("error");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isEmailValid) {
      setEmailError("Please enter a valid, real email address.");
      setStatus("error");
      return;
    }

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
        setEmailError("");
        setFormData({
          name: "",
          email: "",
          message: "",
          website: "",
          formStartedAt: "",
        });
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

    if (name === "email") {
      if (!value.trim()) {
        setEmailError("");
        return;
      }
      setEmailError(
        isRealisticEmail(value)
          ? ""
          : "Please enter a valid, real email address."
      );
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:p-8">
      <ShineBorder
        borderWidth={2}
        duration={18}
        shineColor={["#0A66C2", "#4FA3F7", "#0A66C2"]}
      />

      <div className="relative z-10">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            {contactData.form.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {contactData.form.description}
          </p>
        </div>

        {status === "success" ? (
          <div className="relative overflow-hidden rounded-2xl border border-green-100 bg-green-50 p-8 text-center dark:border-green-900/20 dark:bg-green-900/10">
            <Confetti
              ref={confettiRef}
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 size-full"
              manualstart
            />
            <div className="relative z-20">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                {contactData.success.title}
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                {contactData.success.description}
              </p>
              <button
                onClick={handleRestart}
                className="rounded-xl bg-c-dark px-6 py-2 font-medium text-white transition-all hover:bg-gray-800"
              >
                {contactData.success.button}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="hidden"
            name="formStartedAt"
            value={formData.formStartedAt}
            readOnly
          />
          <div
            className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
            aria-hidden="true"
          >
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              autoComplete="off"
              tabIndex={-1}
              maxLength={200}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
                maxLength={100}
                placeholder={contactData.form.name.placeholder}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-c-dark dark:focus:ring-c-light transition-all"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
                maxLength={254}
                placeholder={contactData.form.email.placeholder}
                aria-invalid={Boolean(emailError)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-c-dark dark:focus:ring-c-light transition-all"
              />
              {emailError && <p className="mt-2 text-red-500 text-sm">{emailError}</p>}
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
              minLength={20}
              maxLength={5000}
              placeholder={contactData.form.message.placeholder}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-c-dark dark:focus:ring-c-light transition-all resize-none"
            />
          </div>

          {status === "error" && !emailError && (
            <p className="text-red-500 text-sm">{contactData.form.error}</p>
          )}

          <button
            type="submit"
            disabled={
              status === "loading" ||
              !formData.name.trim() ||
              formData.message.trim().length < 20 ||
              !formData.formStartedAt ||
              !isEmailValid
            }
            className={clsx(
              "w-full py-4 bg-c-dark text-white rounded-xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2",
              status === "loading" ||
                !formData.name.trim() ||
                formData.message.trim().length < 20 ||
                !formData.formStartedAt ||
                !isEmailValid
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            )}
          >
            {status === "loading" ? (
              <>
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
    </div>
  );
}
