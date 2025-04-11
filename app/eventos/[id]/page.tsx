import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock, MapPin, Share2, Users } from "lucide-react"

// Esta é uma página dinâmica que mostra detalhes de um evento específico
export default function EventoDetalhesPage({ params }: { params: { id: string } }) {
  // Em uma aplicação real, você buscaria os dados do evento com base no ID
  // Aqui estamos simulando um evento
  const evento = {
    id: params.id,
    title: "SAEC 2025",
    date: "15-19 de Maio, 2025",
    time: "09:00 - 18:00",
    location: "Auditório Central",
    description:
      "A Semana Acadêmica de Engenharia da Computação (SAEC) é o principal evento acadêmico do curso. Durante cinco dias, os participantes terão acesso a palestras com profissionais renomados, workshops práticos, competições e oportunidades de networking com empresas do setor de tecnologia.",
    image: "/bustling-tech-summit.png",
    organizador: "CAENC - Centro Acadêmico de Engenharia da Computação",
    participantes: 120,
    programacao: [
      {
        dia: "15/05",
        atividades: [
          {
            horario: "09:00 - 10:30",
            titulo: "Cerimônia de Abertura",
            local: "Auditório Central",
          },
          {
            horario: "11:00 - 12:30",
            titulo: "Palestra: O Futuro da IA",
            local: "Auditório Central",
          },
          {
            horario: "14:00 - 17:00",
            titulo: "Workshop: Introdução ao Machine Learning",
            local: "Laboratório 2",
          },
        ],
      },
      {
        dia: "16/05",
        atividades: [
          {
            horario: "09:00 - 10:30",
            titulo: "Palestra: Segurança Cibernética",
            local: "Auditório Central",
          },
          {
            horario: "11:00 - 12:30",
            titulo: "Mesa Redonda: Mercado de Trabalho",
            local: "Auditório Central",
          },
          {
            horario: "14:00 - 17:00",
            titulo: "Workshop: Desenvolvimento Web",
            local: "Laboratório 3",
          },
        ],
      },
    ],
  }

  return (
    <div className="space-y-8 py-6">
      <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
        <Image src={evento.image || "/placeholder.svg"} alt={evento.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="inline-block px-3 py-1 bg-primary/90 rounded-lg text-white text-sm font-medium mb-3">
            {evento.date}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold">{evento.title}</h1>
          <p className="text-white/80 mt-2">Organizado por {evento.organizador}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-none shadow-md overflow-hidden">
            <div className="h-1 bg-primary/70"></div>
            <CardContent className="p-4 flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                <CalendarDays className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Data</p>
                <p className="text-sm text-muted-foreground">{evento.date}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md overflow-hidden">
            <div className="h-1 bg-primary/70"></div>
            <CardContent className="p-4 flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Horário</p>
                <p className="text-sm text-muted-foreground">{evento.time}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md overflow-hidden">
            <div className="h-1 bg-primary/70"></div>
            <CardContent className="p-4 flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Local</p>
                <p className="text-sm text-muted-foreground">{evento.location}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center bg-secondary/50 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">{evento.participantes} participantes</p>
              <p className="text-xs text-muted-foreground">Vagas limitadas</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="flex items-center">
            <Share2 className="h-4 w-4 mr-2" />
            Compartilhar
          </Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Sobre o Evento</h2>
          <p className="text-muted-foreground leading-relaxed">{evento.description}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Programação</h2>
          <div className="space-y-6">
            {evento.programacao.map((dia, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-medium flex items-center">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-primary font-bold">
                    {index + 1}
                  </div>
                  Dia {dia.dia}
                </h3>
                <div className="space-y-2 pl-10">
                  {dia.atividades.map((atividade, i) => (
                    <div key={i} className="p-4 border border-border rounded-lg hover:shadow-md transition-shadow">
                      <p className="font-medium">{atividade.titulo}</p>
                      <div className="flex flex-wrap gap-x-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-primary" />
                          {atividade.horario}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-primary" />
                          {atividade.local}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <Button size="lg" className="px-8 shadow-lg">
            Inscrever-se no Evento
          </Button>
        </div>
      </div>
    </div>
  )
}
