import { create } from "zustand";
import { WindowProps } from "types/";

interface ProcessManagerProps {
	openWindows: WindowProps[];

	createProcess: (newWindow: WindowProps) => void;
	killProcess: (id: string) => void;
	maximize: (id: string, newState: boolean) => void;
	minimize: (id: string, newState: boolean) => void;
	setFocus: (id: string) => void;

	isStart: boolean;
	setIsStart: (state: boolean) => void;
}

const ProcessManager = create<ProcessManagerProps>()((set, get) => ({
	openWindows: [],
	isStart: false,

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
	setFocus: (id) => {
		set((state) => ({
			openWindows: state.openWindows.map((window) => {
				return {
					...window,
					isFocused: window.id === id,
				};
			}),
		}));
	},

	setIsStart: (id) => {
		set(() => ({
			isStart: id,
		}));
	},
}));

export default ProcessManager;
