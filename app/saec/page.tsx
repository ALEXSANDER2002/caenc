import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Calendar, Users, ChevronRight, CheckCircle } from "lucide-react"

export default function SAECPage() {
  // Dados simulados para a programação da SAEC
  const schedule = [
    {
      day: "Segunda-feira, 15/05",
      events: [
        {
          id: 1,
          title: "Cerimônia de Abertura",
          time: "09:00 - 10:30",
          location: "Auditório Central",
          speaker: "Prof. Dr. João Silva",
        },
        {
          id: 2,
          title: "Palestra: O Futuro da IA",
          time: "11:00 - 12:30",
          location: "Auditório Central",
          speaker: "Dra. Maria Santos",
        },
        {
          id: 3,
          title: "Workshop: Introdução ao Machine Learning",
          time: "14:00 - 17:00",
          location: "Laboratório 2",
          speaker: "Eng. Pedro Costa",
        },
      ],
    },
    {
      day: "Terça-feira, 16/05",
      events: [
        {
          id: 4,
          title: "Palestra: Segurança Cibernética",
          time: "09:00 - 10:30",
          location: "Auditório Central",
          speaker: "Prof. Dr. Carlos Mendes",
        },
        {
          id: 5,
          title: "Mesa Redonda: Mercado de Trabalho",
          time: "11:00 - 12:30",
          location: "Auditório Central",
          speaker: "Diversos Convidados",
        },
        {
          id: 6,
          title: "Workshop: Desenvolvimento Web",
          time: "14:00 - 17:00",
          location: "Laboratório 3",
          speaker: "Eng. Ana Oliveira",
        },
      ],
    },
  ]

  // Dados simulados para a galeria
  const gallery = [
    {
      id: 1,
      title: "SAEC 2024",
      image: "/modern-tech-gathering.png",
    },
    {
      id: 2,
      title: "Workshop de IA",
      image: "/collaborative-ai-session.png",
    },
    {
      id: 3,
      title: "Palestra sobre IoT",
      image: "/iot-lecture-hall.png",
    },
    {
      id: 4,
      title: "Competição de Programação",
      image: "/coding-competition-focus.png",
    },
  ]

  return (
    <div className="space-y-8 py-6 animate-fade-in">
      <div className="relative overflow-hidden rounded-xl mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-gov-blue-900 to-gov-blue-700 opacity-90"></div>
        <div className="absolute inset-0 dot-pattern opacity-10"></div>
        <div className="relative py-12 px-6 text-center space-y-4 z-10">
          <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-sm font-medium mb-2 border border-white/20">
            <Calendar className="h-4 w-4 mr-2" />
            15 a 19 de Maio de 2025
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-display">SAEC 2025</h1>
          <p className="text-white/80 max-w-md mx-auto">
            Semana Acadêmica de Engenharia da Computação - O maior evento acadêmico do curso
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-sm">
              <Users className="h-4 w-4 mr-2" />
              +500 participantes
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-sm">
              <Clock className="h-4 w-4 mr-2" />5 dias de evento
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-sm">
              <MapPin className="h-4 w-4 mr-2" />
              Campus Central
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="programacao" className="w-full mt-8">
        <TabsList className="grid w-full grid-cols-3 p-1 bg-secondary rounded-xl">
          <TabsTrigger value="programacao" className="rounded-lg py-3">
            Programação
          </TabsTrigger>
          <TabsTrigger value="inscricao" className="rounded-lg py-3">
            Inscrição
          </TabsTrigger>
          <TabsTrigger value="galeria" className="rounded-lg py-3">
            Galeria
          </TabsTrigger>
        </TabsList>

        <TabsContent value="programacao" className="space-y-6 mt-6 animate-slide-up">
          <div className="space-y-6">
            {schedule.map((day, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center text-gov-blue-900">
                  <div className="h-8 w-8 rounded-full bg-gov-blue-100 flex items-center justify-center mr-3 text-gov-blue-600 font-bold">
                    {index + 1}
                  </div>
                  {day.day}
                </h2>
                <div className="space-y-3 pl-11">
                  {day.events.map((event) => (
                    <Card key={event.id} className="card-modern overflow-hidden hover-lift">
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-lg text-gov-blue-900">{event.title}</CardTitle>
                        <CardDescription className="flex items-center">
                          <Users className="h-3.5 w-3.5 mr-1.5 text-gov-gray-400" />
                          {event.speaker}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div className="space-y-1.5">
                            <div className="flex items-center text-sm text-gov-gray-600">
                              <Clock className="h-4 w-4 mr-1.5 text-gov-blue-500" />
                              {event.time}
                            </div>
                            <div className="flex items-center text-sm text-gov-gray-600">
                              <MapPin className="h-4 w-4 mr-1.5 text-gov-blue-500" />
                              {event.location}
                            </div>
                          </div>
                          <Button size="sm" className="mt-3 sm:mt-0 button-outline">
                            Detalhes
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="inscricao" className="space-y-6 mt-6 animate-slide-up">
          <Card className="card-modern overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-gov-blue-500 to-gov-blue-400"></div>
            <CardHeader>
              <CardTitle className="text-gov-blue-900 font-display">Inscrição para a SAEC 2025</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo para se inscrever nos eventos da SAEC 2025.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gov-gray-700">
                    Nome Completo
                  </label>
                  <input id="name" className="input-modern" placeholder="Digite seu nome completo" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gov-gray-700">
                    E-mail
                  </label>
                  <input id="email" type="email" className="input-modern" placeholder="Digite seu e-mail" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="registration" className="text-sm font-medium text-gov-gray-700">
                    Matrícula
                  </label>
                  <input id="registration" className="input-modern" placeholder="Digite sua matrícula" />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-gov-gray-700">Eventos de Interesse</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {schedule
                      .flatMap((day) => day.events)
                      .map((event) => (
                        <div
                          key={event.id}
                          className="flex items-center p-3 border border-gov-gray-200 rounded-lg hover:bg-gov-gray-50 transition-colors"
                        >
                          <input
                            type="checkbox"
                            id={`event-${event.id}`}
                            className="h-4 w-4 text-gov-blue-500 border-gov-gray-300 rounded focus:ring-gov-blue-500 mr-3"
                          />
                          <label htmlFor={`event-${event.id}`} className="text-sm flex flex-col">
                            <span className="font-medium text-gov-gray-800">{event.title}</span>
                            <span className="text-xs text-gov-gray-500">
                              {event.time} • {event.location}
                            </span>
                          </label>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="pt-3">
                  <Button className="w-full button-primary">Inscrever-se</Button>
                  <p className="text-xs text-center text-gov-gray-500 mt-3">
                    Ao se inscrever, você concorda com os termos e condições do evento.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="bg-gov-blue-50 rounded-xl p-5 border border-gov-blue-100">
            <h3 className="font-medium text-gov-blue-900 mb-3 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-gov-blue-500" />
              Benefícios da Inscrição
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-gov-blue-100 flex items-center justify-center text-gov-blue-600 text-xs mr-2 mt-0.5">
                  1
                </span>
                <span className="text-sm text-gov-gray-700">Certificado de participação para horas complementares</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-gov-blue-100 flex items-center justify-center text-gov-blue-600 text-xs mr-2 mt-0.5">
                  2
                </span>
                <span className="text-sm text-gov-gray-700">Material exclusivo dos workshops e palestras</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-gov-blue-100 flex items-center justify-center text-gov-blue-600 text-xs mr-2 mt-0.5">
                  3
                </span>
                <span className="text-sm text-gov-gray-700">Networking com profissionais e empresas do setor</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-gov-blue-100 flex items-center justify-center text-gov-blue-600 text-xs mr-2 mt-0.5">
                  4
                </span>
                <span className="text-sm text-gov-gray-700">Kit do participante com brindes exclusivos</span>
              </li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="galeria" className="mt-6 animate-slide-up">
          <div className="grid grid-cols-2 gap-4">
            {gallery.map((item) => (
              <div key={item.id} className="space-y-2 group cursor-pointer">
                <div className="relative aspect-video overflow-hidden rounded-lg shadow-sm hover-lift">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/90 backdrop-blur-sm text-gov-blue-900 border-white"
                    >
                      Ver mais
                    </Button>
                  </div>
                </div>
                <p className="text-sm font-medium text-gov-blue-900">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="button-outline">
              Ver galeria completa
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
