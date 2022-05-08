import {fetchNui} from './fetchNui';

export const isEnvBrowser = (): boolean => !(window as any).invokeNative;

export let IS_DEV = false;
// THIS CODE EDITS THE TABLES AND HIDE IT, IF THIS CODE ISNT PRESENT THE TABLES WILL SHOW ONE AFTER ANOTHER
export function Tables(): void {
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
//SVELTE doesn't load the json directly from the public directory so with this function you can load the json
export async function loadJson(url: RequestInfo): Promise<any> {
	const response = await fetch(url);
	return await response.json();
}
// This send an event to the lua side and display a notify with the message
export async function SendMessage(message: string): Promise<void> {
	await fetchNui('sendMessage', {message: message});
}
