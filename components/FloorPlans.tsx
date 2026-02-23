"use client";

import Image from "next/image";
import Container from "./Container";
import useEmblaCarousel from "embla-carousel-react";

const floorPlans = [
  "/images/PLANTA1.png",
  "/images/PLANTA2.png",
  "/images/PLANTA3.png",
  "/images/PLANTA4.png",
  "/images/PLANTA5.png",
  "/images/PLANTA6.png",
  "/images/PLANTA7.png",
  "/images/PLANTA8.png",
  "/images/PLANTA9.png",
  "/images/PLANTA10.png",
  "/images/PLANTA11.png",

];

export default function FloorPlans() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: true,
  });

  return (
    <section className="bg-[#CBB6A1] py-24 text-white">
      <Container>

        {/* CARROSSEL */}
        <div className="mb-24">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-[10px]">

              {floorPlans.map((src, index) => (
                <div
                  key={index}
                  className="flex-[0_0_85%] lg:flex-[0_0_55%] flex justify-center"
                >
                  <Image
                    src={src}
                    alt={`Planta ${index + 1}`}
                    width={1200}
                    height={800}
                    className="h-auto max-h-[450px] w-auto object-contain"
                  />
                </div>
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

            <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
              Ver exemplos de plantas!
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

      </Container>
    </section>
  );
}