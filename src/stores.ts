import { writable } from 'svelte/store';

export const sidebarOpen = writable(true);
export const darkMode = writable(false);
export const user = writable({ name: 'Guest', loggedIn: false });
