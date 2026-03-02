import Image from "next/image";

export default function Gallery() {
  return (
    <section className="bg-white">

      {/* Header */}
      <div
        className="relative py-20 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/texture.png')" }}
      >
        <div className="absolute inset-0 bg-white/90" />
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-neutral-700 tracking-wide">
            UMA JANELA PARA O SEU FUTURO LAR
          </h2>
          <p className="mt-4 text-sm text-neutral-500">
            Navegue pela galeria e sinta a atmosfera dos espaços projetados para o seu bem-viver.
          </p>
        </div>
      </div>

      <div className="space-y-[10px]">

        {/* Linha 1 — 40% | 60% */}
        <div className="grid md:grid-cols-[40%_60%] gap-[10px]">
          <div className="relative h-[420px] md:h-[500px]">
            <Image
              src="/images/gallery-1.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-[420px] md:h-[500px]">
            <Image
              src="/images/gallery-2.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Linha 2 — 100% (IMAGEM LARGA CORRIGIDA) */}
        <div className="relative w-full aspect-[4/3] md:h-[650px]">
          <Image
            src="/images/gallery-3.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Linha 3 — 60% | 40% */}
        <div className="grid md:grid-cols-[60%_40%] gap-[10px]">
          <div className="relative h-[420px] md:h-[500px]">
            <Image
              src="/images/gallery-4.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-[420px] md:h-[500px]">
            <Image
              src="/images/gallery-5.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>

    </section>
  );
}