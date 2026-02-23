import Image from "next/image";
import Container from "./Container";

export default function Lifestyle() {
  return (
    <>
      {/* 🔝 Imagem preta acima (full width) */}
      <section className="relative w-full h-[500px]">
        <Image
          src="/images/lifestyle-hero.png" // sua imagem aqui
          alt="Lifestyle Flag"
          fill
          className="object-cover"
        />
      </section>

      {/* 🔽 Seção conteúdo bege */}
      <section className="bg-[#EAE3DD] py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Coluna esquerda - Título */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-700 leading-tight">
                O PRIVILÉGIO DE <br />
                VIVER O RITMO <br />
                DE GRAMADO
              </h2>
            </div>

            {/* Coluna direita - Texto */}
            <div className="text-base text-neutral-600 leading-relaxed space-y-6">
              <p>
                Existe uma grande diferença entre visitar Gramado e pertencer
                verdadeiramente a este lugar. Pertencer é sentir o ritmo da
                cidade na alma.
              </p>

              <p>
                É começar o dia com a tranquilidade do Lago Joaquina Rita Bier
                e, em uma curta caminhada, estar no centro da cultura e da
                gastronomia que fazem de Gramado um lugar único.
              </p>

              <p>
                É a liberdade de não precisar de carro para desfrutar do melhor
                da Serra. Este é o lifestyle Flag.
              </p>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}   