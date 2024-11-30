import Link from 'next/link'
import { CloudSun } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <CloudSun className="mr-2" />
          Climas no Brasil
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:underline">Início</Link></li>
          <li><Link href="/tipos-de-clima" className="hover:underline">Tipos de Clima</Link></li>
          <li><Link href="/sobre" className="hover:underline">Sobre</Link></li>
        </ul>
      </nav>
    </header>
  )
}