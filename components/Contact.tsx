"use client";

import Container from "./Container";

export default function InsiderForm() {
  return (
    <section className="bg-[#F4F1EE] py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* FORM CARD */}
          <div className="bg-white rounded-[32px] p-12 shadow-sm max-w-[520px]">

            <form className="space-y-6">

              <Input placeholder="Nome Completo" />
              <Input placeholder="E-mail" />
              <Input placeholder="Telefone/WhatsApp" />
              <Input placeholder="Cidade/Estado" />

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-[#CBB6A1] text-white px-10 py-3 rounded-full text-sm tracking-wide hover:opacity-90 transition"
                >
                  Enviar
                </button>
              </div>

            </form>
          </div>

          {/* TEXTO */}
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

function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
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
    />
  );
}