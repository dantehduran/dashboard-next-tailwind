import create from 'zustand';

interface UIStore {
	isSidebarOpen: boolean;
	isSidebarCollapsed: boolean;
	toggleSidebarOpen: () => void;
	toggleSidebarCollapsed: () => void;
	setIsSidebarOpen: (value: boolean) => void;
	setIsSidebarCollapsed: (value: boolean) => void;
}

const useSidebar = create<UIStore>(set => ({
	isSidebarOpen: false,
	isSidebarCollapsed: false,
	toggleSidebarOpen: () =>
		set(state => ({ isSidebarOpen: !state.isSidebarOpen })),
	toggleSidebarCollapsed: () =>
		set(state => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),
	setIsSidebarOpen: (value: boolean) => set({ isSidebarOpen: value }),
	setIsSidebarCollapsed: (value: boolean) => set({ isSidebarCollapsed: value }),
}));

export { useSidebar };
