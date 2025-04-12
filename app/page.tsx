import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, ChevronRight, ArrowRight, Clock, MapPin, Bell, ExternalLink, Users } from "lucide-react"
import NotificationPermission from "@/components/notification-permission"

export default function Home() {
  // Dados simulados para notícias e eventos
  const news = [
    {
      id: 1,
      title: "Inscrições abertas para a SAEC 2025",
      date: "10 de Abril, 2025",
      excerpt:
        "As inscrições para a Semana Acadêmica de Engenharia da Computação estão abertas. Não perca essa oportunidade!",
      tag: "Evento",
    },
    {
      id: 2,
      title: "Resultado das eleições do CAENC",
      date: "5 de Abril, 2025",
      excerpt:
        "Confira o resultado das eleições para a nova diretoria do Centro Acadêmico de Engenharia da Computação.",
      tag: "Institucional",
    },
    {
      id: 3,
      title: "Workshop de Inteligência Artificial",
      date: "1 de Abril, 2025",
      excerpt: "O CAENC promoverá um workshop sobre IA e suas aplicações na engenharia. Vagas limitadas!",
      tag: "Capacitação",
    },
  ]

  const events = [
    {
      id: 1,
      title: "SAEC 2025",
      date: "15-19 de Maio, 2025",
      time: "09:00 - 18:00",
      location: "Auditório Central",
      image: "/bustling-tech-summit.png",
    },
    {
      id: 2,
      title: "Oficina de Git e GitHub",
      date: "17 de Abril, 2025",
      time: "14:00 - 17:30",
      location: "Laboratório 2",
      image: "/coding-workspace.png",
    },
  ]

  return (
    <div className="space-y-8 py-6 animate-fade-in">
      {/* Logo section - redesigned and responsive */}
      <div className="flex justify-center mb-8 md:mb-10 mt-4 md:mt-8 px-4 lg:mt-0">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:w-full">
          <div className="card-modern p-5 sm:p-6 flex flex-col lg:flex-row lg:justify-between lg:items-center hover-lift">
            {/* Logo for mobile and desktop */}
            <div className="">
             
              <div className="flex items-center justify-center relative">
                <Image
                  src="/caencss-logo.png"
                  alt="Logo CAENC"
                  width={200}
                  height={100}
                  className="h-auto w-[200px] sm:w-[180px] md:w-[200px] lg:w-[200px]"
                />
       
              </div>
            </div>

            {/* Text content - centered on mobile, aligned left on desktop */}
            <div className="text-center lg:text-left lg:flex lg:flex-col lg:justify-center">
              <h2 className="text-gov-blue-900 font-bold text-xl sm:text-2xl font-display">CAENC</h2>
              <p className="text-gov-gray-600 text-sm">Centro Acadêmico de Engenharia da Computação</p>
              <div className="mt-2 sm:mt-3 inline-block bg-gov-gray-100 px-3 py-1 rounded-lg text-xs font-medium text-gov-gray-700 border-l-4 border-gov-blue-500">
                Desde 2022
              </div>
            </div>

            {/* Desktop-only quick links */}
            <div className="hidden lg:flex lg:space-x-4 lg:items-center">
              <Link
                href="/saec"
                className="text-gov-blue-500 hover:text-gov-blue-700 text-sm font-medium flex items-center hover:underline"
              >
                SAEC
                <ChevronRight className="h-3.5 w-3.5 ml-0.5" />
              </Link>
              <Link
                href="/eventos"
                className="text-gov-blue-500 hover:text-gov-blue-700 text-sm font-medium flex items-center hover:underline"
              >
                Eventos
                <ChevronRight className="h-3.5 w-3.5 ml-0.5" />
              </Link>
              <Link
                href="/contato"
                className="bg-gov-blue-500 hover:bg-gov-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-button hover:shadow-button-hover transition-all duration-200"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main content with responsive layout */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <section className="space-y-4 mt-8 lg:mt-0 lg:col-span-3 animate-slide-up">
          <h1 className="text-3xl sm:text-4xl font-bold text-gov-blue-900 font-display">Bem-vindo ao CAENC</h1>
          <p className="text-gov-gray-600 leading-relaxed">
            O Centro Acadêmico de Engenharia da Computação (CAENC) é a entidade representativa dos estudantes do curso
            de Engenharia da Computação. Nosso objetivo é promover a integração entre os alunos, organizar eventos
            acadêmicos e representar os interesses dos estudantes junto à universidade.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="card-modern card-accent-top p-4 hover-lift">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gov-blue-100 text-gov-blue-600 mb-3">
                <CalendarDays className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-gov-blue-900 mb-1">Eventos Acadêmicos</h3>
              <p className="text-sm text-gov-gray-600">Organizamos eventos para complementar sua formação acadêmica.</p>
            </div>

            <div className="card-modern card-accent-top p-4 hover-lift">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gov-blue-100 text-gov-blue-600 mb-3">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-gov-blue-900 mb-1">Representação Estudantil</h3>
              <p className="text-sm text-gov-gray-600">
                Representamos os interesses dos estudantes junto à universidade.
              </p>
            </div>

            <div className="card-modern card-accent-top p-4 hover-lift">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gov-blue-100 text-gov-blue-600 mb-3">
                <Bell className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-gov-blue-900 mb-1">Fique Informado</h3>
              <p className="text-sm text-gov-gray-600">
                Acompanhe as novidades e oportunidades do curso e da universidade.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4 mt-8 lg:mt-6 lg:col-span-2 animate-slide-up" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center justify-between">
            <h2 className="section-title">
              <span className="section-title-bar"></span>
              Notícias em Destaque
            </h2>
            <Link href="/noticias" className="text-gov-blue-500 text-sm flex items-center font-medium hover:underline">
              Ver todas <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="space-y-4">
            {news.map((item, index) => (
              <Card
                key={item.id}
                className="card-modern overflow-hidden border-l-4 border-l-gov-blue-500 border-t-0 border-r-0 border-b-0 hover-lift"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <CardHeader className="p-4 pb-2 bg-gov-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg text-gov-blue-900 font-display">{item.title}</CardTitle>
                      <CardDescription className="text-gov-gray-500 flex items-center mt-1">
                        <Clock className="h-3.5 w-3.5 mr-1.5 text-gov-gray-400" />
                        {item.date}
                      </CardDescription>
                    </div>
                    <span
                      className={`tag ${
                        item.tag === "Evento" ? "tag-blue" : item.tag === "Institucional" ? "tag-green" : "tag-yellow"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-3">
                  <p className="text-sm text-gov-gray-600 mb-3">{item.excerpt}</p>
                  <Link
                    href={`/noticias/${item.id}`}
                    className="text-gov-blue-500 text-sm inline-flex items-center font-medium hover:underline"
                  >
                    Ler mais <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          className="space-y-4 mt-8 lg:mt-6 lg:row-start-2 lg:col-start-3 lg:col-span-1 animate-slide-up"
          style={{ animationDelay: "200ms" }}
        >
          <div className="flex items-center justify-between">
            <h2 className="section-title">
              <span className="section-title-bar"></span>
              Próximos Eventos
            </h2>
            <Link href="/eventos" className="text-gov-blue-500 text-sm flex items-center font-medium hover:underline">
              Ver todos <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {events.map((event, index) => (
              <Card
                key={event.id}
                className="card-modern overflow-hidden hover-lift"
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="relative h-36 lg:h-44">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gov-blue-900/90 via-gov-blue-900/50 to-transparent"></div>
                  <div className="absolute top-3 left-3 bg-white rounded-lg px-3 py-1.5 shadow-md">
                    <p className="text-sm font-bold text-gov-blue-600">{event.date.split(" ")[0]}</p>
                    <p className="text-xs text-gov-gray-600">{event.date.split(" ").slice(1).join(" ")}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg font-display">{event.title}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-col space-y-2 mb-3">
                    <div className="flex items-center text-sm text-gov-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-gov-blue-500" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gov-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-gov-blue-500" />
                      {event.location}
                    </div>
                  </div>
                  <Button asChild size="sm" className="w-full button-primary">
                    <Link href={`/eventos/${event.id}`} className="flex items-center justify-center">
                      Ver detalhes
                      <ArrowRight className="h-4 w-4 ml-1.5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="card-modern p-4 mt-6 bg-gradient-to-br from-gov-blue-50 to-white">
            <h3 className="font-medium text-gov-blue-900 mb-2 flex items-center">
              <ExternalLink className="h-4 w-4 mr-1.5 text-gov-blue-500" />
              Links Úteis
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gov-blue-600 hover:text-gov-blue-800 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-gov-blue-500 rounded-full mr-2"></span>
                  Portal do Aluno
                </a>
              </li>
              <li>
                <a href="#" className="text-gov-blue-600 hover:text-gov-blue-800 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-gov-blue-500 rounded-full mr-2"></span>
                  Biblioteca Virtual
                </a>
              </li>
              <li>
                <a href="#" className="text-gov-blue-600 hover:text-gov-blue-800 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-gov-blue-500 rounded-full mr-2"></span>
                  Calendário Acadêmico
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Componente para solicitar permissão de notificações */}
      <NotificationPermission />
    </div>
  )
}
