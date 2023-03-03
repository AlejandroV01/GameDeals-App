import { create } from 'zustand'

const useGlobalStore = create(set => ({
  title: 'Lowest Price',
  changeTitle: () => set(state => ({ bears: state })),
}))

export default useGlobalStore
