import Image from "next/image";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      
      {/* Texture */}
      <div
        className="absolute inset-0 mix-blend-multiply opacity-20 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url('/images/texture.png')" }}
      />

      <div className="relative z-10 grid lg:grid-cols-2 items-center w-full">
        
        {/* Coluna esquerda — FULL BLEED */}
        <div className="relative w-full h-[520px] lg:h-[680px]">
          <Image
            src="/images/predio.png"
            alt="Empreendimento Flag"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Coluna direita — CONTAINER */}
        <Container className="py-32">
          <div className="space-y-12 max-w-lg">
            
            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-light tracking-wide text-neutral-700 leading-tight">
              O ENCONTRO ENTRE
              <br />
              UM TERRENO ICÔNICO
              <br />
              E UM PROJETO
              <br />
              SINGULAR
            </h1>

            <p className="text-base lg:text-lg text-neutral-600 leading-relaxed">
              A Projeta apresenta o Flag: um novo marco de design e estilo de vida
              no endereço mais desejado de Gramado.
              <br /><br />
              Um projeto com apenas 25 unidades residenciais.
            </p>

            <button className="mt-4 border border-[#CBB6A1] text-[#CBB6A1] px-8 py-3 rounded-full text-sm tracking-[0.08em] uppercase transition-all duration-300 hover:bg-[#CBB6A1] hover:text-white">
              Quero acesso exclusivo!
            </button>

          </div>
        </Container>

      </div>
    </section>
  );
}