'use client'

import { Building2, PhoneCall } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Accent Bar */}
        <div className="mx-auto h-1.5 w-20 bg-brand-gradient dark:bg-brand-gradient-dark mb-8 rounded-full" />

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-mutedForeground dark:text-white/70 max-w-2xl mx-auto">
            Reach out to us for a quote, technical support, or general inquiries. We’ll get back to
            you as soon as possible.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-14 mt-16">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent-mint/20 rounded-xl">
                <Building2 className="w-6 h-6 text-accent-mint" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground dark:text-accent-mint mb-1">
                  Office Address
                </h3>
                <p className="text-muted dark:text-white/70">
                  Old Khaitan – Al-Mahri Complex – Block 
                  <br/>
                  29 – 3rd Floor – Office No. 6
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent-mint/20 rounded-xl">
                <PhoneCall className="w-6 h-6 text-accent-mint" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground dark:text-accent-mint mb-1">
                  WhatsApp / Phone
                </h3>
                <p className="text-muted dark:text-white/70">+92 355 670 4992</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 shadow">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">First Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black/30 p-3 text-sm focus:border-accent-mint focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Last Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black/30 p-3 text-sm focus:border-accent-mint focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 dark:text-white">Email</label>
              <input
                type="email"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black/30 p-3 text-sm focus:border-accent-mint focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 dark:text-white">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black/30 p-3 text-sm focus:border-accent-mint focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-brand-gradient text-white font-medium hover:opacity-90 transition"
            >
              Send Message / WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
