import { FaJava, FaPython, FaReact, FaSass } from 'react-icons/fa6'
import IconCard from '@/components/IconCard'
import {
  SiExpo,
  SiFastify,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiRadixui,
  SiSpring,
  SiSpringsecurity,
  SiStyledcomponents,
  SiTailwindcss,
} from 'react-icons/si'
import {
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandTypescript,
} from 'react-icons/tb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Sobre',
  description:
    'Conheça um pouco sobre mim e meus planos para o futuro na area de programação.',
}

export default function AboutPage() {
  const dateOfBirth = new Date(2001, 10, 11)
  const age = Math.abs(Date.now() - dateOfBirth.getTime()) / 3.15576e10

  const ageInt = Math.floor(age)
  return (
    <section className="background flex flex-col gap-4 pb-12">
      <h1 className="mt-4 text-2xl md:text-3xl">Sobre mim</h1>
      <div className="flex w-full max-w-[1024px] flex-col gap-3 text-base text-zinc-300 sm:text-lg lg:text-xl">
        <p>
          Olá, eu sou Iarlen Reis tenho {ageInt} anos e moro em Salvador, na
          Bahia. Inicie meus estudos na programação com a linguagem Python, a
          princípio para desenvolvimento de bots e automação de tarefas.
        </p>
        <p>
          Após algum tempo, comecei a me interessar por desenvolvimento web,
          onde aprendi HTML, CSS e JavaScript. Foi nesse momento que me
          apaixonei pela área e resolvi migrar de automações para o
          desenvolvimento web.
        </p>
        <p>
          Atualmente estou estudando para me tornar um desenvolvedor Full-stack,
          para atuar tanto no frontend, quanto no backend. Além disso, estou
          reaproveitando os conhecimentos adquiridos em JavaScript e React para
          aprender react native.
        </p>
      </div>
      <div className="mt-4 grid max-w-[1024px] grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-10 lg:grid-cols-4">
        <div className="flex w-fit flex-col gap-4">
          <h2 className="text-xl md:text-2xl">Linguagens</h2>
          <ul className="flex flex-wrap items-center justify-start gap-3">
            <IconCard
              color="#265c7e"
              title="Typescript"
              icon={TbBrandTypescript}
              aria-label="Linguagem Typescript"
            />
            <IconCard
              color="#f7df1e"
              title="Javascript"
              icon={TbBrandJavascript}
              aria-label="Linguagem Javascript"
            />
            <IconCard
              title="Nodejs"
              icon={TbBrandNodejs}
              color="#27ba36"
              aria-label="Linguagem Nodejs"
            />
            <IconCard
              title="Python"
              icon={FaPython}
              color="#3776AB"
              aria-label="Linguagem Python"
            />
            <IconCard
              title="Java"
              icon={FaJava}
              color="#F99916"
              aria-label="Linguagem Java"
            />
          </ul>
        </div>
        <div className="flex w-fit flex-col gap-4">
          <h2 className="text-xl md:text-2xl">Frameworks</h2>
          <ul className="flex flex-wrap items-center justify-start gap-3">
            <IconCard
              title="ReactJs"
              icon={FaReact}
              color="#61DBFB"
              aria-label="Framework React"
            />
            <IconCard
              title="NextJs"
              icon={TbBrandNextjs}
              color="#FFFFFF"
              aria-label="Framework NextJs"
            />
            <IconCard
              title="Expo"
              icon={SiExpo}
              color="#FFFFFF"
              aria-label="Framework Expo"
            />
            <IconCard
              title="Spring"
              icon={SiSpring}
              color="#6DB33F"
              aria-label="Framework Spring"
            />
            <IconCard
              title="Spring Security"
              icon={SiSpringsecurity}
              color="#6DB33F"
              aria-label="Framework Spring"
            />
            <IconCard
              title="Fastify"
              icon={SiFastify}
              color="#FFFFFF"
              aria-label="Framework Fastify"
            />
          </ul>
        </div>
        <div className="flex w-fit flex-col gap-4">
          <h2 className="text-xl md:text-2xl">Estilizações</h2>
          <ul className="flex flex-wrap items-center justify-start gap-3">
            <IconCard
              title="Tailwind"
              color="#61DBFB"
              icon={SiTailwindcss}
              aria-label="Tailwind"
            />
            <IconCard
              title="Sass"
              color="#cd6799"
              icon={FaSass}
              aria-label="Sass"
            />
            <IconCard
              title="CSS"
              color="#264de4"
              icon={TbBrandCss3}
              aria-label="CSS"
            />
            <IconCard
              color="#db086e"
              title="Styled components"
              icon={SiStyledcomponents}
              aria-label="Styled components"
            />
            <IconCard
              color="#FFFFFF"
              icon={SiRadixui}
              title="Radix UI"
              aria-label="Radix UI"
            />
          </ul>
        </div>
        <div className="flex w-fit flex-col gap-4">
          <h2 className="text-xl md:text-2xl">Database</h2>
          <ul className="flex flex-wrap items-center justify-start gap-3">
            <IconCard
              title="Mysql"
              color="#F99916"
              icon={SiMysql}
              aria-label="Banco de dados Mysql"
            />
            <IconCard
              title="Postgres"
              color="#396c94"
              icon={SiPostgresql}
              aria-label="Banco de dados Postgres"
            />
            <IconCard
              title="Mongo DB"
              icon={SiMongodb}
              color="#01ed65"
              aria-label="Banco de dados Mongo DB"
            />
            <IconCard
              title="Firebase"
              icon={SiFirebase}
              color="#ffa714"
              aria-label="Banco de dados Firebase"
            />
            <IconCard
              title="Prisma"
              icon={SiPrisma}
              color="#FFFFFF"
              aria-label="Prisma ORM"
            />
          </ul>
        </div>
      </div>
    </section>
  )
}
