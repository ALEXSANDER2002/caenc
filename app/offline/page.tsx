"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WifiOff, RefreshCw } from "lucide-react"

export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <div className="bg-gov-gray-100 p-6 rounded-full mb-6">
        <WifiOff className="h-12 w-12 text-gov-blue-500" />
      </div>

      <h1 className="text-2xl font-bold text-gov-blue-900 mb-2">Você está offline</h1>

      <p className="text-gov-gray-600 mb-6 max-w-md">
        Não foi possível conectar à internet. Algumas funcionalidades podem estar indisponíveis até que a conexão seja
        restabelecida.
      </p>

      <div className="space-y-4 w-full max-w-xs">
        <Button
          onClick={() => window.location.reload()}
          className="w-full bg-gov-blue-500 hover:bg-gov-blue-600 flex items-center justify-center"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Tentar novamente
        </Button>

        <Button asChild variant="outline" className="w-full border-gov-blue-500 text-gov-blue-500">
          <Link href="/">Voltar para a página inicial</Link>
        </Button>
      </div>

      <div className="mt-8 text-sm text-gov-gray-500">
        <p>Você pode acessar conteúdos previamente visitados no modo offline.</p>
      </div>
    </div>
  )
}
