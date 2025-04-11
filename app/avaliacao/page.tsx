"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Star, Users, BookOpen, MessageSquare, ChevronRight, CheckCircle } from "lucide-react"

export default function AvaliacaoPage() {
  const [selectedProfessor, setSelectedProfessor] = useState("")
  const [selectedDisciplina, setSelectedDisciplina] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Dados simulados para professores e disciplinas
  const professores = [
    { id: "1", nome: "Prof. Dr. João Silva" },
    { id: "2", nome: "Profa. Dra. Maria Santos" },
    { id: "3", nome: "Prof. Dr. Carlos Mendes" },
    { id: "4", nome: "Profa. Dra. Ana Oliveira" },
  ]

  const disciplinas = [
    { id: "1", nome: "Algoritmos e Estruturas de Dados" },
    { id: "2", nome: "Programação Orientada a Objetos" },
    { id: "3", nome: "Redes de Computadores" },
    { id: "4", nome: "Inteligência Artificial" },
    { id: "5", nome: "Banco de Dados" },
  ]

  // Dados simulados para resultados
  const resultados = [
    {
      professor: "Prof. Dr. João Silva",
      disciplina: "Algoritmos e Estruturas de Dados",
      didatica: 4.5,
      disponibilidade: 4.2,
      materiais: 4.0,
      comentarios: [
        "Excelente professor, explica muito bem.",
        "As aulas são muito bem preparadas.",
        "Poderia disponibilizar mais exercícios.",
      ],
    },
    {
      professor: "Profa. Dra. Maria Santos",
      disciplina: "Inteligência Artificial",
      didatica: 4.8,
      disponibilidade: 4.6,
      materiais: 4.7,
      comentarios: [
        "Professora muito dedicada e atenciosa.",
        "Material didático excelente.",
        "As aulas práticas são muito úteis.",
      ],
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)

    // Resetar após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false)
      setSelectedProfessor("")
      setSelectedDisciplina("")
    }, 3000)
  }

  return (
    <div className="space-y-8 py-6 animate-fade-in">
      <div className="text-center space-y-3 py-6">
        <div className="inline-block px-4 py-1.5 bg-gov-blue-100 rounded-full text-gov-blue-800 text-sm font-medium mb-2">
          Feedback Acadêmico
        </div>
        <h1 className="text-4xl font-bold gradient-heading font-display">Avaliação de Professores</h1>
        <p className="text-gov-gray-600 max-w-md mx-auto">
          Ajude a melhorar a qualidade do ensino avaliando seus professores
        </p>
      </div>

      <Tabs defaultValue="formulario" className="w-full mt-8">
        <TabsList className="grid w-full grid-cols-2 p-1 bg-secondary rounded-xl">
          <TabsTrigger value="formulario" className="rounded-lg py-3">
            Formulário
          </TabsTrigger>
          <TabsTrigger value="resultados" className="rounded-lg py-3">
            Resultados
          </TabsTrigger>
        </TabsList>

        <TabsContent value="formulario" className="space-y-6 mt-6 animate-slide-up">
          <Card className="card-modern overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-gov-blue-500 to-gov-blue-400"></div>
            <CardHeader>
              <CardTitle className="text-gov-blue-900 font-display">Formulário de Avaliação</CardTitle>
              <CardDescription>
                Avalie o desempenho dos professores nas disciplinas que você cursou. Suas avaliações são anônimas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium text-gov-blue-900 mb-2">Avaliação Enviada!</h3>
                  <p className="text-gov-gray-600 max-w-md">
                    Obrigado por contribuir para a melhoria do ensino. Sua avaliação foi registrada com sucesso.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="professor" className="font-medium text-gov-gray-700">
                        Professor
                      </Label>
                      <Select value={selectedProfessor} onValueChange={setSelectedProfessor} required>
                        <SelectTrigger className="input-modern">
                          <SelectValue placeholder="Selecione um professor" />
                        </SelectTrigger>
                        <SelectContent>
                          {professores.map((professor) => (
                            <SelectItem key={professor.id} value={professor.id}>
                              {professor.nome}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="disciplina" className="font-medium text-gov-gray-700">
                        Disciplina
                      </Label>
                      <Select value={selectedDisciplina} onValueChange={setSelectedDisciplina} required>
                        <SelectTrigger className="input-modern">
                          <SelectValue placeholder="Selecione uma disciplina" />
                        </SelectTrigger>
                        <SelectContent>
                          {disciplinas.map((disciplina) => (
                            <SelectItem key={disciplina.id} value={disciplina.id}>
                              {disciplina.nome}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-5 pt-2">
                    <div className="space-y-3">
                      <Label className="font-medium text-gov-gray-700 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2 text-gov-blue-500" />
                        Didática
                      </Label>
                      <RadioGroup defaultValue="3" className="p-3 bg-gov-gray-50 rounded-lg">
                        <div className="flex justify-between">
                          {[1, 2, 3, 4, 5].map((value) => (
                            <div key={value} className="flex flex-col items-center">
                              <RadioGroupItem
                                value={value.toString()}
                                id={`didatica-${value}`}
                                className="text-gov-blue-500"
                              />
                              <Label htmlFor={`didatica-${value}`} className="mt-1">
                                {value}
                              </Label>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between text-xs text-gov-gray-500 mt-2">
                          <span>Ruim</span>
                          <span>Excelente</span>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label className="font-medium text-gov-gray-700 flex items-center">
                        <Users className="h-4 w-4 mr-2 text-gov-blue-500" />
                        Disponibilidade
                      </Label>
                      <RadioGroup defaultValue="3" className="p-3 bg-gov-gray-50 rounded-lg">
                        <div className="flex justify-between">
                          {[1, 2, 3, 4, 5].map((value) => (
                            <div key={value} className="flex flex-col items-center">
                              <RadioGroupItem
                                value={value.toString()}
                                id={`disponibilidade-${value}`}
                                className="text-gov-blue-500"
                              />
                              <Label htmlFor={`disponibilidade-${value}`} className="mt-1">
                                {value}
                              </Label>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between text-xs text-gov-gray-500 mt-2">
                          <span>Ruim</span>
                          <span>Excelente</span>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label className="font-medium text-gov-gray-700 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2 text-gov-blue-500" />
                        Materiais Fornecidos
                      </Label>
                      <RadioGroup defaultValue="3" className="p-3 bg-gov-gray-50 rounded-lg">
                        <div className="flex justify-between">
                          {[1, 2, 3, 4, 5].map((value) => (
                            <div key={value} className="flex flex-col items-center">
                              <RadioGroupItem
                                value={value.toString()}
                                id={`materiais-${value}`}
                                className="text-gov-blue-500"
                              />
                              <Label htmlFor={`materiais-${value}`} className="mt-1">
                                {value}
                              </Label>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between text-xs text-gov-gray-500 mt-2">
                          <span>Ruim</span>
                          <span>Excelente</span>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comentarios" className="font-medium text-gov-gray-700 flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2 text-gov-blue-500" />
                      Comentários (opcional)
                    </Label>
                    <Textarea
                      id="comentarios"
                      placeholder="Compartilhe sua experiência com este professor nesta disciplina"
                      className="min-h-[100px] input-modern resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full button-primary">
                    Enviar Avaliação
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resultados" className="space-y-6 mt-6 animate-slide-up">
          <div className="space-y-6">
            {resultados.map((resultado, index) => (
              <Card
                key={index}
                className="card-modern overflow-hidden hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-2 bg-gradient-to-r from-gov-blue-500 to-gov-blue-400"></div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-gov-blue-900 font-display">{resultado.professor}</CardTitle>
                      <CardDescription>{resultado.disciplina}</CardDescription>
                    </div>
                    <div className="flex items-center bg-gov-blue-50 px-2.5 py-1 rounded-lg">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="font-medium text-gov-blue-900">
                        {((resultado.didatica + resultado.disponibilidade + resultado.materiais) / 3).toFixed(1)}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gov-gray-700">Didática</p>
                        <span className="text-sm font-medium text-gov-blue-900">{resultado.didatica.toFixed(1)}</span>
                      </div>
                      <div className="w-full bg-gov-gray-200 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full bg-gradient-to-r from-gov-blue-500 to-gov-blue-400"
                          style={{ width: `${resultado.didatica * 20}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gov-gray-700">Disponibilidade</p>
                        <span className="text-sm font-medium text-gov-blue-900">
                          {resultado.disponibilidade.toFixed(1)}
                        </span>
                      </div>
                      <div className="w-full bg-gov-gray-200 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full bg-gradient-to-r from-gov-blue-500 to-gov-blue-400"
                          style={{ width: `${resultado.disponibilidade * 20}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gov-gray-700">Materiais</p>
                        <span className="text-sm font-medium text-gov-blue-900">{resultado.materiais.toFixed(1)}</span>
                      </div>
                      <div className="w-full bg-gov-gray-200 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full bg-gradient-to-r from-gov-blue-500 to-gov-blue-400"
                          style={{ width: `${resultado.materiais * 20}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gov-gray-700 flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2 text-gov-blue-500" />
                      Comentários dos Alunos
                    </p>
                    <div className="space-y-2">
                      {resultado.comentarios.map((comentario, i) => (
                        <div key={i} className="p-3 bg-gov-gray-50 rounded-lg text-sm border-l-4 border-l-gov-blue-200">
                          "{comentario}"
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button variant="outline" size="sm" className="text-gov-blue-500 border-gov-blue-200">
                      Ver avaliação completa
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
