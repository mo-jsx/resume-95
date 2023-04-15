import { create } from "zustand";

interface FileManagerStoreProps {
	binState: boolean;
	computerState: boolean;
	documentsState: boolean;

	updateBinState: (by: boolean) => any;
	updateComputerState: (by: boolean) => any;
	updateDocumentsState: (by: boolean) => any;
}

const FileManagerStore = create<FileManagerStoreProps>()((set) => ({
	binState: false,
	computerState: false,
	documentsState: false,

	updateBinState: (newState) => set({ binState: newState }),
	updateComputerState: (newState) => set({ computerState: newState }),
	updateDocumentsState: (newState) => set({ documentsState: newState }),
}));

export default FileManagerStore;
