import { derived } from "svelte/store";
import { navigating } from "$app/stores";

// Last navigation object if there is any
export const lastNav = derived(
	navigating,
	($navigating, set) => {
		if ($navigating) {
			// Save current navigating object if it is set
			set($navigating);
		}
	},
	null
);
