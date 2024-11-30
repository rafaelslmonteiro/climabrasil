import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { CloudSun, Users, BookOpen } from 'lucide-react'

const teamMembers = [
  {
    name: 'Izabela Dolores Cebin Bassani',
    image: '/Izabela.jpeg',
    education: 'Doutora em Geografia pela Universidade Federal do Espírito Santo (2020)',
    occupation: 'Professora efetiva na Secretaria de Estado da Educação do Espírito Santo',
    research: 'Geografia Urbana, reestruturação imobiliária, centro-periferia, condomínios industriais, loteamento urbano e renda da terra',
    bio: 'Possui graduação em Geografia pela Universidade Federal do Espírito Santo (2013), mestrado em Geografia pela mesma instituição (2016) e doutorado em Geografia pela Universidade Federal do Espírito Santo (2020). Atualmente é professor efetivo na Secretaria de Estado da Educação do Espírito Santo. Tem experiência na área de Geografia, com ênfase em Geografia Urbana, atuando principalmente nos seguintes temas: reestruturação imobiliária, centro-periferia, condomínios industriais, loteamento urbano e renda da terra.',
    lattes: 'http://lattes.cnpq.br/1234567890',
  },
  {
    name: 'Rafael Santos da Luz Monteiro',
    image: '/Rafa.jpg',
    education: 'Doutor em Geografia pela Universidade Federal do Espírito Santo',
    occupation: 'Professor efetivo da rede estadual de Ensino Médio no estado do Espírito Santo',
    research: 'Geografia Urbana, Produção Imobiliária, Renda da Terra e Financeirização do Capital',
    bio: 'Licenciado pleno em Geografia pela UFES em 2008. Professor do quadro efetivo da rede estadual de Ensino Médio no estado do Espírito Santo desde agosto de 2009. Mestre em Geografia pelo PPGG/UFES. Doutor em Geografia na área de Produção Imobiliária pelo PPGG/UFES. Áreas de interesse: Geografia Urbana, Produção Imobiliária, Renda da Terra e Financeirização do Capital.',
    lattes: 'http://lattes.cnpq.br/0987654321',
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Sobre o Climas no Brasil</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-gradient-to-br from-blue-500 to-green-500 text-white">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <CloudSun className="mr-2" />
              O Projeto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              O projeto "Climas no Brasil" é uma iniciativa educacional que visa proporcionar uma compreensão mais profunda e interativa dos diversos climas presentes no território brasileiro. Nosso objetivo é oferecer uma ferramenta acessível e informativa para estudantes, educadores e entusiastas da geografia e climatologia.
            </p>
            <p className="mb-4">
              Através do nosso mapa interativo, os usuários podem explorar as características climáticas específicas de cada estado brasileiro, incluindo temperaturas médias, níveis de precipitação e vegetação típica. Além disso, nossa plataforma permite a comparação entre diferentes estados, destacando a rica diversidade climática do Brasil.
            </p>
            <p>
              Este projeto nasceu da paixão pela geografia e da necessidade de tornar o conhecimento sobre os climas brasileiros mais acessível e envolvente. Acreditamos que, ao compreender melhor os padrões climáticos de nosso país, podemos fomentar uma maior consciência ambiental e um planejamento mais eficiente em diversos setores da sociedade.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <BookOpen className="mr-2" />
              Importância do Estudo Climático
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Compreensão da diversidade ambiental brasileira</li>
              <li>Planejamento agrícola e gestão de recursos hídricos</li>
              <li>Prevenção de desastres naturais</li>
              <li>Desenvolvimento de políticas públicas adaptadas às realidades regionais</li>
              <li>Conservação da biodiversidade</li>
              <li>Planejamento urbano e arquitetura sustentável</li>
              <li>Estudos sobre mudanças climáticas e seus impactos locais</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-semibold mb-6 text-center flex items-center justify-center">
        <Users className="mr-2" />
        Nossa Equipe
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {teamMembers.map((member) => (
          <Card key={member.name} className="overflow-hidden">
            <CardHeader className="pb-0">
              <div className="flex items-center space-x-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <p className="text-sm text-gray-500">{member.occupation}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="font-semibold mb-2">{member.education}</p>
              <p className="mb-4"><strong>Áreas de Pesquisa:</strong> {member.research}</p>
              <p className="mb-4 text-sm">{member.bio}</p>
              <Button asChild>
                <Link href={member.lattes} target="_blank" rel="noopener noreferrer">
                  Ver Currículo Lattes
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

