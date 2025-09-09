"use client";
import React from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label: string;
  name: string;
  value: string;
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  name,
  value,
  options,
  onChange,
  error,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 dark:text-white">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg border p-3 text-sm bg-white dark:bg-black/30 
          focus:border-accent-mint focus:outline-none
          ${
            error
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-700"
          }
        `}
      >
        <option value="" className="bg-[#0c111b]">Select {label}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-[#0c111b] ">
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
