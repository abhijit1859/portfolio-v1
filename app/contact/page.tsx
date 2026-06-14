"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

export default function Page() {
  const socials = [
    {
      name: "GitHub",
      icon: BsGithub,
      link: "https://github.com/abhijit1859",
      handle: "github.com/abhijit1859",
    },
    {
      name: "LinkedIn",
      icon: BsLinkedin,
      link: "https://linkedin.com/in/abhijit-kumar-dev",
      handle: "in/abhijit-kumar-dev",
    },
    {
      name: "Twitter / X",
      icon: BsTwitterX,
      link: "https://x.com/abhijit1859",
      handle: "@abhijit1859",
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Get in touch
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Let's collaborate or build <br className="hidden sm:block"/> something together.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact Info & Socials */}
          <div className="space-y-8">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I am currently looking for new opportunities in systems, distributed computing, and backend development. If you want to discuss a project, query my work, or just connect, send a message!
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <a
                href="mailto:abhijit1859@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-card/40 border border-border hover:border-foreground/15 transition-all duration-300 shadow-xs"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background border border-border text-foreground group-hover:scale-105 transition-transform duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email me at</p>
                  <p className="text-base font-semibold text-foreground">abhijit1859@gmail.com</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-transparent border border-transparent">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary border border-border text-muted-foreground">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Based in</p>
                  <p className="text-base font-semibold text-foreground">India (Available Worldwide)</p>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm font-semibold text-muted-foreground mb-4">Or connect on socials</p>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2.5 px-4 py-2 rounded-xl bg-card/40 border border-border text-muted-foreground hover:text-foreground hover:border-foreground/15 hover:bg-secondary transition-all duration-200"
                    >
                      <Icon size={16} className="transition-transform group-hover:scale-110" />
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative group">
            {/* Soft decorative shadow block */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-border bg-secondary/80 -z-10 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
            
            <div className="relative rounded-2xl bg-card/40 backdrop-blur-sm border border-border shadow-xs p-6 sm:p-8 lg:p-10">
              <form className="space-y-6">
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-foreground/30 transition-all font-sans"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-foreground/30 transition-all font-sans"
                      required
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-foreground/30 transition-all resize-none font-sans"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:translate-y-[-1px] active:translate-y-0 cursor-pointer"
                >
                  Send Message
                  <Send size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
                
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}