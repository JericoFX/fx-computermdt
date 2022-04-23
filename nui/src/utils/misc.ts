import {onMount} from 'svelte';
import {fetchNui} from './fetchNui';

export const isEnvBrowser = (): boolean => !(window as any).invokeNative;

export let IS_DEV = false;
export function Tables() {
	const tabButtons = document.querySelectorAll('[role=tab]');
	tabButtons.forEach((tabButton) => {
		tabButton.addEventListener('click', (e) => {
			e.preventDefault();
			const tabContainer = e.target.parentElement.parentElement;
			const targetId = e.target.getAttribute('aria-controls');
			tabButtons.forEach((_tabButton) => _tabButton.setAttribute('aria-selected', 'false'));
			tabButton.setAttribute('aria-selected', 'true');
			tabContainer.querySelectorAll('[role=tabpanel]').forEach((tabPanel: {setAttribute: (arg0: string, arg1: string) => void}) => {
				tabPanel.setAttribute('style', 'display:none;');
			});
			tabContainer.querySelector(`[role=tabpanel]#${targetId}`).removeAttribute('style', 'display:none;');
		});
	});
}
// THIS CODE EDITS THE TABLES AND HIDE IT, IF THIS CODE ISNT PRESENT THE TABLES WILL SHOW ONE AFTER ANOTHER
export async function loadJson(url: RequestInfo): Promise<any> {
	const response = await fetch(url);
	return await response.json();
}