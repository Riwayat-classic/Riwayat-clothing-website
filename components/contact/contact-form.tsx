"use client"

import { useState } from "react"

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    alert("Thank you! Your message has been received.")

    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    })
  }

  return (
    <section className="bg-muted/30 py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-8">

        <div className="text-center">
          <p className="label-royal text-gold">
            Send Us A Message
          </p>

          <h2 className="mt-4 font-heading text-4xl font-bold">
            We'd Love To Hear From You
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Fill out the form below and our team will get
            back to you as soon as possible.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-14 space-y-6 rounded-xl border border-border bg-card p-8 shadow-sm"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-border px-4 py-3 outline-none focus:border-maroon"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-border px-4 py-3 outline-none focus:border-maroon"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-border px-4 py-3 outline-none focus:border-maroon"
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-border px-4 py-3 outline-none focus:border-maroon"
          />

          <button
            type="submit"
            className="w-full rounded-md bg-maroon px-6 py-4 font-semibold text-white transition hover:bg-maroon-dark"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  )
}