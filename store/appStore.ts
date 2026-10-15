import { create } from 'zustand';

interface AppState {
  currentLevel: number | null;
  isDragging: boolean;
  hintVisible: boolean;
  sidebarOpen: boolean;
  setCurrentLevel: (level: number | null) => void;
  setDragging: (dragging: boolean) => void;
  toggleSidebar: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentLevel: null,
  isDragging: false,
  hintVisible: true,
  sidebarOpen: false,
  setCurrentLevel: (level) => set({ currentLevel: level }),
  setDragging: (dragging) => set({ isDragging: dragging }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
