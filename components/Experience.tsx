import Image from "next/image";
import Container from "./Container";

export default function Experience() {
  return (
    <section className="relative py-28 bg-[#F4F1EE] overflow-hidden">

      {/* TEXTURA SOBRE O FUNDO */}
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none">
        <Image
          src="/images/texture.png"
          alt="Textura"
          fill
          className="object-cover"
        />
      </div>

      <Container>
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">

          {/* TEXTO */}
          <div className="max-w-[560px]">
            <h2 className="text-4xl lg:text-5xl font-light leading-tight text-neutral-800 mb-8">
              A EXPERIÊNCIA INSIDER:
              <br />
              SINTA O FLAG
              <br />
              ANTES DE TODOS.
            </h2>

            <div className="space-y-6 text-neutral-600 leading-relaxed">
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
          <div className="relative flex justify-center">

            {/* Prédio */}
            <div className="relative w-[520px] h-[360px]">
              <Image
                src="/images/predio2.png"
                alt="Empreendimento"
                fill
                className="object-cover"
              />
            </div>

            {/* Headset */}
            <div className="absolute -top-16 right-0 w-[500px]">
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
      </Container>
    </section>
  );
}