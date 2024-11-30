import BrazilMap from '@/components/brazil-map'
import { Card, CardContent } from "@/components/ui/card"
import { CloudSun, Droplets, Thermometer, TreesIcon as Tree } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Explore os Climas do Brasil</h1>
        <p className="text-xl text-gray-600 mb-8">Descubra e compare a diversidade climática de cada estado brasileiro através do nosso mapa interativo.</p>
      </section>

      <BrazilMap />

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Por que estudar os climas do Brasil?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
              <CloudSun className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Diversidade Climática</h3>
              <p>O Brasil possui uma grande variedade de climas devido à sua extensão territorial e características geográficas únicas.</p>
            </div>
            <CardContent className="bg-white p-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>Cinco principais tipos de clima</li>
                <li>Influência da latitude e altitude</li>
                <li>Impacto das correntes oceânicas</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 text-white">
              <Thermometer className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Variações de Temperatura</h3>
              <p>As temperaturas variam significativamente entre as regiões, influenciando a vida e as atividades humanas.</p>
            </div>
            <CardContent className="bg-white p-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>Amplitude térmica entre regiões</li>
                <li>Efeito das estações do ano</li>
                <li>Microclimas em áreas urbanas</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-6 text-white">
              <Droplets className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Padrões de Precipitação</h3>
              <p>Os padrões de chuva afetam diretamente a agricultura, os recursos hídricos e os ecossistemas locais.</p>
            </div>
            <CardContent className="bg-white p-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>Distribuição irregular de chuvas</li>
                <li>Fenômenos como El Niño e La Niña</li>
                <li>Impacto na biodiversidade</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="bg-gradient-to-r from-red-500 to-pink-600 p-6 text-white">
              <Tree className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Diversidade de Vegetação</h3>
              <p>O clima determina os tipos de vegetação encontrados em cada região, desde florestas tropicais até caatingas.</p>
            </div>
            <CardContent className="bg-white p-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>Biomas brasileiros e sua relação com o clima</li>
                <li>Adaptações das plantas ao clima</li>
                <li>Importância da preservação dos ecossistemas</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

