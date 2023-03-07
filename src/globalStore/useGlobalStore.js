import { create } from 'zustand'

const useGlobalStore = create((set) => ({
    sortTitle: 'Lowest Price',
    changeTitle: (newTitle) => set(() => ({ sortTitle: newTitle })),
    isSignedIn: false,
    changeIsSignedIn: (bool) => set(() => ({ isSignedIn: bool })),
    accountInfo: {},
    changeAccountInfo: (account) => set(() => ({ accountInfo: account })),
}))

export default useGlobalStore
