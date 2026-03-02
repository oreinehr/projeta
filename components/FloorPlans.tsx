"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import useEmblaCarousel from "embla-carousel-react";

const floorPlans = [
  {
    thumb: "/images/PLANTA1.png",
    full: "/images/PLANTA1_FULL.jpeg",

  },
  {
    thumb: "/images/PLANTA2.png",
    full: "/images/PLANTA2_FULL.jpeg",
   
  },
  {
    thumb: "/images/PLANTA3.png",
    full: "/images/PLANTA3_FULL.jpeg",

  },
  {
    thumb: "/images/PLANTA4.png",
    full: "/images/PLANTA4_FULL.jpeg",
  
  },
  {
    thumb: "/images/PLANTA5.png",
    full: "/images/PLANTA5_FULL.jpeg",

  },
  {
    thumb: "/images/PLANTA6.png",
    full: "/images/PLANTA6_FULL.jpeg",

  },
  {
    thumb: "/images/PLANTA7.png",
    full: "/images/PLANTA7_FULL.jpeg",
    desc: "Planta 7 – Opção com lavabo.",
  },
  {
    thumb: "/images/PLANTA8.png",
    full: "/images/PLANTA8_FULL.jpeg",

  },
  {
    thumb: "/images/PLANTA9.png",
    full: "/images/PLANTA9_FULL.jpeg",

  },
  {
    thumb: "/images/PLANTA10.png",
    full: "/images/PLANTA10_FULL.jpeg",

  },
  {
    thumb: "/images/PLANTA11.png",
    full: "/images/PLANTA11_FULL.jpeg",

  },
];

export default function FloorPlans() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: true,
  });

  const [selectedPlan, setSelectedPlan] = useState<null | {
    thumb: string;
    full: string;
    desc: string;
  }>(null);

  return (
    <section className="bg-[#CBB6A1] py-24 text-white">
      <Container>

        {/* CARROSSEL */}
        <div className="mb-24">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-[10px]">
              {floorPlans.map((plan, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPlan(plan)}
                  className="flex-[0_0_85%] lg:flex-[0_0_55%] flex justify-center cursor-pointer"
                >
                  <Image
                    src={plan.thumb}
                    alt={`Planta ${index + 1}`}
                    width={1200}
                    height={800}
                    className="h-auto max-h-[450px] w-auto object-contain hover:opacity-90 transition"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CONTEÚDO 40 / 60 */}
        <div className="grid lg:grid-cols-[40%_60%] gap-[10px] items-start">
          <div>
            <h2 className="text-4xl font-light mb-8 leading-tight">
              ESPAÇOS <br />
              QUE INSPIRAM <br />
              A VIDA.
            </h2>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/555121656555?text=Ol%C3%A1!%20Quero%20acesso%20exclusivo%20ao%20Flag.%20Pode%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%20e%20valores%3F",
                  "_blank"
                )
              }
              className="mt-4 bg-white text-[#CBB6A1] border border-white px-8 py-3 rounded-full text-sm tracking-[0.08em] uppercase transition-all duration-300 hover:bg-transparent hover:text-white hover:border-white"
            >
              Quero acesso exclusivo!
            </button>
          </div>

          <div className="space-y-6 text-white/80 max-w-[500px]">
            <p>
              Indo na contramão da tendência de apartamentos compactos,
              o Flag oferece plantas inteligentes e espaçosas,
              com iluminação natural abundante e vistas espetaculares.
            </p>

            <p>
              Cada unidade foi pensada para o máximo conforto
              e funcionalidade.
            </p>
          </div>
        </div>

        {/* MODAL */}
        {selectedPlan && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    onClick={() => setSelectedPlan(null)}
  >
    <div
      className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl p-4 md:p-6 flex flex-col items-center"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setSelectedPlan(null)}
        className="absolute top-3 right-3 text-black text-xl"
      >
        ✕
      </button>

      <div className="w-full h-full flex items-center justify-center overflow-auto">
        <Image
          src={selectedPlan.full}
          alt="Planta ampliada"
          width={2000}
          height={1400}
          className="w-auto h-auto max-w-full max-h-[75vh] object-contain"
          priority
        />
      </div>

      <p className="mt-4 text-sm text-black/70 text-center">
        {selectedPlan.desc}
      </p>
    </div>
  </div>
)}
      </Container>
    </section>
  );
}