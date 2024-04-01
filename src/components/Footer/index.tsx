import { Copyright } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full" data-testid="footer">
      <div className="container mx-auto flex items-center justify-end px-3 py-5">
        <a
          target="_blank"
          href="https://github.com/iarlen-reis"
          aria-label="Link para o github do desenvolvedor Iarlen Reis"
          className="flex items-center gap-1.5 font-merienda text-sm italic"
        >
          <Copyright className="size-3.5" />
          <p>{new Date().getFullYear()} - Iarlen Reis</p>
        </a>
      </div>
    </footer>
  )
}
