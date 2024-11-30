'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { climateData } from '@/data/climate-data'
import { CloudSun, Droplets, Thermometer, TreesIcon, ChevronDown, Sun, Cloud, Snowflake, Wind } from 'lucide-react'

const climateTypes = [
  {
    name: "Equatorial",
    icon: <CloudSun className="w-6 h-6" />,
    description: "Clima quente e úmido, com temperaturas elevadas e chuvas abundantes durante todo o ano. Predominante na região amazônica.",
    image: "/equatorial.jpg?height=100&width=150",
    averageTemp: "24°C a 26°C",
    rainfall: "1500mm a 3000mm/ano",
    vegetation: "Floresta Amazônica",
    states: Object.entries(climateData)
      .filter(([_, data]) => data.climate.includes("Equatorial"))
      .map(([code, data]) => ({ code, name: data.state }))
  },
  {
    name: "Tropical",
    icon: <Sun className="w-6 h-6" />,
    description: "Clima quente com duas estações bem definidas: uma chuvosa no verão e outra seca no inverno. Predominante no Centro-Oeste, parte do Nordeste e Sudeste.",
    image: "/tropical.jpg?height=200&width=300",
    averageTemp: "18°C a 28°C",
    rainfall: "1000mm a 1500mm/ano",
    vegetation: "Cerrado, Caatinga, Mata Atlântica",
    states: Object.entries(climateData)
      .filter(([_, data]) => data.climate.includes("Tropical") && !data.climate.includes("Altitude"))
      .map(([code, data]) => ({ code, name: data.state }))
  },
  {
    name: "Subtropical",
    icon: <Cloud className="w-6 h-6" />,
    description: "Clima com temperaturas mais amenas e chuvas bem distribuídas ao longo do ano. Predominante na região Sul do país.",
    image: "/subtropical.jpg?height=200&width=300",
    averageTemp: "14°C a 22°C",
    rainfall: "1200mm a 2000mm/ano",
    vegetation: "Mata Atlântica, Mata de Araucárias",
    states: Object.entries(climateData)
      .filter(([_, data]) => data.climate.includes("Subtropical"))
      .map(([code, data]) => ({ code, name: data.state }))
  },
  {
    name: "Semiárido",
    icon: <Wind className="w-6 h-6" />,
    description: "Clima quente e seco, com baixa umidade e chuvas escassas e irregulares. Predominante no interior do Nordeste.",
    image: "/semiarido.jpg?height=200&width=300",
    averageTemp: "24°C a 26°C",
    rainfall: "300mm a 800mm/ano",
    vegetation: "Caatinga",
    states: Object.entries(climateData)
      .filter(([_, data]) => data.climate.includes("Semiárido"))
      .map(([code, data]) => ({ code, name: data.state }))
  },
  {
    name: "Tropical de Altitude",
    icon: <Snowflake className="w-6 h-6" />,
    description: "Clima com temperaturas mais amenas devido à altitude. Predominante nas regiões serranas do Sudeste.",
    image: "/tropical-altitude.jpg?height=200&width=300",
    averageTemp: "17°C a 22°C",
    rainfall: "1200mm a 1800mm/ano",
    vegetation: "Mata Atlântica",
    states: Object.entries(climateData)
      .filter(([_, data]) => data.climate.includes("Tropical de Altitude"))
      .map(([code, data]) => ({ code, name: data.state }))
  }
]

export default function TiposDeClima() {
  const [expandedClimate, setExpandedClimate] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Tipos de Clima Predominantes no Brasil</h1>
      <div className="grid grid-cols-1 gap-8">
        {climateTypes.map((climate) => (
          <Accordion key={climate.name} type="single" collapsible>
            <AccordionItem value={climate.name}>
              <AccordionTrigger className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  {climate.icon}
                  <h3 className="text-2xl font-semibold ml-2">{climate.name}</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <Image
                          src={climate.image}
                          alt={`Clima ${climate.name}`}
                          width={300}
                          height={200}
                          className="rounded-md w-full h-auto"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <p className="mb-4 text-lg">{climate.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="flex items-center">
                            <Thermometer className="mr-2" />
                            <div>
                              <p className="font-semibold">Temperatura Média</p>
                              <p>{climate.averageTemp}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Droplets className="mr-2" />
                            <div>
                              <p className="font-semibold">Precipitação</p>
                              <p>{climate.rainfall}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <TreesIcon className="mr-2" />
                            <div>
                              <p className="font-semibold">Vegetação Típica</p>
                              <p>{climate.vegetation}</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Estados com este clima:</h3>
                          <div className="flex flex-wrap gap-2">
                            {climate.states.map((state) => (
                              <Badge key={state.code} variant="secondary">
                                {state.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
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

