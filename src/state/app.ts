import create from "zustand";

export type Theme = "light" | "dark";


export interface AppStateType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const useAppState = create<AppStateType>((set, get) => {
    return {
        theme: typeof window !== "undefined" ? window.localStorage.getItem('theme')??"dark" : "light",
        setTheme(value) {
            window.localStorage.setItem("theme", value)
            set({theme: value});
        },
    }
})
