"use client"

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        alert(result.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Form submit error:", error);
      alert("Something went wrong. Please try again.");
    }
  };


  return (
    <section className="space-y-6 mx-auto">
      <div>
        <h1 className="text-4xl font-extrabold">Contact</h1>
        <p className="text-slate-300 mt-2">
          Interested In Collaborating? Get In Touch At:{" "}
          <a
            href="mailto:abhishek.zxsa@gmail.com"
            className="text-blue-400 hover:underline ml-1"
          >
            abhishek.zxsa@gmail.com
          </a>{" "}
          Or Leave A Message.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-6"
      >
        <div>
          <label className="text-sm text-slate-300">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md p-2 bg-slate-800 border border-slate-700 mt-2"
            required
          />
        </div>
        <div>
          <label className="text-sm text-slate-300">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md p-2 bg-slate-800 border border-slate-700 mt-2"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-slate-300">Message</label>
          <textarea
            name="message"
            rows={8}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md p-2 bg-slate-800 border border-slate-700 mt-2"
            required
          />
        </div>
        <div className="md:col-span-2">
          <button className="nav-link btn btn-primary mt-2" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
