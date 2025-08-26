'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

interface AmountRangeSelectorProps {
  value: number[]
  min?: number
  max?: number
  step?: number
  className?: string
}

const AmountRangeSelector: React.FC<AmountRangeSelectorProps> = ({
  value,
  min = 0,
  max = 10000,
  step = 100,
  className = '',
}) => {
  return (
    <div className={`py-4 ${className}`}>
      <div className='relative w-full'>
        <SliderPrimitive.Root
          className='relative flex w-full touch-none select-none items-center h-8'
          min={min}
          max={max}
          step={step}
          value={value}
          aria-label="Budget range selector"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value[0]}
          aria-valuetext={`Budget range from $${value[0]} to $${value[1]}`}
        >
          <SliderPrimitive.Track className='relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200'>
            <SliderPrimitive.Range className='absolute h-full bg-accent-mint' />
          </SliderPrimitive.Track>

          {value.map((val, index) => {
            const percent = ((val - min) / (max - min)) * 100

            return (
              <React.Fragment key={index}>
                <SliderPrimitive.Thumb 
                  className='transition-all duration-200 ease-in-out relative z-10 block w-4 h-4 rounded-full border-2 border-white bg-accent-mint shadow-md focus:outline-none focus:ring-2 focus:ring-accent-mint focus:ring-opacity-50 cursor-pointer hover:scale-110'
                  aria-label={`Set budget ${index === 0 ? 'minimum' : 'maximum'} to $${val}`}
                />
                <div
                  className='text-gray-700 absolute top-8 text-sm font-medium pointer-events-none'
                  style={{ left: `calc(${percent}% - 32px)` }}
                  aria-hidden="true"
                >
                  ${val.toLocaleString()}
                </div>
              </React.Fragment>
            )
          })}
        </SliderPrimitive.Root>
      </div>
    </div>
  )
}

export default AmountRangeSelector
