import { create } from 'zustand'

const useGlobalStore = create((set) => ({
    sortTitle: 'Lowest Price',
    changeTitle: (newTitle) => set(() => ({ sortTitle: newTitle })),
    isSignedIn: false,
    changeIsSignedIn: (bool) => set(() => ({ isSignedIn: bool })),
}))

export default useGlobalStore
