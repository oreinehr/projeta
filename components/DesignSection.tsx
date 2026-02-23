import Image from "next/image";
import Container from "./Container";

export default function DesignSection() {
  return (
    <section className="grid lg:grid-cols-2">
      
      {/* Bloco esquerdo — Texto */}
      <div className="bg-[#CBB6A1] flex items-center h-[600px]">
        <Container>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-white leading-tight">
            O DESIGN <br />
            QUE <br />
            ACOLHE
          </h2>
        </Container>
      </div>

      {/* Bloco direito — Imagem */}
      <div className="relative h-[600px]">
        <Image
          src="/images/3.png"
          alt="Interior Flag"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="bg-[#EAE3DD] flex items-center h-[600px]">
               <Container>
                 <p className="text-base lg:text-lg text-neutral-700 leading-relaxed max-w-md">
                   Assinado por Goulart e Pedrasani, o Flag Residences é uma interpretação
                   contemporânea da arquitetura de Gramado, que respeita a memória e projeta
                   o futuro. Sua forma curva abraça a esquina em um gesto de gentileza urbana,
                   dissolvendo as fronteiras entre o espaço privado e a vida da cidade.
                 </p>
               </Container>
             </div>

      {/* Bloco direito — Imagem */}
      <div className="relative h-[600px]">
        <Image
          src="/images/3.png"
          alt="Interior Flag"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

    </section>
  );
}