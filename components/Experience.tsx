import Image from "next/image";
import Container from "./Container";

export default function Experience() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#F4F1EE] overflow-hidden">

      {/* TEXTURA */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <Image
          src="/images/texture.png"
          alt="Textura"
          fill
          className="object-cover"
        />
      </div>

      <Container>
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* TEXTO */}
          <div className="max-w-[560px] mx-auto lg:mx-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-neutral-800 mb-6 lg:mb-8">
              A EXPERIÊNCIA INSIDER:
              <br />
              SINTA O FLAG
              <br />
              ANTES DE TODOS.
            </h2>

            <div className="space-y-5 lg:space-y-6 text-neutral-600 leading-relaxed text-sm sm:text-base">
              <p>
                A Projeta inova mais uma vez. Com o Insider, nossa
                plataforma de realidade virtual, você não apenas vê
                o Flag: você entra nele.
              </p>

              <p>
                Caminhe pelos ambientes, sinta as dimensões do espaço
                e aprecie a vista da sua futura janela meses antes
                da entrega.
              </p>

              <p className="font-medium text-neutral-700">
                Uma imersão completa e exclusiva.
              </p>
            </div>
          </div>

          {/* IMAGENS */}
          <div className="relative flex justify-center mt-12 lg:mt-0">

            {/* Wrapper fluido */}
            <div className="relative w-full max-w-[520px] aspect-[4/3]">

              {/* Prédio */}
              <Image
                src="/images/predio2.png"
                alt="Empreendimento"
                fill
                className="object-cover"
              />

              {/* Headset */}
              <div className="absolute -top-8 sm:-top-12 lg:-top-16 right-0 w-[75%] sm:w-[80%] lg:w-[500px]">
                <Image
                  src="/images/OculosVR1.png"
                  alt="Headset VR"
                  width={1000}
                  height={900}
                  className="w-full h-auto"
                />
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}