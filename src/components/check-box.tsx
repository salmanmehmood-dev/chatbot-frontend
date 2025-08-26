'use client'

import * as React from 'react'
import { Check } from 'lucide-react'

interface CheckboxBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const CheckboxBox = React.forwardRef<HTMLInputElement, CheckboxBoxProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className={`relative flex items-center ${className || ''}`}>
        <input
          ref={ref}
          type='checkbox'
          className='peer h-5 w-5 appearance-none rounded-sm border-2 border-accent-mint bg-white checked:bg-accent-mint checked:border-accent-mint focus:ring-2 focus:ring-accent-mint focus:ring-opacity-50 focus:outline-none transition-all cursor-pointer'
          {...props}
        />
        <span className='pointer-events-none absolute left-[2px] top-[2px] hidden size-3 peer-checked:block'>
          <Check className='h-4 w-4 text-white' strokeWidth={3} />
        </span>

        {label && (
          <label 
            htmlFor={props.id} 
            className="ml-3 text-sm font-normal text-brand cursor-pointer select-none"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)

CheckboxBox.displayName = 'CheckboxBox'

export { CheckboxBox }
