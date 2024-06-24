import * as React from "react";

type InputFieldProps = {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const InputField: React.FC<InputFieldProps> = ({ label, placeholder, type, name, value, onChange }) => (
  <>
    <label htmlFor={label.toLowerCase()} className="self-center mt-7 text-base tracking-wider leading-6 text-stone-300">
      {label}
    </label>
    <input
      type={type}
      id={label.toLowerCase()}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="justify-center items-start px-4 py-5 mt-3 max-w-full text-lg tracking-wider leading-6 whitespace-nowrap bg-white rounded-xl border border-solid shadow-lg border-neutral-200 text-stone-500 w-[318px] max-md:pr-5"
    />
  </>
);

