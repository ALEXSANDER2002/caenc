"use client"

import { useEffect } from "react"

export default function FirstVisitDetector() {
  useEffect(() => {
    // Verificar se é a primeira visita
    const isFirstVisit = !localStorage.getItem("hasVisitedBefore")

    // Se for a primeira visita, definir a flag
    if (isFirstVisit) {
      localStorage.setItem("hasVisitedBefore", "true")

      // Também podemos disparar um evento personalizado que outros componentes podem escutar
      const firstVisitEvent = new CustomEvent("firstVisit")
      window.dispatchEvent(firstVisitEvent)

      console.log("Primeira visita detectada!")
    }
  }, [])

  // Este componente não renderiza nada visualmente
  return null
}
