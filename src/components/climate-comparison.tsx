import React from 'react'
import { useMapStore } from '../store/mapStore'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"

const ClimateComparison: React.FC = () => {
  const { getSelectedStatesInfo } = useMapStore()
  const selectedStatesInfo = getSelectedStatesInfo()

  if (selectedStatesInfo.length === 0) {
    return null
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comparação Climática</h2>
      <ScrollArea className="w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Estado</TableHead>
              <TableHead>Clima</TableHead>
              <TableHead>Temperatura Média</TableHead>
              <TableHead>Precipitação</TableHead>
              <TableHead>Vegetação Típica</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {selectedStatesInfo.map((stateInfo) => (
              <TableRow key={stateInfo.state}>
                <TableCell className="font-medium">{stateInfo.state}</TableCell>
                <TableCell>{stateInfo.climate}</TableCell>
                <TableCell>{stateInfo.averageTemp}</TableCell>
                <TableCell>{stateInfo.rainfall}</TableCell>
                <TableCell>{stateInfo.vegetation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  )
}

export default ClimateComparison

