import { create } from 'zustand'

export type LegalView = 'terms' | 'privacy'
export type AuthMode = 'signin' | 'signup'

type UiStore = {
  authMode: AuthMode
  setAuthMode: (mode: AuthMode) => void
  legalView: LegalView | null
  openLegalModal: (view: LegalView) => void
  closeLegalModal: () => void
}

export const useUiStore = create<UiStore>()((set) => ({
  authMode: 'signin',
  setAuthMode: (authMode) => set({ authMode }),
  legalView: null,
  openLegalModal: (legalView) => set({ legalView }),
  closeLegalModal: () => set({ legalView: null }),
}))
