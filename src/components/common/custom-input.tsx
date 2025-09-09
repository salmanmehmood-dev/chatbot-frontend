"use client";
import React from "react";

interface CustomInputProps {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  value,
  type = "text",
  onChange,
  error,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 dark:text-white">
        {label}
      </label>
      <input
        type={type}
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
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
