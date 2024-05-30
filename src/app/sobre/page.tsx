import { FaJava, FaPython, FaPhp } from 'react-icons/fa6'
import IconCard from '@/components/IconCard'
import {
  TbBrandJavascript,
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
    <section className="flex flex-col gap-4 pb-12 text-white">
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
      <div className="mt-4 grid max-w-[1024px] grid-cols-1">
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
            <IconCard
              title="PHP"
              icon={FaPhp}
              color="#787CB4"
              aria-label="Linguagem PHP"
            />
          </ul>
        </div>
      </div>
    </section>
  )
}
