import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      href: "https://github.com/seu-usuario",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/seu-perfil",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:seu-email@email.com",
      icon: Mail,
      label: "E-mail",
    },
  ]

  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Emanuela. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
