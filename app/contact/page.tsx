"use client";

import { Mail, MapPin,   Send } from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Page() {
  const socials = [
    {
      name: "GitHub",
      icon: BsGithub,
      link: "#", // Replace with your link
      handle: "@yourusername",
    },
    {
      name: "LinkedIn",
      icon: BsLinkedin,
      link: "#", // Replace with your link
      handle: "in/yourusername",
    },
    {
      name: "Twitter / X",
      icon: BsTwitter,
      link: "#", // Replace with your link
      handle: "@yourusername",
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
       

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact Info & Socials */}
          <div className="space-y-8">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to connect, feel free to reach out. I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <a
                href="mailto:hello@yourdomain.com"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white group-hover:scale-105 transition-transform duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Email me at</p>
                  <p className="text-base font-semibold text-zinc-900 dark:text-white">hello@yourdomain.com</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-transparent border border-transparent">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Based in</p>
                  <p className="text-base font-semibold text-zinc-900 dark:text-white">India (Available Worldwide)</p>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-4">Or connect on socials</p>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-200"
                    >
                      <Icon size={18} className="transition-transform group-hover:scale-110" />
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative group">
            {/* Subtle background offset (matching the project video offset motif) */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 -z-10"></div>
            
            <div className="relative rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8 lg:p-10">
              <form className="space-y-6">
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-900 dark:text-white">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-white/10 focus:border-zinc-900 dark:focus:border-zinc-700 transition-all"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-900 dark:text-white">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-white/10 focus:border-zinc-900 dark:focus:border-zinc-700 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-900 dark:text-white">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-white/10 focus:border-zinc-900 dark:focus:border-zinc-700 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 px-8 py-3.5 text-sm font-semibold text-white dark:text-zinc-900 transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 dark:focus:ring-white/20 active:scale-[0.98]"
                >
                  Send Message
                  <Send size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
                
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}