import { AlertTriangle, Users, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CaseStudySection() {
  return (
    <section id="case" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-center mb-4">
          Case: Sistema Inteligente de Retenção e Priorização de Leads Omnichannel
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Um projeto completo de ponta a ponta, da identificação do problema à implementação da solução
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bloco A - O Problema */}
          <Card className="bg-card border-border shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">
                O Problema
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                A equipe de vendas B2B enfrentava uma alta taxa de perda de leads e um CAC
                (Custo de Aquisição de Cliente) elevado. O principal gargalo era a falta de
                um sistema inteligente de priorização de contatos, resultando em esforços
                dispersos e oportunidades perdidas para a concorrência.
              </p>
            </CardContent>
          </Card>

          {/* Bloco B - A Gestão */}
          <Card className="bg-card border-border shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">
                Gestão do projeto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizei a Matriz de Esforço x Impacto para
                priorizar o desenvolvimento de um Score de Intenção de Compra, garantindo
                o desenvolvimento de itens de maior relevância logo no começo do projeto.
              </p>
              {/* Imagem da Matriz */}
              <div className="w-full mt-2 overflow-hidden rounded-lg border border-border shadow-sm">
                <img 
                src="/dynamics-365/matriz-esforco-impacto.png" 
                alt="Matriz de Esforço x Impacto mostrando projetos priorizados" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CardContent>
          </Card>

          {/* Bloco C - A Solução */}
          <Card className="bg-card border-border shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">
                A Solução
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Desenvolvi uma solução que une Machine Learning e CRM para resolver a dor
                do negócio. O modelo preditivo analisa dados comportamentais dos leads e
                gera um score de intenção de compra em tempo real, integrado diretamente
                ao Dynamics 365 Sales, permitindo que vendedores priorizem os contatos
                com maior probabilidade de conversão.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
