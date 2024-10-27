import Image from "next/image";

export default function Checkpoint() {
  return (
    <>
      <main className="flex flex-col justify-center items-center h-[calc(100vh-4rem)] bg-gray-800 text-white">
        <div className="flex flex-col justify-center w-full">
          <p className="ml-[0.5rem]">
            Confira a seguir o ultimo CheckPoint realizado por Gustavo Camargo,
            Rodrigo Sousa e Leonardo Cesar:
          </p>
        </div>
        <Image
          src="/checkpoint-1.png"
          alt="Checkpoint 1"
          width={600}
          height={300}
          className="mt-[1.5rem]"
        />
        <Image
          src="/checkpoint-2.png"
          alt="Checkpoint 1"
          width={600}
          height={300}
          className="mt-[1.5rem]"
        />
      </main>
    </>
  );
}