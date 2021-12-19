import create from 'zustand';

interface OverlayStateProps {
    currentVisible: number | null;
    setCurrentVisible: (id: number) => void;
}

const useOverlayState = create<OverlayStateProps>((set) => {
    return {
        currentVisible: null,
        setCurrentVisible(id: number) {
            set((prev) => ({...prev, currentVisible: id}))
        }
    }
})

export default useOverlayState;
