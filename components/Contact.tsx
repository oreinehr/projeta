"use client";

import { useState } from "react";
import Container from "./Container";

export default function InsiderForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // 👈 obrigatório
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", city: "" });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-[#F4F1EE] py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          <div className="bg-white rounded-[32px] p-12 shadow-sm max-w-[520px]">
            <form className="space-y-6" onSubmit={handleSubmit}>

              <Input name="name" placeholder="Nome Completo" value={form.name} onChange={handleChange} />
              <Input name="email" placeholder="E-mail" value={form.email} onChange={handleChange} />
              <Input name="phone" placeholder="Telefone/WhatsApp" value={form.phone} onChange={handleChange} />
              <Input name="city" placeholder="Cidade/Estado" value={form.city} onChange={handleChange} />

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#CBB6A1] text-white px-10 py-3 rounded-full text-sm tracking-wide hover:opacity-90 transition disabled:opacity-50"
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>
              </div>

              {success && (
                <p className="text-green-600 text-sm pt-2">
                  ✔️ Enviado com sucesso! Em breve entraremos em contato.
                </p>
              )}

            </form>
          </div>

          <div className="max-w-[560px]">
            <h2 className="text-3xl lg:text-4xl font-light leading-tight text-[#8E7563] tracking-wide mb-10">
              Garanta acesso ao tour
              <br />
              com o Óculos Insider
              <br />
              e descubra o Flag
              <br />
              em primeira mão.
            </h2>

            <p className="text-neutral-600 leading-relaxed text-lg">
              Preencha o formulário para receber o material completo,
              incluindo todas as plantas, e agendar sua experiência
              imersiva com nossa equipe!
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}

function Input({
  name,
  placeholder,
  value,
  onChange,
}: {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full
        bg-[#F5F3F1]
        rounded-full
        px-6
        py-4
        text-neutral-700
        placeholder:text-neutral-400
        focus:outline-none
        focus:ring-2
        focus:ring-[#CBB6A1]
        transition
      "
      required
    />
  );
}