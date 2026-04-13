import { Award } from "lucide-react"

export function CertificationsSection() {
  return (
    <section id="certificacoes" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Certificações
          </h2>
          <p className="text-muted-foreground">
            Credenciais validadas pelo Microsoft Learn
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-2xl bg-muted border-2 border-dashed border-border flex items-center justify-center mb-4 shadow-sm">
                <Award className="w-10 h-10 text-muted-foreground/50" />
              </div>
              <span className="text-sm text-muted-foreground">
                Certificação {index}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
