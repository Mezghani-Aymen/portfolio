import { useState } from "react";
import { InitialForm, IFormData } from "../types/contact.types";

export default function useContactForm() {
  const [formData, setFormData] = useState<IFormData>(new InitialForm());

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const value =
      target.type === "file" ? (target.files ? target.files[0] : null) : target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => setFormData(new InitialForm());

  return { formData, handleChange, resetForm };
}