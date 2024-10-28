import Image from "next/image";
 
export default function Global() {
  return (
    <>
      <main className="bg-gray-800 text-white w-full h-full flex flex-col justify-center gap-3 items-center">
        <div className="w-full">
          <p className="ml-[0.5rem] mt-[5rem]">
            Dê uma olhada em nosso projeto realizado para a Global Solution,
            onde criamos a PROS:
          </p>
        </div>
        <Image
          src="/gs-1.png"
          alt="gs 1"
          width={600}
          height={300}
          className="mt-[1.5rem]"
        />
        <Image
          src="/gs-2.png"
          alt="gs 2"
          width={600}
          height={300}
          className="mt-[1.5rem]"
        />
        <Image
          src="/gs-3.png"
          alt="gs 3"
          width={600}
          height={300}
          className="mt-[1.5rem]"
        />
        <div className="w-full">
          <p className="ml-[0.5rem] mt-[5rem]">
            Confira tambem o projeto ReciclaBolsa feito por Paulo Henrique, Jennifer e Davi:
          </p>
        </div>
        <Image
          src="/gs-4.png"
          alt="gs 4"
          width={600}
          height={300}
          className="mt-[1.5rem] mb-[2rem]"
        />
      </main>
    </>
  );
}
 