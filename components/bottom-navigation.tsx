"use client"

import { Home, Calendar, Users, MessageSquare } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function BottomNavigation() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "SAEC", href: "/saec", icon: Calendar },
    { name: "Avaliação", href: "/avaliacao", icon: Users },
    { name: "Eventos", href: "/eventos", icon: Calendar },
    { name: "Contato", href: "/contato", icon: MessageSquare },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gov-gray-200 z-50 shadow-lg lg:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn("nav-item", isActive ? "nav-item-active" : "nav-item-inactive")}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200",
                  isActive ? "bg-gov-blue-50 scale-110" : "",
                )}
              >
                <Icon className={cn("h-5 w-5", isActive ? "text-gov-blue-500" : "")} />
              </div>
              <span
                className={cn(
                  "text-xs mt-1 font-medium transition-all duration-200",
                  isActive ? "text-gov-blue-500" : "text-gov-gray-500",
                )}
              >
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
