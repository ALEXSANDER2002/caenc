"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, Calendar, Users, MessageSquare, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function DesktopNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "SAEC", href: "/saec", icon: Calendar },
    { name: "Avaliação", href: "/avaliacao", icon: Users },
    { name: "Eventos", href: "/eventos", icon: Calendar },
    { name: "Contato", href: "/contato", icon: MessageSquare },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="hidden lg:block">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed top-4 right-4 z-50 p-2 rounded-full shadow-md border transition-all duration-300",
          scrolled ? "bg-white border-gov-gray-200" : "bg-white/90 backdrop-blur-sm border-gov-gray-100",
          isOpen ? "rotate-90" : "rotate-0",
        )}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen ? <X className="h-6 w-6 text-gov-blue-900" /> : <Menu className="h-6 w-6 text-gov-blue-900" />}
      </button>

      {/* Sidebar navigation */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full bg-white shadow-xl z-40 w-72 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="p-6 border-b border-gov-gray-200 bg-gradient-to-br from-gov-blue-50 to-white">
          <div className="flex items-center space-x-3">
            <div className="flex">
              <div className="w-1 h-8 bg-gov-blue-900 mr-0.5 rounded-full"></div>
              <div className="w-1 h-8 bg-gov-yellow mr-0.5 rounded-full"></div>
              <div className="w-1 h-8 bg-gov-green mr-2 rounded-full"></div>
            </div>
            <div>
              <h2 className="text-gov-blue-900 font-bold text-lg font-display">CAENC</h2>
              <p className="text-gov-gray-600 text-xs">Centro Acadêmico de Engenharia da Computação</p>
            </div>
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center p-3 rounded-lg transition-all duration-200",
                      isActive
                        ? "bg-gov-blue-50 text-gov-blue-900 shadow-sm"
                        : "text-gov-gray-600 hover:bg-gov-gray-50 hover:text-gov-blue-700",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className={cn("h-5 w-5 mr-3", isActive ? "text-gov-blue-500" : "text-gov-gray-400")} />
                    <span className="font-medium">{item.name}</span>
                    {isActive && <ChevronRight className="h-4 w-4 ml-auto text-gov-blue-400" />}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-8 pt-6 border-t border-gov-gray-200">
            <div className="bg-gov-blue-50 rounded-lg p-4">
              <h3 className="font-medium text-gov-blue-900 mb-2">Acesse também</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://portal.gov.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gov-blue-700 hover:text-gov-blue-900"
                  >
                    <span className="w-1.5 h-1.5 bg-gov-blue-500 rounded-full mr-2"></span>
                    Portal Gov.br
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-sm text-gov-blue-700 hover:text-gov-blue-900">
                    <span className="w-1.5 h-1.5 bg-gov-blue-500 rounded-full mr-2"></span>
                    Portal da Universidade
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-xs text-gov-gray-500">
          <p>© 2025 CAENC - Todos os direitos reservados</p>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
