'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const climateTypes = [
  {
    name: "Equatorial",
    description: "Clima quente e úmido, com temperaturas elevadas e chuvas abundantes durante todo o ano. Predominante na região amazônica.",
    image: "/equatorial.jpg?height=200&width=300",
    averageTemp: "24°C a 26°C",
    rainfall: "1500mm a 3000mm/ano",
    vegetation: "Floresta Amazônica"
  },
  {
    name: "Tropical",
    description: "Clima quente com duas estações bem definidas: uma chuvosa no verão e outra seca no inverno. Predominante no Centro-Oeste, parte do Nordeste e Sudeste.",
    image: "/tropical.jpg?height=200&width=300",
    averageTemp: "18°C a 28°C",
    rainfall: "1000mm a 1500mm/ano",
    vegetation: "Cerrado, Caatinga, Mata Atlântica"
  },
  {
    name: "Subtropical",
    description: "Clima com temperaturas mais amenas e chuvas bem distribuídas ao longo do ano. Predominante na região Sul do país.",
    image: "/subtropical.jpg?height=200&width=300",
    averageTemp: "14°C a 22°C",
    rainfall: "1200mm a 2000mm/ano",
    vegetation: "Mata Atlântica, Mata de Araucárias"
  },
  {
    name: "Semiárido",
    description: "Clima quente e seco, com baixa umidade e chuvas escassas e irregulares. Predominante no interior do Nordeste.",
    image: "/semiarido.jpg?height=200&width=300",
    averageTemp: "24°C a 26°C",
    rainfall: "300mm a 800mm/ano",
    vegetation: "Caatinga"
  },
  {
    name: "Tropical de Altitude",
    description: "Clima com temperaturas mais amenas devido à altitude. Predominante nas regiões serranas do Sudeste.",
    image: "/tropical-altitude.jpg?height=200&width=300",
    averageTemp: "17°C a 22°C",
    rainfall: "1200mm a 1800mm/ano",
    vegetation: "Mata Atlântica"
  }
]

export default function TiposDeClima() {
  const [expandedClimate, setExpandedClimate] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Tipos de Clima Predominantes no Brasil</h1>
      <div className="grid grid-cols-1 gap-6">
        {climateTypes.map((climate) => (
          <Accordion key={climate.name} type="single" collapsible>
            <AccordionItem value={climate.name}>
              <AccordionTrigger>{climate.name}</AccordionTrigger>
              <AccordionContent>
                <Card>
                  <CardHeader>
                    <CardTitle>{climate.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-4">
                      <Image
                        src={climate.image}
                        alt={`Clima ${climate.name}`}
                        width={300}
                        height={200}
                        className="rounded-md"
                      />
                      <div>
                        <p className="mb-2">{climate.description}</p>
                        <p><strong>Temperatura Média:</strong> {climate.averageTemp}</p>
                        <p><strong>Precipitação:</strong> {climate.rainfall}</p>
                        <p><strong>Vegetação Típica:</strong> {climate.vegetation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  )
}

