"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Tipo para o evento BeforeInstallPromptEvent
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>
}

export default function PWAInstallPrompt() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    // Registrar o service worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("Service Worker registrado com sucesso:", registration)
          })
          .catch((error) => {
            console.log("Falha ao registrar o Service Worker:", error)
          })
      })
    }

    // Detectar se é um dispositivo móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    // Verificar se é a primeira visita
    const isFirstVisit = !localStorage.getItem("hasVisitedBefore")

    // Marcar como visitado
    if (isFirstVisit) {
      localStorage.setItem("hasVisitedBefore", "true")
    }

    // Capturar o evento beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevenir o comportamento padrão do Chrome
      e.preventDefault()
      // Armazenar o evento para uso posterior
      setInstallPrompt(e as BeforeInstallPromptEvent)

      // Verificar se o usuário já fechou o prompt antes
      const promptDismissed = localStorage.getItem("pwaPromptDismissed")

      if (!promptDismissed) {
        // Se for mobile e primeira visita, mostrar imediatamente
        if (isMobile && isFirstVisit) {
          setShowPrompt(true)
        } else {
          // Caso contrário, mostrar após 3 segundos
          setTimeout(() => {
            setShowPrompt(true)
          }, 3000)
        }
      }
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstall = async () => {
    if (!installPrompt) return

    // Mostrar o prompt de instalação
    await installPrompt.prompt()

    // Aguardar a escolha do usuário
    const choiceResult = await installPrompt.userChoice

    if (choiceResult.outcome === "accepted") {
      console.log("Usuário aceitou a instalação")
    } else {
      console.log("Usuário recusou a instalação")
    }

    // Limpar o prompt
    setInstallPrompt(null)
    setShowPrompt(false)
  }

  const dismissPrompt = () => {
    setShowPrompt(false)
    // Armazenar a preferência do usuário por 7 dias
    localStorage.setItem("pwaPromptDismissed", Date.now().toString())
  }

  if (!showPrompt) return null

  return (
    <div className="fixed bottom-20 left-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-gov-gray-200 z-50 md:left-auto md:right-4 md:bottom-4 md:max-w-sm">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-gov-blue-900">Instalar o App CAENC</h3>
        <button onClick={dismissPrompt} className="text-gov-gray-500 hover:text-gov-gray-700">
          <X className="h-5 w-5" />
        </button>
      </div>

      <p className="text-sm text-gov-gray-600 mb-4">
        Instale o aplicativo CAENC para acesso rápido e offline a todas as funcionalidades.
      </p>

      <div className="flex space-x-3">
        <Button onClick={handleInstall} className="flex-1 bg-gov-blue-500 hover:bg-gov-blue-600 text-white">
          Instalar
        </Button>
        <Button onClick={dismissPrompt} variant="outline" className="flex-1 border-gov-gray-300 text-gov-gray-700">
          Agora não
        </Button>
      </div>
    </div>
  )
}
