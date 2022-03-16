import { writable } from 'svelte/store';
import { supabase } from './db';
export const user = writable(supabase.auth.user() || false);
export const profil = writable(null);
export const jEditout = writable(null);
function toggleSidebar() {
	const { subscribe, set, update } = writable(false);
	return {
		subscribe,
		toggle: () => update(n => (n = !n)),
		show: () => set(true),
		reset: () => set(false)
	};
}

export const isOpen = toggleSidebar();