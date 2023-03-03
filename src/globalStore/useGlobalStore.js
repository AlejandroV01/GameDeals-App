import { create } from 'zustand'

const useGlobalStore = create(set => ({
  sortTitle: 'Lowest Price',
  changeTitle: newTitle => set(() => ({ sortTitle: newTitle })),
}))

export default useGlobalStore
