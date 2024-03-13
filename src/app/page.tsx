import { DownloadIcon, GithubIcon, LinkedinIcon } from 'lucide-react'
import ExternalLink from '@/components/ExternalLink'
import ProfileImage from '/public/profile.png'
import Image from 'next/image'

export default function Home() {
  return (
    <section className="flex min-h-screen grid-cols-1 flex-col gap-5 md:grid md:grid-cols-2 md:gap-20">
      <div className="mt-5 flex items-center justify-center md:mt-14 md:items-start xl:mt-20">
        <Image
          priority
          width={300}
          height={300}
          src={ProfileImage}
          alt="Image do github do desenvolvedor Iarlen Reis"
          className="size-[220px] rounded-full md:size-[250px] lg:size-[260px] xl:size-[300px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 md:mt-14 md:justify-start xl:mt-20">
        <div className="flex w-full flex-col gap-1 text-center md:text-left">
          <p className="text-xl md:text-2xl lg:text-3xl lg:tracking-wider xl:tracking-widest">
            Olá, eu sou
          </p>
          <h1 className="text-4xl font-bold drop-shadow md:mt-2 md:text-5xl lg:text-6xl lg:tracking-wider xl:tracking-widest">
            Iarlen Reis
          </h1>
          <p className="text-lg uppercase leading-relaxed tracking-wide md:mt-2 md:text-xl lg:tracking-wider xl:tracking-widest">
            Desenvolvedor Front-end
          </p>
        </div>
        <ul className="flex w-full items-center justify-center gap-5 md:justify-start">
          <ExternalLink
            icon={GithubIcon}
            href="https://github.com/iarlen-reis"
            className="hover:bg-black/50"
            aria-label="Link para o perfil do github do desenvolvedor Iarlen Reis"
          />
          <ExternalLink
            icon={LinkedinIcon}
            href="https://www.linkedin.com/in/iarlen-reis/"
            className="hover:bg-blue-500/50"
            aria-label="Link para o perfil do linkedin do desenvolvedor Iarlen Reis"
          />
          <ExternalLink
            icon={DownloadIcon}
            href="/IarlenSantosReis.pdf"
            download
            className="hover:bg-green-500/50"
            aria-label="Link para fazer o download do currículo do desenvolvedor Iarlen Reis"
          />
        </ul>
      </div>
    </section>
  )
}
