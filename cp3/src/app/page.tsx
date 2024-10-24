import { FaRegNoteSticky } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Home() {
  return (
    <main className="flex items-center h-[calc(100vh-4rem)] bg-gray-800 text-white">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="font-bold text-2xl ">
          Portfólio Acadêmico: Documentando o Progresso
        </h1>
        <p className="text-center mt-[2rem] w-[50rem]">
          Bem-vindos ao nosso projeto de Portfólio Acadêmico, uma iniciativa que
          visa documentar e celebrar os trabalhos realizados pelos alunos ao
          longo de sua trajetória na faculdade. Este portfólio é uma coleção
          abrangente das atividades acadêmicas, projetos, artigos, e outras
          produções que refletem o desenvolvimento e as conquistas dos
          estudantes.
        </p>
        <p className="text-center mt-[2rem] w-[50rem]">
          Cada seção do portfólio foi cuidadosamente organizada para apresentar
          os trabalhos de forma clara e coesa, facilitando a compreensão do
          percurso acadêmico dos alunos. Esperamos que este projeto inspire
          outros estudantes e demonstre o valor do esforço e dedicação
          investidos em cada trabalho apresentado.
        </p>
        <div className="w-full">
          <p className="mt-[2rem] ml-[0.5rem]">
            A seguir, apresentamos um resumo dos Checkpoints, do Challenger e da
            Global Solution, atividades essenciais do nosso semestre:
          </p>
        </div>
        <div className="w-full pr-[8rem] mt-[1.5rem] flex items-center gap-3">
          <div className="w-[6rem] h-[6rem]">
            <FaRegNoteSticky className="w-[6rem] h-[6rem]" />
          </div>
          <p>
            Os checkpoints são provas realizadas três vezes por semestre,
            projetadas para avaliar o progresso dos alunos e verificar o quanto
            de conhecimento foi consolidado ao longo do período em relação aos
            conteúdos abordados. Essas provas ajudam a garantir que os alunos
            estejam acompanhando o ritmo do curso e se preparando adequadamente
            para os desafios futuros.
          </p>
        </div>
        <div className="w-full mt-[1.5rem] pl-[8rem] flex items-center gap-3">
          <p className="text-end">
            O challenge, por sua vez, é um projeto prático que os alunos
            desenvolvem ao longo do semestre, com duas entregas previstas. A
            estrutura desse trabalho permite que os estudantes recebam
            feedbacks, façam ajustes e aprimoramentos entre as entregas,
            promovendo o refinamento das habilidades e o aprofundamento do
            aprendizado. No total, são quatro entregas anuais, cada uma com um
            nível de exigência crescente.
          </p>
          <div className="w-[6rem] h-[6rem]">
            <TbTargetArrow className="w-[6rem] h-[6rem]" />
          </div>
        </div>
        <div className="w-full pr-[8rem] mt-[1.5rem] flex items-center gap-3">
          <div className="w-[6rem] h-[6rem]">
            <AiOutlineGlobal className="w-[6rem] h-[6rem]" />
          </div>
          <p>
            A global solution é um projeto final de maior escala, entregue no
            término de cada semestre, com foco na integração dos conhecimentos
            adquiridos em diversas disciplinas. Ele exige que os alunos apliquem
            uma abordagem interdisciplinar para resolver um problema mais
            complexo e abrangente, promovendo uma visão holística e consolidando
            os aprendizados em um cenário prático.
          </p>
        </div>
      </div>
    </main>
  );
}
