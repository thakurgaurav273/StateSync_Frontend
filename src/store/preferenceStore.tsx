import { persist } from "zustand/middleware";
import { create } from "zustand";

interface PreferenceState {
    theme: string;
    setTheme: (theme: string) => void;
    selectedMenu: string;
    setSelectedMenu: (menu: string) => void;
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

const preferenceStore = create<PreferenceState>()(
    persist(
        (set) => ({
            theme: "light",
            setTheme: (theme) => set({ theme }),
            selectedMenu: "home",
            setSelectedMenu: (menu) => set({ selectedMenu: menu }),
            sidebarOpen: true,
            setSidebarOpen: (open) => set({ sidebarOpen: open }),
        }),
        {
            name: "user-preferences",
        }
    )
);

export default preferenceStore;