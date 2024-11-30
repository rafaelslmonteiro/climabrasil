import { create } from 'zustand'
import { climateData } from '../data/climate-data'

type MapStore = {
  selectedStates: string[]
  toggleSelectedState: (stateCode: string) => void
  getSelectedStatesInfo: () => (typeof climateData.AC)[]
  clearSelectedStates: () => void
}

export const useMapStore = create<MapStore>((set, get) => ({
  selectedStates: [],
  toggleSelectedState: (stateCode) => set((state) => {
    const isSelected = state.selectedStates.includes(stateCode)
    if (isSelected) {
      return { selectedStates: state.selectedStates.filter(code => code !== stateCode) }
    } else {
      return { selectedStates: [...state.selectedStates, stateCode] }
    }
  }),
  getSelectedStatesInfo: () => {
    const { selectedStates } = get()
    return selectedStates
      .map(stateCode => climateData[stateCode as keyof typeof climateData])
      .filter((info): info is typeof climateData.AC => info !== undefined)
  },
  clearSelectedStates: () => set({ selectedStates: [] })
}))

