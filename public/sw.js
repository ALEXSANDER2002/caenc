// Nome do cache
const CACHE_NAME = "caenc-pwa-v2"

// Arquivos para cache inicial
const urlsToCache = [
  "/",
  "/offline",
  "/manifest.json",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  "/CAENC LOGO.png",
  "/bustling-tech-summit.png",
  "/coding-workspace.png",
  "/styles/globals.css",
  "/app/layout.js",
  "/app/page.js",
  "/app/offline/page.js",
  "/components/bottom-navigation.js",
  "/components/desktop-navigation.js",
  "/components/theme-provider.js",
  "/components/ui/button.js",
  "/components/ui/card.js",
]

// Instalação do Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache aberto")
      return cache.addAll(urlsToCache)
    }),
  )
})

// Ativação do Service Worker
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// Estratégia de cache: Cache First, falling back to network
self.addEventListener("fetch", (event) => {
  // Ignorar requisições não-GET
  if (event.request.method !== "GET") return

  // Ignorar requisições de analytics e outras APIs
  if (event.request.url.includes("/api/") || event.request.url.includes("analytics")) {
    return
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Se encontrou no cache, retorna a resposta em cache
      if (cachedResponse) {
        return cachedResponse
      }

      // Se não encontrou no cache, tenta buscar da rede
      return fetch(event.request)
        .then((response) => {
          // Se a resposta for válida, clone-a e armazene-a no cache
          if (response && response.status === 200) {
            const responseToCache = response.clone()
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache)
            })
          }
          return response
        })
        .catch(() => {
          // Se a rede falhar e for uma página de navegação, retorne a página offline
          if (event.request.mode === "navigate") {
            return caches.match("/offline")
          }

          // Para imagens não encontradas, retorne um placeholder
          if (event.request.destination === "image") {
            return caches.match("/icons/image-placeholder.png")
          }

          // Para CSS e JS, tente retornar do cache mesmo que não seja a página solicitada
          if (event.request.destination === "style" || event.request.destination === "script") {
            return caches.match(event.request.url)
          }

          // Para outros recursos, retorne uma resposta vazia
          return new Response("", {
            status: 408,
            headers: { "Content-Type": "text/plain" },
          })
        })
    }),
  )
})

// Gerenciamento de notificações push
self.addEventListener("push", (event) => {
  const data = event.data.json()
  const options = {
    body: data.body,
    icon: "/icons/icon-192x192.png",
    badge: "/icons/badge-icon.png",
    vibrate: [100, 50, 100],
    data: {
      url: data.url || "/",
    },
  }

  event.waitUntil(self.registration.showNotification(data.title, options))
})

// Ação ao clicar na notificação
self.addEventListener("notificationclick", (event) => {
  event.notification.close()
  event.waitUntil(
    clients.matchAll({ type: "window" }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === "/" && "focus" in client) {
          return client.focus()
        }
      }
      if (clients.openWindow) {
        return clients.openWindow("/")
      }
    }),
  )
})
