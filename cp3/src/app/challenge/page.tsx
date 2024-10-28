import Image from "next/image";

export default function Chellenge() {
  return (
    <>
      <main className="bg-gray-800 text-white w-full h-full flex flex-col justify-center gap-3 items-center">
        <div className="w-full">
          <p className="ml-[0.5rem] mt-[5rem]">
            Conheça nossas Sprints referentes ao nosso projeto da Pygital Porto,
            projeto feito por Gustavo Camargo, Rodrigo Sousa e Leonardo Cesar.
            Segue nossa última Sprint entregue:
          </p>
        </div>
        <Image
          src="/sprint-1.png"
          alt="sprint 1"
          width={600}
          height={300}
          className="mt-[1.5rem]"
        />
        <Image
          src="/sprint-2.png"
          alt="sprint 2"
          width={600}
          height={300}
          className="mt-[1.5rem]"
        />
        <Image
          src="/sprint-3.png"
          alt="sprint 3"
          width={600}
          height={300}
          className="mt-[1.5rem]"
        />
        <Image
          src="/sprint-4.png"
          alt="sprint 4"
          width={600}
          height={300}
          className="mt-[1.5rem] mb-[2rem]"
        />
        <div className="w-full">
          <p className="ml-[0.5rem]">
            Projeto FixerAI realizado por Paulo Henrique, Jennifer e Davi:
          </p>
        </div>
        <Image
          src="/sprint-5.png"
          alt="sprint 5"
          width={600}
          height={300}
          className="mt-[1.5rem] mb-[2rem]"
        />
        <Image
          src="/sprint-6.png"
          alt="sprint 6"
          width={600}
          height={300}
          className="mt-[1.5rem] mb-[2rem]"
        />
      </main>
    </>
  );
}