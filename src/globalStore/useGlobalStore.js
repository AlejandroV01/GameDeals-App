import { create } from 'zustand'

const useGlobalStore = create((set) => ({
    sortTitle: 'Lowest Price',
    changeTitle: (newTitle) => set(() => ({ sortTitle: newTitle })),
    isSignedIn: false,
    changeIsSignedIn: (bool) => set({ isSignedIn: bool }),
    accountInfo: null,
    changeAccountInfo: (account) => set(() => ({ accountInfo: account })),
    signInTab: true,
    changeSignInTab: (bool) => set(() => ({ signInTab: bool })),
}))

export default useGlobalStore
