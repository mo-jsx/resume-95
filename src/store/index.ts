import { create } from "zustand";
import { WindowProps } from "types/";

interface ProcessManagerProps {
	openWindows: WindowProps[];

	createProcess: (newWindow: WindowProps) => void;
	killProcess: (id: string) => void;
	maximize: (id: string, newState: boolean) => void;
	minimize: (id: string, newState: boolean) => void;
}

const ProcessManager = create<ProcessManagerProps>()((set, get) => ({
	openWindows: [],

	createProcess: (newWindow) => {
		set((state) => ({ openWindows: state.openWindows.concat(newWindow) }));
	},
	killProcess: (id) =>
		set((state) => ({
			openWindows: state.openWindows.filter(
				(openWindow) => openWindow.id !== id
			),
		})),
	maximize: (id, newState) => {
		const openWindows = get().openWindows;
		const updatedWindows = openWindows.map((window) =>
			window.id === id ? { ...window, isMaximized: newState } : window
		);
		set({ openWindows: updatedWindows });
	},
	minimize: (id, newState) => {
		const openWindows = get().openWindows;
		const updatedWindows = openWindows.map((window) =>
			window.id === id ? { ...window, isMinimized: newState } : window
		);
		set({ openWindows: updatedWindows });
	},
}));

export default ProcessManager;
