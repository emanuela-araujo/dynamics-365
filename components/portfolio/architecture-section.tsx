import { Brain, Cog, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ArchitectureSection() {
  return (
    <section id="arquitetura" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-center mb-4">
          Arquitetura Técnica
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A solução foi construída em duas camadas principais, garantindo escalabilidade e manutenibilidade
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Camada de IA */}
          <Card className="bg-card border-border shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Camada de Inteligência Artificial
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                O modelo de Machine Learning foi desenvolvido em <strong className="text-foreground">Python</strong>, 
                utilizando técnicas de <strong className="text-foreground">Classificação</strong> e 
                <strong className="text-foreground"> Clusterização</strong> para analisar dados comportamentais 
                dos leads. O pipeline inclui feature engineering, treinamento do modelo, validação cruzada 
                e métricas de performance como AUC-ROC e Precision-Recall.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Scikit-learn para modelagem preditiva
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Pandas e NumPy para manipulação de dados
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Análise exploratória com visualizações
                </li>
              </ul>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <a
                  href="https://github.com/seu-usuario/jupyter-notebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Ver Código no GitHub (Jupyter Notebook)
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Camada de Integração */}
          <Card className="bg-card border-border shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Cog className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Camada de Integração (Azure & Power Automate)
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                O modelo foi hospedado em arquitetura <strong className="text-foreground">Serverless</strong> utilizando 
                <strong className="text-foreground"> Azure Functions</strong>, garantindo escalabilidade automática 
                e custo otimizado. A integração com o <strong className="text-foreground">Dataverse</strong> é feita 
                nativamente via Power Automate, permitindo que os scores sejam atualizados em tempo real 
                no Dynamics 365.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Azure Functions com Python runtime
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  API RESTful para comunicação
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Power Automate para orquestração de fluxos
                </li>
              </ul>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <a
                  href="https://github.com/seu-usuario/api-python"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Ver Código da API (Python)
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
