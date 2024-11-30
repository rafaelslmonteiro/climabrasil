'use client'

import React, { useCallback, useMemo } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { useMapStore } from '../store/mapStore'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { climateData } from '../data/climate-data'
import ClimateComparison from './climate-comparison'

const geoUrl = 'https://raw.githubusercontent.com/giuliano-macedo/geodata-br-states/refs/heads/main/geojson/br_states.json'

const colors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', 
  '#F06292', '#AED581', '#7986CB', '#9575CD', '#4DB6AC'
]

const BrazilMap: React.FC = () => {
  const { selectedStates, toggleSelectedState, clearSelectedStates } = useMapStore()

  const handleStateClick = useCallback((stateCode: string) => {
    if (stateCode && climateData[stateCode as keyof typeof climateData]) {
      toggleSelectedState(stateCode)
    }
  }, [toggleSelectedState])

  const memoizedMap = useMemo(() => (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 750,
        center: [-53, -15]
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const stateCode = geo.properties.SIGLA || geo.properties.sigla
            if (!stateCode) return null
            const colorIndex = selectedStates.indexOf(stateCode)
            const isSelected = colorIndex !== -1

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={isSelected ? colors[colorIndex % colors.length] : "#D6D6DA"}
                stroke="#FFF"
                strokeWidth={0.5}
                style={{
                  default: { outline: 'none' },
                  hover: { outline: 'none', fill: '#F53' },
                  pressed: { outline: 'none' },
                }}
                onClick={() => handleStateClick(stateCode)}
              />
            )
          })
        }
      </Geographies>
    </ComposableMap>
  ), [selectedStates, handleStateClick])

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Selecione os estados para comparar:</h2>
      <p className="mb-4 text-gray-600">Clique nos estados no mapa ou use os botões abaixo para selecionar.</p>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3">
          <ScrollArea className="h-[500px] rounded-md border p-4">
            <div className="grid grid-cols-1 gap-2">
              {Object.entries(climateData).map(([stateCode, { state }]) => (
                <Button
                  key={stateCode}
                  onClick={() => handleStateClick(stateCode)}
                  variant={selectedStates.includes(stateCode) ? "default" : "outline"}
                  className="w-full justify-start"
                >
                  {state}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="w-full md:w-2/3">
          {memoizedMap}
        </div>
      </div>
      {selectedStates.length > 0 && (
        <>
          <ClimateComparison />
          <Button onClick={clearSelectedStates} className="mt-4">
            Limpar Seleção
          </Button>
        </>
      )}
    </div>
  )
}

export default React.memo(BrazilMap)

