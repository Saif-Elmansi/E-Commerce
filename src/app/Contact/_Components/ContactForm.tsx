"use client";

import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("order");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in name, email, and message.");
      return;
    }
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      toast.success("Thanks — your message has been noted (demo).");
      setName("");
      setEmail("");
      setTopic("order");
      setMessage("");
    }, 800);
  }

  return (
    <div className="rounded-3xl border border-slate-100/90 bg-white p-5 shadow-sm shadow-slate-200/40 sm:p-7">
      <h2 className="text-lg font-black text-slate-900 sm:text-xl">
        Send a message
      </h2>
      <p className="mt-1 text-sm font-medium text-slate-500">
        Tell us how we can help. This form is for demo UI — hook it to your API
        when ready.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="h-11 w-full rounded-2xl border border-slate-100 bg-slate-50/80 px-4 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-200 focus:bg-white focus:ring-2 focus:ring-blue-500/15"
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="h-11 w-full rounded-2xl border border-slate-100 bg-slate-50/80 px-4 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-200 focus:bg-white focus:ring-2 focus:ring-blue-500/15"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-topic"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500"
          >
            Topic
          </label>
          <select
            id="contact-topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="h-11 w-full cursor-pointer rounded-2xl border border-slate-100 bg-slate-50/80 px-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-blue-200 focus:bg-white focus:ring-2 focus:ring-blue-500/15"
          >
            <option value="order">Order & delivery</option>
            <option value="product">Product question</option>
            <option value="returns">Returns & refunds</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help?"
            className="w-full resize-y rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-200 focus:bg-white focus:ring-2 focus:ring-blue-500/15"
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-8"
        >
          {sending ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          ) : (
            <Send size={18} aria-hidden />
          )}
          {sending ? "Sending…" : "Send message"}
        </button>
      </form>
    </div>
  );
}
