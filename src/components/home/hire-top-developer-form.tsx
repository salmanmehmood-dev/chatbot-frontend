'use client'
import { useState } from 'react'
import { CustomInput } from '../common/custom-input'
import { CustomSelect } from '../common/custom-select'

export default function HireDeveloperForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectType: '',
    technologies: '',
    budget: '',
    timeline: '',
    description: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: Record<string, string> = {}
    if (!formData.fullName) newErrors.fullName = 'Full name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.projectType) newErrors.projectType = 'Please select project type'
    if (!formData.budget) newErrors.budget = 'Please select a budget range'
    if (!formData.timeline) newErrors.timeline = 'Please select a timeline'
    if (!formData.description) newErrors.description = 'Project description is required'

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log('Form Submitted ✅', formData)
      alert('Thank you! We’ll get in touch with you shortly.')

      setFormData({
        fullName: '',
        email: '',
        company: '',
        projectType: '',
        technologies: '',
        budget: '',
        timeline: '',
        description: '',
      })
    }
  }

  return (
    <section id="hire-developer" className="py-20 bg-white dark:bg-black flex justify-center">
      <div className="w-[90%] max-w-[1700px]  ">
        <div className="text-center mb-12">
          <h2 className="md:text-4xl sm:text-3xl text-2xl  font-bold text-foreground dark:text-white mb-4">
            Hire Top Developers
          </h2>
          <p className="text-mutedForeground dark:text-white/70 max-w-2xl mx-auto sm:text-base text-sm">
            Looking for skilled developers to bring your idea to life? Fill out the form below and
            we’ll connect you with the right talent for your project.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-100 dark:bg-gray-900 rounded-2xl sm:p-8 p-5 shadow max-w-5xl"
        >
          <CustomInput
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />

          <CustomInput
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <CustomInput
            label="Company / Organization (optional)"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />

          <CustomSelect
            label="Project Type"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            error={errors.projectType}
            options={[
              { value: 'web', label: 'Web App' },
              { value: 'mobile', label: 'Mobile App' },
              { value: 'ecommerce', label: 'eCommerce' },
              { value: 'custom', label: 'Custom Software' },
              { value: 'other', label: 'Other' },
            ]}
          />

          <CustomInput
            label="Technologies Needed (e.g., React, Next.js, Node.js)"
            name="technologies"
            value={formData.technologies}
            onChange={handleChange}
          />

          <CustomSelect
            label="Budget Range"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            error={errors.budget}
            options={[
              { value: '<5k', label: '< $5k' },
              { value: '5-10k', label: '$5k – $10k' },
              { value: '10-50k', label: '$10k – $50k' },
              { value: '50k+', label: '$50k+' },
            ]}
          />

          <CustomSelect
            label="Timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            error={errors.timeline}
            options={[
              { value: 'asap', label: 'ASAP' },
              { value: '1-3', label: '1–3 months' },
              { value: '3-6', label: '3–6 months' },
              { value: 'flexible', label: 'Flexible' },
            ]}
          />

          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white">
              Project Description
            </label>
            <textarea
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className={`w-full rounded-lg border p-3 text-sm bg-white dark:bg-black/30 
                focus:border-accent-mint focus:outline-none
                ${errors.description ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}
              `}
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">{errors.description}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-brand-gradient text-white font-medium hover:opacity-90 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  )
}
