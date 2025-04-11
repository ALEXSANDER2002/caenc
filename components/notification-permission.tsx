"use client"

import { useState, useEffect } from "react"
import { Bell, BellOff } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotificationPermission() {
  const [permission, setPermission] = useState<NotificationPermission | "default">("default")
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    // Verificar se o navegador suporta notificações
    if (!("Notification" in window)) {
      return
    }

    // Verificar o status atual da permissão
    setPermission(Notification.permission)

    // Detectar se é um dispositivo móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    // Verificar se é a primeira visita
    const isFirstVisit = !localStorage.getItem("notificationFirstVisit")

    // Marcar como visitado
    if (isFirstVisit) {
      localStorage.setItem("notificationFirstVisit", "true")
    }

    // Mostrar o prompt se o usuário ainda não decidiu
    if (Notification.permission === "default") {
      // Verificar se o usuário já fechou o prompt antes
      const promptDismissed = localStorage.getItem("notificationPromptDismissed")
      if (!promptDismissed) {
        // Se for mobile e primeira visita, mostrar após o prompt de instalação (2 segundos)
        if (isMobile && isFirstVisit) {
          setTimeout(() => {
            setShowPrompt(true)
          }, 2000)
        } else {
          // Caso contrário, mostrar após 5 segundos
          setTimeout(() => {
            setShowPrompt(true)
          }, 5000)
        }
      }
    }
  }, [])

  const requestPermission = async () => {
    try {
      const result = await Notification.requestPermission()
      setPermission(result)
      setShowPrompt(false)

      if (result === "granted") {
        // Registrar para receber notificações push
        registerForPushNotifications()
      }
    } catch (error) {
      console.error("Erro ao solicitar permissão:", error)
    }
  }

  const registerForPushNotifications = async () => {
    if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
      return
    }

    try {
      const registration = await navigator.serviceWorker.ready

      // Obter a assinatura existente ou criar uma nova
      let subscription = await registration.pushManager.getSubscription()

      if (!subscription) {
        // Criar uma nova assinatura
        // Nota: Em um ambiente real, você precisaria de uma chave pública VAPID
        const publicVapidKey = "BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U"

        subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
        })

        // Enviar a assinatura para o servidor
        // Em um app real, você enviaria isso para seu backend
        console.log("Assinatura de push criada:", JSON.stringify(subscription))
      }
    } catch (error) {
      console.error("Erro ao registrar para notificações push:", error)
    }
  }

  const dismissPrompt = () => {
    setShowPrompt(false)
    // Armazenar a preferência do usuário por 7 dias
    localStorage.setItem("notificationPromptDismissed", Date.now().toString())
  }

  // Função auxiliar para converter a chave VAPID para o formato correto
  function urlBase64ToUint8Array(base64String: string) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/")

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }

  if (!showPrompt || permission !== "default") return null

  return (
    <div className="fixed bottom-20 left-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-gov-gray-200 z-50 md:left-auto md:right-4 md:bottom-4 md:max-w-sm">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-gov-blue-900 flex items-center">
          <Bell className="h-5 w-5 mr-2 text-gov-blue-500" />
          Receber notificações
        </h3>
        <button onClick={dismissPrompt} className="text-gov-gray-500 hover:text-gov-gray-700">
          <BellOff className="h-5 w-5" />
        </button>
      </div>

      <p className="text-sm text-gov-gray-600 mb-4">
        Receba notificações sobre novos eventos, notícias e atualizações importantes do CAENC.
      </p>

      <div className="flex space-x-3">
        <Button onClick={requestPermission} className="flex-1 bg-gov-blue-500 hover:bg-gov-blue-600 text-white">
          Permitir
        </Button>
        <Button onClick={dismissPrompt} variant="outline" className="flex-1 border-gov-gray-300 text-gov-gray-700">
          Agora não
        </Button>
      </div>
    </div>
  )
}
