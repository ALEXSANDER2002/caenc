import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, MapPin, Search, Filter, ChevronRight, ArrowRight } from "lucide-react"

export default function EventosPage() {
  // Dados simulados para eventos
  const eventos = [
    {
      id: 1,
      title: "SAEC 2025",
      date: "15-19 de Maio, 2025",
      time: "09:00 - 18:00",
      location: "Auditório Central",
      description: "Semana Acadêmica de Engenharia da Computação com palestras, workshops e competições.",
      image: "/bustling-tech-summit.png",
      tag: "Destaque",
    },
    {
      id: 2,
      title: "Workshop de Desenvolvimento Web",
      date: "25 de Abril, 2025",
      time: "14:00 - 17:00",
      location: "Laboratório 3",
      description: "Aprenda as mais recentes tecnologias de desenvolvimento web com profissionais da área.",
      image: "/coding-collaborative.png",
      tag: "Workshop",
    },
    {
      id: 3,
      title: "Oficina de Git e GitHub",
      date: "17 de Maio, 2025",
      time: "13:00 - 16:00",
      location: "Laboratório 2",
      description: "Domine o controle de versão e colaboração em projetos de software com Git e GitHub.",
      image: "/ai-lecture-hall.png",
      tag: "Palestra",
    },
    {
      id: 4,
      title: "Hackathon de Inovação",
      date: "1-2 de Junho, 2025",
      time: "09:00 - 18:00",
      location: "Centro de Inovação",
      description: "Competição de 48 horas para desenvolver soluções inovadoras para problemas reais.",
      image: "/collaborative-coding-session.png",
      tag: "Competição",
    },
    {
      id: 5,
      title: "Visita Técnica: Empresa de Tecnologia",
      date: "15 de Junho, 2025",
      time: "14:00 - 17:00",
      location: "Saída do Campus",
      description: "Visita guiada a uma empresa de tecnologia para conhecer o ambiente de trabalho e oportunidades.",
      image: "/innovative-workspace-tour.png",
      tag: "Visita",
    },
  ]

  // Eventos passados
  const eventosPast = [
    {
      id: 101,
      title: "SAEC 2024",
      date: "10-14 de Maio, 2024",
      location: "Auditório Central",
      image: "/bustling-tech-expo.png",
    },
    {
      id: 102,
      title: "Minicurso de Python",
      date: "20 de Março, 2024",
      location: "Laboratório 1",
      image: "/coding-journey.png",
    },
  ]

  return (
    <div className="space-y-8 py-6 animate-fade-in">
      <div className="text-center space-y-3 py-6">
        <div className="inline-block px-4 py-1.5 bg-gov-blue-100 rounded-full text-gov-blue-800 text-sm font-medium mb-2">
          Calendário Acadêmico
        </div>
        <h1 className="text-4xl font-bold gradient-heading font-display">Eventos</h1>
        <p className="text-gov-gray-600 max-w-md mx-auto">Confira os próximos eventos organizados pelo CAENC</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gov-gray-400" />
          <input type="text" placeholder="Buscar eventos..." className="input-modern pl-9 w-full" />
        </div>
        <Button variant="outline" className="flex items-center justify-center gap-2">
          <Filter className="h-4 w-4" />
          Filtrar
        </Button>
      </div>

      <section className="space-y-6 mt-8">
        <h2 className="section-title">
          <span className="section-title-bar"></span>
          Próximos Eventos
        </h2>
        <div className="space-y-6">
          {eventos.map((evento, index) => (
            <Card
              key={evento.id}
              className="card-modern overflow-hidden hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="md:flex">
                <div className="relative h-48 md:h-auto md:w-1/3">
                  <Image src={evento.image || "/placeholder.svg"} alt={evento.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-t"></div>
                  <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-lg px-3 py-1.5 shadow-md">
                    <p className="text-sm font-bold text-gov-blue-600">{evento.date.split(" ")[0]}</p>
                    <p className="text-xs text-gov-gray-600">{evento.date.split(" ").slice(1).join(" ")}</p>
                  </div>
                  {evento.tag && (
                    <div
                      className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-medium ${
                        evento.tag === "Destaque"
                          ? "bg-gov-blue-500 text-white"
                          : evento.tag === "Workshop"
                            ? "bg-green-100 text-green-800"
                            : evento.tag === "Palestra"
                              ? "bg-purple-100 text-purple-800"
                              : evento.tag === "Competição"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {evento.tag}
                    </div>
                  )}
                </div>
                <div className="md:w-2/3 p-5">
                  <h3 className="text-xl font-bold text-gov-blue-900 mb-2 font-display">{evento.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-3">
                    <div className="flex items-center text-sm text-gov-gray-600">
                      <Clock className="h-4 w-4 mr-1.5 text-gov-blue-500" />
                      {evento.time}
                    </div>
                    <div className="flex items-center text-sm text-gov-gray-600">
                      <MapPin className="h-4 w-4 mr-1.5 text-gov-blue-500" />
                      {evento.location}
                    </div>
                  </div>
                  <p className="text-sm text-gov-gray-600 mb-4">{evento.description}</p>
                  <Button asChild className="button-primary">
                    <Link href={`/eventos/${evento.id}`} className="flex items-center">
                      Participar
                      <ArrowRight className="h-4 w-4 ml-1.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6 mt-10">
        <h2 className="section-title">
          <span className="section-title-bar"></span>
          Eventos Passados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {eventosPast.map((evento, index) => (
            <Card
              key={evento.id}
              className="card-modern flex overflow-hidden hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 100 + 500}ms` }}
            >
              <div className="relative w-1/3">
                <Image src={evento.image || "/placeholder.svg"} alt={evento.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
              </div>
              <div className="w-2/3 p-4">
                <h3 className="font-medium text-gov-blue-900">{evento.title}</h3>
                <p className="text-sm text-gov-gray-600 flex items-center mt-1.5">
                  <CalendarDays className="h-3.5 w-3.5 mr-1.5 text-gov-blue-500" />
                  {evento.date}
                </p>
                <p className="text-sm text-gov-gray-600 flex items-center mt-1">
                  <MapPin className="h-3.5 w-3.5 mr-1.5 text-gov-blue-500" />
                  {evento.location}
                </p>
                <Button variant="link" asChild className="p-0 h-auto mt-2 text-gov-blue-500">
                  <Link href={`/eventos/${evento.id}`} className="flex items-center">
                    Ver detalhes
                    <ChevronRight className="h-3.5 w-3.5 ml-0.5" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="default" className="button-outline">
            Ver todos os eventos passados
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </section>
    </div>
  )
}
