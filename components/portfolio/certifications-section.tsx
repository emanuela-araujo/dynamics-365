import { Award } from "lucide-react"

export function CertificationsSection() {
  // Lista com os dados das suas certificações
  const certificacoes = [
    {
      id: 1,
      nome: "Insira o nome da certificação aqui (ex: PL-900)",
      url: "https://learn.microsoft.com/api/achievements/share/pt-br/EmanuelaArajo-4900/Q52U5MSE?sharingId=A034F7F69C4802FF"
    },
    {
      id: 2,
      nome: "Insira o nome da certificação aqui (ex: MB-210)",
      url: "https://learn.microsoft.com/api/achievements/share/pt-br/EmanuelaArajo-4900/37C2YKLH?sharingId=A034F7F69C4802FF"
    },
    {
      id: 3,
      nome: "Insira o nome da certificação aqui",
      url: "https://learn.microsoft.com/api/achievements/share/pt-br/EmanuelaArajo-4900/B9PJQW4D?sharingId=A034F7F69C4802FF"
    }
  ];

  return (
    <section id="certificacoes" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Certificados Microsoft
          </h2>
          <p className="text-muted-foreground">
            Credenciais validadas pelo Microsoft Learn
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {certificacoes.map((cert) => (
            <a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group cursor-pointer outline-none"
            >
              <div className="w-32 h-32 rounded-2xl bg-card border-2 border-border flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md group-hover:border-primary transition-all duration-300">
                <Award className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm font-medium text-foreground text-center group-hover:text-primary transition-colors px-2">
                {cert.nome}
              </span>
              <span className="text-xs text-muted-foreground mt-2 underline decoration-transparent group-hover:decoration-primary/50 transition-colors">
                Ver credencial
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
