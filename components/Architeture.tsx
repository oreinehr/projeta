import Image from "next/image";
import Container from "./Container";

export default function Architecture() {
  return (
    <section className="grid lg:grid-cols-2">
      
      {/* COLUNA ESQUERDA — IMAGENS */}
      <div className="flex flex-col">
        
        {/* Imagem superior */}
        <div className="relative h-[500px]">
          <Image
            src="/images/1.png"
            alt="Arquitetura Flag 1"
            fill
            className="object-cover"
          />
        </div>

        {/* Imagem inferior */}
        <div className="relative h-[500px]">
          <Image
            src="/images/2.png"
            alt="Arquitetura Flag 2"
            fill
            className="object-cover"
          />
        </div>

      </div>

      {/* COLUNA DIREITA — CONTEÚDO */}
      <div className="flex flex-col">
        
        {/* Bloco título */}
        <div className="bg-[#CBB6A1] flex items-center h-[500px]">
          <Container>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-white leading-tight">
              A ARQUITETURA <br />
              QUE DIALOGA <br />
              COM A CIDADE
            </h2>
          </Container>
        </div>

        {/* Bloco texto */}
        <div className="bg-[#EAE3DD] flex items-center h-[500px]">
          <Container>
            <p className="text-base lg:text-lg text-neutral-700 leading-relaxed max-w-md">
              Assinado por Goulart e Pedrasani, o Flag Residences é uma interpretação
              contemporânea da arquitetura de Gramado, que respeita a memória e projeta
              o futuro. Sua forma curva abraça a esquina em um gesto de gentileza urbana,
              dissolvendo as fronteiras entre o espaço privado e a vida da cidade.
            </p>
          </Container>
        </div>

      </div>
    </section>
  );
}