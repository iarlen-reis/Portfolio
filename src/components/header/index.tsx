'use client'
import { MenuIcon, XIcon } from 'lucide-react'
import LogoImage from '/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'

export default function Header() {
  const [isOpenMobile, setIsOpenMobile] = React.useState(false)

  const handleMobileMenu = () => {
    setIsOpenMobile(!isOpenMobile)
  }

  return (
    <>
      <header className="fixed left-0 right-0 z-10 w-full bg-[#011E28] p-3">
        <div className="container mx-auto flex w-full items-center justify-between">
          <Link
            href="/"
            data-testid="logo"
            aria-label="Link para a página inicial"
          >
            <Image
              src={LogoImage}
              alt="Imagem de um gato e um texto do lado direito escrito Iarlen Reis."
              width={150}
              height={500}
              priority
            />
          </Link>
          <nav className="flex items-center gap-4">
            <ul
              className={clsx(
                'absolute left-0 z-20 h-screen w-full py-8 pr-4 transition-all duration-500 ease-in md:static md:z-auto md:flex md:h-fit md:w-auto md:items-center md:bg-transparent md:py-0 md:pl-0 md:duration-0',
                {
                  'top-16 z-10 flex flex-col items-center gap-3 bg-[#011E28] md:flex-row':
                    isOpenMobile,
                  'left-[-1080px] top-16 flex flex-col gap-3 text-center md:flex-row':
                    !isOpenMobile,
                },
              )}
            >
              <li onClick={handleMobileMenu}>
                <Link
                  href="/sobre"
                  className="line-effect"
                  data-testid="about-link"
                  aria-label="Link para a página sobre"
                >
                  Sobre
                </Link>
              </li>
              <li onClick={handleMobileMenu}>
                <Link
                  href="/projetos"
                  className="line-effect"
                  data-testid="projects-link"
                  aria-label="Link para a página projetos"
                >
                  Projetos
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={handleMobileMenu}
              data-testid="menu-button"
              aria-label="Botão de abrir e fechar o menu"
            >
              {isOpenMobile ? (
                <XIcon className="size-6" data-testid="close-button" />
              ) : (
                <MenuIcon className="size-6" data-testid="open-button" />
              )}
            </button>
          </div>
        </div>
      </header>
      <div className="h-[70px] w-full"></div>
    </>
  )
}
