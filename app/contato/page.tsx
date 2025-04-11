"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Send, CheckCircle } from "lucide-react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Em uma aplicação real, você enviaria os dados para um servidor
    console.log("Dados do formulário:", formData)

    // Simular envio bem-sucedido
    setIsSubmitted(true)

    // Resetar após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
      })
    }, 3000)
  }

  return (
    <div className="space-y-8 py-6 animate-fade-in">
      <div className="text-center space-y-3 py-6">
        <div className="inline-block px-4 py-1.5 bg-gov-blue-100 rounded-full text-gov-blue-800 text-sm font-medium mb-2">
          Fale Conosco
        </div>
        <h1 className="text-4xl font-bold gradient-heading font-display">Contato</h1>
        <p className="text-gov-gray-600 max-w-md mx-auto">Entre em contato com o CAENC. Estamos aqui para ajudar!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="card-modern overflow-hidden animate-slide-up">
          <div className="h-2 bg-gradient-to-r from-gov-blue-500 to-gov-blue-400"></div>
          <CardHeader>
            <CardTitle className="text-gov-blue-900 font-display">Envie uma Mensagem</CardTitle>
            <CardDescription>Preencha o formulário abaixo para entrar em contato conosco.</CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-gov-blue-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-gov-gray-600 max-w-md">
                  Obrigado por entrar em contato. Responderemos o mais breve possível.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="font-medium text-gov-gray-700">
                    Nome
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="input-modern"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-medium text-gov-gray-700">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-modern"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="assunto" className="font-medium text-gov-gray-700">
                    Assunto
                  </Label>
                  <Input
                    id="assunto"
                    name="assunto"
                    placeholder="Digite o assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="input-modern"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mensagem" className="font-medium text-gov-gray-700">
                    Mensagem
                  </Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Digite sua mensagem"
                    className="min-h-[120px] input-modern resize-none"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full button-primary flex items-center justify-center">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        <div className="space-y-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
          <Card className="card-modern overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-gov-blue-500 to-gov-blue-400"></div>
            <CardHeader>
              <CardTitle className="text-gov-blue-900 font-display">Informações de Contato</CardTitle>
              <CardDescription>Outras formas de entrar em contato com o CAENC.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-gov-blue-100 flex items-center justify-center mr-3 text-gov-blue-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-gov-blue-900">E-mail</p>
                  <a href="mailto:caenc@universidade.edu.br" className="text-sm text-gov-blue-600 hover:underline">
                    caenc@universidade.edu.br
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-gov-blue-100 flex items-center justify-center mr-3 text-gov-blue-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-gov-blue-900">Telefone</p>
                  <a href="tel:0012345678" className="text-sm text-gov-blue-600 hover:underline">
                    (00) 1234-5678
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-gov-blue-100 flex items-center justify-center mr-3 text-gov-blue-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-gov-blue-900">Endereço</p>
                  <p className="text-sm text-gov-gray-600">
                    Sala 101, Bloco B<br />
                    Departamento de Engenharia da Computação
                    <br />
                    Universidade Federal
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-modern overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-gov-blue-500 to-gov-blue-400"></div>
            <CardHeader>
              <CardTitle className="text-gov-blue-900 font-display">Redes Sociais</CardTitle>
              <CardDescription>Siga-nos nas redes sociais para ficar por dentro das novidades.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-3">
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gov-blue-50 transition-colors group">
                  <div className="h-10 w-10 rounded-full bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center mr-3 group-hover:bg-pink-200 dark:group-hover:bg-pink-900/30 transition-colors">
                    <Instagram className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <span className="font-medium text-gov-blue-900">@caenc.oficial</span>
                    <p className="text-xs text-gov-gray-500">Siga-nos no Instagram</p>
                  </div>
                </a>
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gov-blue-50 transition-colors group">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/30 transition-colors">
                    <Facebook className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-medium text-gov-blue-900">CAENC - Centro Acadêmico</span>
                    <p className="text-xs text-gov-gray-500">Curta nossa página no Facebook</p>
                  </div>
                </a>
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gov-blue-50 transition-colors group">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/30 transition-colors">
                    <Twitter className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="font-medium text-gov-blue-900">@CAENC_oficial</span>
                    <p className="text-xs text-gov-gray-500">Siga-nos no Twitter</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gov-blue-50 rounded-xl p-5 border border-gov-blue-100">
            <h3 className="font-medium text-gov-blue-900 mb-3">Horário de Atendimento</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gov-gray-600">Segunda a Sexta</span>
                <span className="font-medium text-gov-blue-900">08:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gov-gray-600">Sábado</span>
                <span className="font-medium text-gov-blue-900">09:00 - 12:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gov-gray-600">Domingo e Feriados</span>
                <span className="font-medium text-gov-blue-900">Fechado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
