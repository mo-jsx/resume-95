import { create } from "zustand";
import { WindowProps } from "types/";

interface ProcessManagerProps {
	openWindows: WindowProps[];

	createProcess: (newWindow: WindowProps) => void;
	killProcess: (id: string) => void;
}

const ProcessManager = create<ProcessManagerProps>()((set) => ({
	openWindows: [],

	createProcess: (newWindow) =>
		set((state) => ({ openWindows: state.openWindows.concat(newWindow) })),
	killProcess: (id) =>
		set((state) => ({
			openWindows: state.openWindows.filter(
				(openWindow) => openWindow.id !== id
			),
		})),
}));

export default ProcessManager;
