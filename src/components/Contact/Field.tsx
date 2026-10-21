import { InputHTMLAttributes } from "react";

function Field({ label, name, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string; name: string }) {
  const inputClass = `flex w-full rounded-md border
   border-white/20 bg-white/5 px-3 py-2 text-sm text-white 
   placeholder:text-white/50 outline-none transition focus:border-blue-500/50 
   focus:ring-2 focus:ring-blue-500/20`;

  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-medium text-white/80">{label} *</label>
      <input id={name} name={name} required {...props} className={`${inputClass} h-10`} />
    </div>
  );
}


export default Field;