// Nome do cache
const CACHE_NAME = "caenc-pwa-v1"

// Arquivos para cache inicial
const urlsToCache = [
  "/",
  "/offline",
  "/manifest.json",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  "/abstract-geometric-logo.png",
  "/bustling-tech-summit.png",
  "/coding-workspace.png",
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

// Estratégia de cache: Network First, falling back to cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Se a resposta for válida, clone-a e armazene-a no cache
        if (event.request.method === "GET" && response && response.status === 200) {
          const responseToCache = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })
        }
        return response
      })
      .catch(() => {
        // Se a rede falhar, tente buscar do cache
        return caches.match(event.request).then((response) => {
          if (response) {
            return response
          }

          // Se o recurso não estiver no cache e for uma página de navegação,
          // retorne a página offline
          if (event.request.mode === "navigate") {
            return caches.match("/offline")
          }

          // Para imagens não encontradas, retorne um placeholder
          if (event.request.destination === "image") {
            return caches.match("/icons/image-placeholder.png")
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
  event.waitUntil(clients.openWindow(event.notification.data.url))
})
