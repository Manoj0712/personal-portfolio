import { DETAILS } from "@/constrains";
import { ChangeEvent, FormEvent, useState } from "react";

const useContactPage = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${DETAILS.mail}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;

    setSent(true);
    setTimeout(() => {
      setSent(false);
    }, 3000);
  };


  return {
    handleChange,
    handleSubmit,
    form,
    sent,
  }


}

export default useContactPage;