import { Monitor } from "lucide-react"

export function InterfaceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent mb-6">
            <Monitor className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Interface Funcional no Dynamics 365
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            O resultado final é uma experiência integrada ao dia a dia do vendedor. O score gerado pela IA 
            aparece diretamente na tela do Dynamics 365 Sales através de <strong className="text-foreground">campos personalizados</strong> e 
            <strong className="text-foreground"> regras de negócio</strong> que destacam visualmente os leads mais quentes, 
            permitindo uma tomada de decisão ágil e baseada em dados.
          </p>
        </div>

        {/* Placeholder para vídeo/GIF */}
        <div className="w-full aspect-video bg-muted rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center shadow-sm">
          <Monitor className="w-12 h-12 text-muted-foreground/50 mb-4" />
          <span className="text-muted-foreground font-medium">
            Inserir Vídeo/GIF do Dynamics 365
          </span>
          <span className="text-sm text-muted-foreground/70 mt-1">
            Demonstração do sistema funcionando
          </span>
        </div>
      </div>
    </section>
  )
}
