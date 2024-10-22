import { FaRegNoteSticky } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex items-center h-[calc(100vh-4rem)] bg-gray-800 text-white">
      <div className="flex flex-col items-center justify-center w-full">
      <h1 className="font-bold text-2xl ">Portfólio Acadêmico: Documentando o Progresso</h1>
      <p className="text-center mt-[2rem] w-[50rem]">Bem-vindos ao nosso projeto de Portfólio Acadêmico, uma iniciativa que visa documentar e celebrar os trabalhos realizados pelos alunos ao longo de sua trajetória na faculdade. Este portfólio é uma coleção abrangente das atividades acadêmicas, projetos, artigos, e outras produções que refletem o desenvolvimento e as conquistas dos estudantes.</p>
      <p className="text-center mt-[2rem] w-[50rem]">Cada seção do portfólio foi cuidadosamente organizada para apresentar os trabalhos de forma clara e coesa, facilitando a compreensão do percurso acadêmico dos alunos. Esperamos que este projeto inspire outros estudantes e demonstre o valor do esforço e dedicação investidos em cada trabalho apresentado.</p>
      <div className="w-full">
      <p className="mt-[2rem] ml-[0.5rem]">A seguir, apresentamos um resumo dos Checkpoints, do Challenger e da Global Solution, atividades essenciais do nosso semestre:</p>
      </div>
      </div>
    </main>
  );
}
